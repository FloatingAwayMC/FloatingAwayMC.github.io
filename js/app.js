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

  // ── Fuse index (name/key search) ─────────────────────────
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

  // ── Full-text search across findings ─────────────────────
  // Returns array of { key, entry, snippets[] } sorted by match count
  function _findingsSearch(query) {
    const q = query.toLowerCase().trim();
    if (!q || q.length < 3) return [];
    const results = [];
    Object.entries(DB).forEach(([key, entry]) => {
      const snippets = [];
      (entry.categories || []).forEach(cat => {
        (cat.findings || []).forEach(f => {
          if (f.text.toLowerCase().includes(q)) {
            // Extract a short snippet around the match
            const idx = f.text.toLowerCase().indexOf(q);
            const start = Math.max(0, idx - 60);
            const end = Math.min(f.text.length, idx + q.length + 60);
            const snippet = (start > 0 ? "…" : "") + f.text.slice(start, end) + (end < f.text.length ? "…" : "");
            snippets.push({ catLabel: cat.label, snippet });
          }
        });
      });
      if (snippets.length > 0) results.push({ key, entry, snippets });
    });
    // Sort by number of matching findings, most matches first
    results.sort((a, b) => b.snippets.length - a.snippets.length);
    return results;
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

  function _passesFilter(entry) {
    if (activeFilter === "all") return true;
    if (activeFilter === "ireland") return entry.tags && entry.tags.includes("ireland");
    return entry.type === activeFilter;
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

    // Step 1: Try name/key match with Fuse
    let nameMatch = null;
    if (_fuse) {
      const fuseResults = _fuse.search(query);
      if (fuseResults.length > 0) nameMatch = fuseResults[0].item.key;
    }

    // Step 2: Search findings text
    const findingsMatches = _findingsSearch(query);

    // Step 3: Decide what to show
    // If there's a strong name match AND it also appears in findings results → show full entry + related findings below
    // If name match only → show full entry
    // If findings matches only → show multi-result list
    // If nothing → not found

    if (nameMatch && _passesFilter(DB[nameMatch])) {
      // Show the matched entry in full
      const entry = DB[nameMatch];
      let html = Render.fullEntry(entry, nameMatch);

      // If there are also findings matches from OTHER entries, show them below
      const otherMatches = findingsMatches.filter(r => r.key !== nameMatch && _passesFilter(r.entry));
      if (otherMatches.length > 0) {
        html += _renderRelatedFindings(query, otherMatches);
      }

      if (resultsEl) resultsEl.innerHTML = html;
      document.querySelectorAll(".struct-card-name[data-search]").forEach(el => {
        el.addEventListener("click", () => search(el.dataset.search));
      });
      return;
    }

    // No name match — check findings
    const filteredFindings = findingsMatches.filter(r => _passesFilter(r.entry));
    if (filteredFindings.length > 0) {
      if (resultsEl) resultsEl.innerHTML = _renderFindingsResults(query, filteredFindings);
      return;
    }

    // Nothing found
    if (resultsEl) resultsEl.innerHTML = Render.notFound(query);
  }

  // ── Render a list of findings search results ─────────────
  function _renderFindingsResults(query, results) {
    const cards = results.map(({ key, entry, snippets }) => {
      const typeIcon = entry.type === "government" ? "🏛️" : entry.type === "company" ? "🏢" : "📦";
      const irishTag = entry.tags && entry.tags.includes("ireland")
        ? `<span class="rtag" style="background:var(--accent-bg);color:var(--accent);font-size:11px">🇮🇪 Ireland</span>` : "";
      const snippetHtml = snippets.slice(0, 2).map(s =>
        `<div style="font-size:13px;color:var(--text2);margin-top:.5rem;line-height:1.6;padding:.5rem;background:var(--bg2);border-radius:6px">
          <span style="font-size:11px;font-weight:600;color:var(--accent);text-transform:uppercase;letter-spacing:.04em">${DOMPurify.sanitize(s.catLabel)}</span><br>
          ${DOMPurify.sanitize(s.snippet)}
        </div>`
      ).join("");
      const moreCount = snippets.length > 2 ? `<div style="font-size:12px;color:var(--text3);margin-top:.25rem">+${snippets.length - 2} more finding${snippets.length - 2 > 1 ? "s" : ""}</div>` : "";

      return `
        <div class="cat-block" style="margin-bottom:.75rem;cursor:pointer" onclick="App.search('${DOMPurify.sanitize(entry.name)}')">
          <div style="padding:1rem">
            <div style="font-size:12px;color:var(--text3)">${typeIcon} ${DOMPurify.sanitize(entry.type)} ${irishTag}</div>
            <div style="font-size:17px;font-weight:600;margin-top:.2rem">${DOMPurify.sanitize(entry.name)}</div>
            <div style="font-size:13px;color:var(--text2)">${DOMPurify.sanitize(entry.subtitle)}</div>
            <div style="font-size:12px;color:var(--accent);margin-top:.3rem">${snippets.length} finding${snippets.length > 1 ? "s" : ""} matching "${DOMPurify.sanitize(query)}"</div>
            ${snippetHtml}
            ${moreCount}
          </div>
        </div>`;
    }).join("");

    return `
      <div>
        <div style="font-size:13px;color:var(--text2);margin-bottom:1rem">${results.length} entr${results.length > 1 ? "ies" : "y"} with findings matching "<strong>${DOMPurify.sanitize(query)}</strong>"</div>
        ${cards}
      </div>`;
  }

  // ── Render related findings below a full entry ────────────
  function _renderRelatedFindings(query, results) {
    const cards = results.slice(0, 5).map(({ key, entry, snippets }) => {
      const typeIcon = entry.type === "government" ? "🏛️" : entry.type === "company" ? "🏢" : "📦";
      return `
        <div class="cat-block" style="margin-bottom:.5rem;cursor:pointer" onclick="App.search('${DOMPurify.sanitize(entry.name)}')">
          <div style="padding:.75rem 1rem">
            <div style="font-size:12px;color:var(--text3)">${typeIcon} ${DOMPurify.sanitize(entry.type)}</div>
            <div style="font-size:15px;font-weight:600">${DOMPurify.sanitize(entry.name)}</div>
            <div style="font-size:12px;color:var(--accent);margin-top:.2rem">${snippets.length} related finding${snippets.length > 1 ? "s" : ""}</div>
          </div>
        </div>`;
    }).join("");

    return `
      <div style="margin-top:2rem;padding-top:1.5rem;border-top:1px solid var(--border)">
        <div style="font-size:13px;font-weight:600;color:var(--text2);margin-bottom:.75rem">Also found "${DOMPurify.sanitize(query)}" in ${results.length} other entr${results.length > 1 ? "ies" : "y"}:</div>
        ${cards}
      </div>`;
  }

  function setFilter(f, el) {
    activeFilter = f;
    document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
    if (el) el.classList.add("active");
    renderBrowse();
    const q = document.getElementById("search-input");
    if (q && q.value.trim()) _runSearch(q.value.trim());
  }

const CATEGORIES = [
  { label: "Big Tech",               keys: ["google","meta","apple","amazon","microsoft","tiktok"] },
  { label: "Pharma",                 keys: ["pfizer","johnson-johnson","astrazeneca"] },
  { label: "Aviation & Transport",   keys: ["ryanair"] },
  { label: "Irish Banking",          keys: ["aib","bank-of-ireland"] },
  { label: "Political Parties",      keys: ["fianna-fail","fine-gael","sinn-fein"] },
  { label: "Food & Consumer",        keys: ["nestle","coca-cola","mcdonalds","primark","dunnes-stores"] },
  { label: "Fast Fashion",           keys: ["zara","hm","shein"] },
  { label: "Energy & Fuel",          keys: ["circle-k","shell-ireland","applegreen","top-oil"] },
  { label: "Telecoms",               keys: ["vodafone_ireland","eir_ireland","three_ireland"] },
  { label: "Media & Publishing",     keys: ["rte","inm","newscorp_ireland","reach_plc","irish_times"] },
  { label: "Hospitality & Property", keys: ["ires_reit","kennedy_wilson","iput","airbnb_ireland","dalata"] },
  { label: "Agri-food",              keys: ["abp_food_group","ornua","glanbia","bord_na_mona","dawn_meats"] },
  { label: "Insurance & Finance",    keys: ["axa_ireland","aviva_ireland","fbd_insurance","irish_life","zurich_ireland"] },
  { label: "Logistics & Delivery",   keys: ["an_post","dhl_ireland","deliveroo_ireland","gls_ireland","fastway_couriers"] },
  { label: "Defence / Dual-use",     keys: ["palantir","raytheon","bae_systems","lockheed_martin","l3harris"] },
  { label: "Irish Construction",     keys: ["cairn_homes","glenveagh","bam_ireland","john_sisk","ardstone_capital","crh"] }
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
