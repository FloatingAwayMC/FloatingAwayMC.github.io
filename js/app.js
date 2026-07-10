/**
 * EthosCheck — app.js
 * Search, routing, filter, toggle logic.
 */

function applyDark() {
  document.documentElement.classList.add("dark-mode");
  localStorage.setItem("ethoscheck-theme", "dark");
}

function applyLight() {
  document.documentElement.classList.remove("dark-mode");
  localStorage.setItem("ethoscheck-theme", "light");
}

(function() {
  const saved = localStorage.getItem("ethoscheck-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (saved === "dark" || (!saved && prefersDark)) {
    applyDark();
  }
})();

const App = (() => {

  let activeFilter = "all";

  let _fuse = null;
  function _buildFuse() {
    const items = Object.entries(DB).map(([key, entry]) => ({
      key,
      name: entry.name,
      subtitle: entry.subtitle || "",
      type: entry.type,
      tags: (entry.tags || []).join(" ")
    }));
    _fuse = new Fuse(items, {
      keys: ["name", "subtitle", "key"],
      threshold: 0.2,
      minMatchCharLength: 2
    });
  }

  function toggleDarkMode() {
    const btn = document.getElementById("dark-mode-btn");
    const isDark = document.documentElement.classList.contains("dark-mode");
    if (isDark) {
      applyLight();
      if (btn) btn.textContent = "🌙 Dark";
    } else {
      applyDark();
      if (btn) btn.textContent = "☀️ Light";
    }
  }

  function search(query) {
    const input = document.getElementById("search-input");
    if (input) input.value = query;
    _runSearch(query);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function _runSearch(query) {
    query = (query || "").trim();
    const resultsEl = document.getElementById("results");
    const browseEl  = document.getElementById("browse-section");

    if (!query) {
      if (resultsEl) resultsEl.classList.add("hidden");
      if (browseEl)  browseEl.classList.remove("hidden");
      return;
    }

    if (resultsEl) resultsEl.classList.remove("hidden");
    if (browseEl)  browseEl.classList.add("hidden");

    let matchKey = null;
    if (_fuse) {
      const fuseResults = _fuse.search(query);
      if (fuseResults.length > 0) matchKey = fuseResults[0].item.key;
    } else {
      const q = query.toLowerCase();
      matchKey = Object.keys(DB).find(k =>
        k.includes(q) || q.includes(k) || DB[k].name.toLowerCase().includes(q)
      );
    }

    if (!matchKey) {
      if (resultsEl) resultsEl.innerHTML = Render.notFound(query);
      return;
    }

    const entry = DB[matchKey];

    if (activeFilter !== "all" && activeFilter !== "ireland" && entry.type !== activeFilter) {
      if (resultsEl) resultsEl.innerHTML = `<div style="padding:2rem 0;font-size:14px;color:var(--text2)">This entry is categorised as <strong>${entry.type}</strong>. Clear the filter to see it.</div>`;
      return;
    }

    if (activeFilter === "ireland" && (!entry.tags || !entry.tags.includes("ireland"))) {
      if (resultsEl) resultsEl.innerHTML = `<div style="padding:2rem 0;font-size:14px;color:var(--text2)">This entry is not tagged as Ireland-specific. Clear the filter to see it.</div>`;
      return;
    }

    if (resultsEl) resultsEl.innerHTML = Render.fullEntry(entry, matchKey);

    document.querySelectorAll(".struct-card-name[data-search]").forEach(el => {
      el.addEventListener("click", () => search(el.dataset.search));
    });
  }

  function setFilter(f, el) {
    activeFilter = f;
    document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
    if (el) el.classList.add("active");
    renderBrowse();
    const q = document.getElementById("search-input");
    if (q && q.value.trim()) _runSearch(q.value.trim());
  }

  // ── Category map ─────────────────────────────────────────
  const CATEGORIES = [
    { label: "Big Tech",               keys: ["google","meta","apple","amazon","microsoft","tiktok"] },
    { label: "Pharma",                 keys: ["pfizer","johnson-johnson","astrazeneca"] },
    { label: "Irish Companies",        keys: ["ryanair","aib","bank-of-ireland","dunnes-stores","crh"] },
    { label: "Political Parties",      keys: ["fianna-fail","fine-gael","sinn-fein"] },
    { label: "Food & Consumer",        keys: ["nestle","coca-cola","mcdonalds","primark"] },
    { label: "Fast Fashion",           keys: ["zara","hm","shein"] },
    { label: "Energy & Fuel",          keys: ["circle-k","shell-ireland","applegreen","top-oil"] },
    { label: "Media & Publishing",     keys: ["rte","inm","newscorp_ireland","reach_plc","irish_times"] },
    { label: "Hospitality & Property", keys: ["ires_reit","kennedy_wilson","iput","airbnb_ireland","dalata"] },
    { label: "Agri-food",              keys: ["abp_food_group","ornua","glanbia","bord_na_mona","dawn_meats"] },
    { label: "Insurance & Finance",    keys: ["axa_ireland","aviva_ireland","fbd_insurance","irish_life","zurich_ireland"] },
    { label: "Logistics & Delivery",   keys: ["an_post","dhl_ireland","deliveroo_ireland","gls_ireland","fastway_couriers"] },
    { label: "Defence / Dual-use",     keys: ["palantir","raytheon","bae_systems","lockheed_martin","l3harris"] },
    { label: "Irish Construction",     keys: ["cairn_homes","glenveagh","bam_ireland","john_sisk","ardstone_capital"] }
  ];

  // ── Browse grid (grouped, collapsed by default) ──────────
  function renderBrowse() {
    const grid = document.getElementById("browse-grid");
    if (!grid) return;

    const passesFilter = (e) => {
      if (activeFilter === "all")     return true;
      if (activeFilter === "ireland") return e.tags && e.tags.includes("ireland");
      return e.type === activeFilter;
    };

    const seen = new Set();
    let html = "";

    CATEGORIES.forEach((cat, ci) => {
      const cards = cat.keys
        .filter(key => DB[key] && passesFilter(DB[key]))
        .map(key => { seen.add(key); return Render.browseCard(key, DB[key]); })
        .join("");

      if (!cards) return;

      html += `
        <div class="cat-block">
          <button class="cat-toggle" onclick="App.toggleBrowseCat(${ci})" aria-expanded="false">
            <div class="cat-toggle-left"><span class="cat-title">${cat.label}</span></div>
            <svg id="bch-${ci}" class="cat-chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M4 6l4 4 4-4"/></svg>
          </button>
          <div class="cat-body" id="bg-${ci}">
            <div class="browse-grid" style="margin-bottom:0;grid-template-columns:1fr">${cards}</div>
          </div>
        </div>`;
    });

    const orphans = Object.entries(DB)
      .filter(([key, e]) => !seen.has(key) && passesFilter(e))
      .map(([key, e]) => Render.browseCard(key, e))
      .join("");
    if (orphans) {
      html += `
        <div class="cat-block">
          <button class="cat-toggle" onclick="App.toggleBrowseCat(999)" aria-expanded="false">
            <div class="cat-toggle-left"><span class="cat-title">Other</span></div>
            <svg id="bch-999" class="cat-chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M4 6l4 4 4-4"/></svg>
          </button>
          <div class="cat-body" id="bg-999"><div class="browse-grid" style="margin-bottom:0;grid-template-columns:1fr">${orphans}</div></div>
        </div>`;
    }

    grid.innerHTML = html;
  }

  function toggleBrowseCat(id) {
    const body = document.getElementById("bg-" + id);
    const chev = document.getElementById("bch-" + id);
    if (!body) return;
    const open = body.classList.toggle("open");
    if (chev) open ? chev.classList.add("open") : chev.classList.remove("open");
  }

  // ── Entry page section toggles ───────────────────────────
  function toggleCat(id) {
    const body = document.getElementById("cb-" + id);
    const chev = document.getElementById("ch-" + id);
    if (!body) return;
    const open = body.classList.toggle("open");
    if (chev) open ? chev.classList.add("open") : chev.classList.remove("open");
  }

  function expandAll() {
    document.querySelectorAll(".cat-body").forEach(b => b.classList.add("open"));
    document.querySelectorAll(".cat-chevron").forEach(c => c.classList.add("open"));
  }

  function collapseAll() {
    document.querySelectorAll(".cat-body").forEach(b => b.classList.remove("open"));
    document.querySelectorAll(".cat-chevron").forEach(c => c.classList.remove("open"));
  }

  function subscribeNewsletter() {
    const email = document.getElementById("nl-email");
    if (!email || !email.value.includes("@")) {
      alert("Please enter a valid email address."); return;
    }
    email.value = "";
    email.placeholder = "Thanks — you're subscribed!";
    email.disabled = true;
    const btn = email.nextElementSibling;
    if (btn) { btn.disabled = true; btn.textContent = "Done"; }
  }

  function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
      const btns = document.querySelectorAll(".share-btn");
      const copyBtn = Array.from(btns).find(b => b.textContent.includes("Copy"));
      if (copyBtn) {
        const orig = copyBtn.innerHTML;
        copyBtn.textContent = "Copied!";
        setTimeout(() => { copyBtn.innerHTML = orig; }, 1500);
      }
    });
  }

  function loadEntryPage() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const container = document.getElementById("entry-container");
    if (!container) return;

    if (!id || !DB[id]) {
      container.innerHTML = `<div class="not-found"><h3>Entry not found</h3><p><a href="/index.html" style="color:var(--accent)">← Back to search</a></p></div>`;
      return;
    }

    const entry = DB[id];
    document.title = `${entry.name} — EthosCheck`;
    container.innerHTML = Render.fullEntry(entry, id);

    document.querySelectorAll(".struct-card-name[data-search]").forEach(el => {
      el.addEventListener("click", () => {
        window.location.href = `/index.html?q=${encodeURIComponent(el.dataset.search)}`;
      });
    });
  }

  function init() {
    const btn = document.getElementById("dark-mode-btn");
    if (btn) {
      const isDark = document.documentElement.classList.contains("dark-mode");
      btn.textContent = isDark ? "☀️ Light" : "🌙 Dark";
    }

    _buildFuse();
    renderBrowse();

    const input = document.getElementById("search-input");
    if (input) {
      input.addEventListener("keydown", e => { if (e.key === "Enter") _runSearch(input.value); });
      const params = new URLSearchParams(window.location.search);
      const q = params.get("q");
      if (q) { input.value = q; _runSearch(q); }
    }

    if (document.getElementById("entry-container")) loadEntryPage();

    const page = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-links a").forEach(a => {
      if (a.getAttribute("href") === page) a.classList.add("active");
    });
  }

  return { init, search, setFilter, toggleCat, toggleBrowseCat, expandAll, collapseAll, toggleDarkMode, subscribeNewsletter, copyLink };

})();

function toggleCat(id) { App.toggleCat(id); }

document.addEventListener("DOMContentLoaded", App.init);
