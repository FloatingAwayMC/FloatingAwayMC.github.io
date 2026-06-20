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

// Apply theme immediately before page renders
(function() {
  const saved = localStorage.getItem("ethoscheck-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (saved === "dark" || (!saved && prefersDark)) {
    applyDark();
  }
})();

const App = (() => {

  let activeFilter = "all";

  // ── Build Fuse index from DB ────────────────────────────
  // Called once on init so it's ready for all searches.
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
      threshold: 0.4,   // 0 = exact only, 1 = match anything. 0.4 is forgiving but not wild.
      minMatchCharLength: 2
    });
  }

  // ── Dark mode toggle ────────────────────────────────────
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

  // ── Search ──────────────────────────────────────────────
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

    // Use Fuse for fuzzy matching; fall back to plain key/name check if Fuse isn't ready
    let matchKey = null;
    if (_fuse) {
      const fuseResults = _fuse.search(query);
      if (fuseResults.length > 0) {
        matchKey = fuseResults[0].item.key;
      }
    } else {
      // Fallback (same logic as before)
      const q = query.toLowerCase();
      matchKey = Object.keys(DB).find(k =>
        k.includes(q) ||
        q.includes(k) ||
        DB[k].name.toLowerCase().includes(q)
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

  // ── Filter ──────────────────────────────────────────────
  function setFilter(f, el) {
    activeFilter = f;
    document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
    if (el) el.classList.add("active");
    renderBrowse();
    const q = document.getElementById("search-input");
    if (q && q.value.trim()) _runSearch(q.value.trim());
  }

  // ── Browse grid ─────────────────────────────────────────
  function renderBrowse() {
    const grid = document.getElementById("browse-grid");
    if (!grid) return;

    const entries = Object.entries(DB).filter(([, e]) => {
      if (activeFilter === "all")     return true;
      if (activeFilter === "ireland") return e.tags && e.tags.includes("ireland");
      return e.type === activeFilter;
    });

    grid.innerHTML = entries
      .map(([key, entry]) => Render.browseCard(key, entry))
      .join("");
  }

  // ── Category toggle ─────────────────────────────────────
  function toggleCat(id) {
    const body = document.getElementById("cb-" + id);
    const chev = document.getElementById("ch-" + id);
    if (!body) return;
    const open = body.classList.toggle("open");
    if (chev) { open ? chev.classList.add("open") : chev.classList.remove("open"); }
  }

  // ── Newsletter subscribe ────────────────────────────────
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

  // ── Copy link ───────────────────────────────────────────
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

  // ── Entry page ──────────────────────────────────────────
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

  // ── Init ────────────────────────────────────────────────
  function init() {
    // Set button text based on current state
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

  return { init, search, setFilter, toggleCat, toggleDarkMode, subscribeNewsletter, copyLink };

})();

function toggleCat(id) { App.toggleCat(id); }

document.addEventListener("DOMContentLoaded", App.init);
