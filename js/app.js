/**
 * EthosCheck — app.js
 * Search, routing, filter, AI search, toggle logic.
 */

const DARK_STYLES = `
  body { background-color: #141414 !important; color: #ffffff !important; }
  nav { background-color: #141414 !important; border-color: rgba(255,255,255,0.15) !important; }
  .browse-card { background-color: #141414 !important; border-color: rgba(255,255,255,0.15) !important; }
  .browse-card:hover { background-color: #1e1e1c !important; }
  .browse-card-name { color: #ffffff !important; }
  .browse-card-sub { color: #a8a89e !important; }
  .browse-card-type { color: #6a6a62 !important; }
  .cat-toggle { background-color: #141414 !important; }
  .cat-toggle:hover { background-color: #1e1e1c !important; }
  .cat-block { border-color: rgba(255,255,255,0.15) !important; }
  .cat-body { border-color: rgba(255,255,255,0.08) !important; }
  .cat-title { color: #ffffff !important; }
  .struct-card { background-color: #141414 !important; border-color: rgba(255,255,255,0.15) !important; }
  .struct-card-note { color: #a8a89e !important; }
  .product-card { background-color: #141414 !important; border-color: rgba(255,255,255,0.15) !important; }
  .product-name { color: #ffffff !important; }
  .search-input { background-color: #141414 !important; color: #ffffff !important; border-color: rgba(255,255,255,0.15) !important; }
  .search-input::placeholder { color: #6a6a62 !important; }
  .result-notice { background-color: #1e1e1c !important; color: #a8a89e !important; }
  .result-name { color: #ffffff !important; }
  .result-sub { color: #a8a89e !important; }
  .result-type { color: #6a6a62 !important; }
  .finding { border-color: rgba(255,255,255,0.15) !important; }
  .finding p { color: #ffffff !important; }
  .ai-block { background-color: #1e1e1c !important; border-color: rgba(255,255,255,0.15) !important; }
  .ai-block h3 { color: #ffffff !important; }
  .ai-result { color: #ffffff !important; }
  .suggest-block { border-color: rgba(255,255,255,0.15) !important; }
  .suggest-block p { color: #ffffff !important; }
  .suggest-block span { color: #a8a89e !important; }
  .suggest-btn { color: #ffffff !important; border-color: rgba(255,255,255,0.15) !important; }
  .suggest-btn:hover { background-color: #1e1e1c !important; }
  .nav-btn { color: #ffffff !important; border-color: rgba(255,255,255,0.15) !important; }
  .nav-btn:hover { background-color: #1e1e1c !important; }
  .nav-links a { color: #a8a89e !important; }
  .nav-links a:hover { color: #ffffff !important; }
  .logo { color: #ffffff !important; }
  .chip { color: #a8a89e !important; border-color: rgba(255,255,255,0.15) !important; }
  .chip:hover { background-color: #1e1e1c !important; color: #ffffff !important; }
  .chip.active { background-color: #ffffff !important; color: #141414 !important; border-color: #ffffff !important; }
  .section-label { color: #6a6a62 !important; }
  .hero h1 { color: #ffffff !important; }
  .hero p { color: #a8a89e !important; }
  .alt-block { background-color: #0d2b1a !important; }
  .alt-item { color: #a8a89e !important; }
  .not-found h3 { color: #ffffff !important; }
  .not-found p { color: #a8a89e !important; }
  .compliance-legend { color: #6a6a62 !important; }
  .result-tags .rtag { background-color: #1e1e1c !important; color: #a8a89e !important; }
  .badge-env { background-color: #0a2e1a !important; color: #5dd49a !important; }
  .badge-labour { background-color: #0a1e38 !important; color: #6ab4f5 !important; }
  .badge-tax { background-color: #2e1e08 !important; color: #f5c060 !important; }
  .badge-animal { background-color: #162608 !important; color: #8dd45a !important; }
  .badge-political { background-color: #2e0a18 !important; color: #f57ab0 !important; }
  .badge-supply { background-color: #2e1208 !important; color: #f5906a !important; }
  .badge-housing { background-color: #160e30 !important; color: #a08af5 !important; }
  .badge-data { background-color: #082030 !important; color: #60d4f5 !important; }
  footer { border-color: rgba(255,255,255,0.15) !important; color: #6a6a62 !important; }
  footer a { color: #6a6a62 !important; }
  .dark-mode-btn { color: #a8a89e !important; border-color: rgba(255,255,255,0.15) !important; }
  .static-content h1 { color: #ffffff !important; }
  .static-content h2 { color: #ffffff !important; }
  .static-content p { color: #a8a89e !important; }
  .static-content li { color: #a8a89e !important; }
  .form-input, .form-select, .form-textarea { background-color: #141414 !important; color: #ffffff !important; border-color: rgba(255,255,255,0.15) !important; }
  .form-label { color: #ffffff !important; }
  .form-hint { color: #6a6a62 !important; }
`;

function applyDark() {
  let style = document.getElementById("dark-style");
  if (!style) {
    style = document.createElement("style");
    style.id = "dark-style";
    document.head.appendChild(style);
  }
  style.textContent = DARK_STYLES;
}

function applyLight() {
  const style = document.getElementById("dark-style");
  if (style) style.remove();
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

  // ── Dark mode toggle ────────────────────────────────────
  function toggleDarkMode() {
    const btn = document.getElementById("dark-mode-btn");
    const isDark = !!document.getElementById("dark-style");

    if (isDark) {
      applyLight();
      if (btn) btn.textContent = "🌙 Dark";
      localStorage.setItem("ethoscheck-theme", "light");
    } else {
      applyDark();
      if (btn) btn.textContent = "☀️ Light";
      localStorage.setItem("ethoscheck-theme", "dark");
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
    query = (query || "").trim().toLowerCase();
    const resultsEl = document.getElementById("results");
    const browseEl  = document.getElementById("browse-section");

    if (!query) {
      if (resultsEl) resultsEl.classList.add("hidden");
      if (browseEl)  browseEl.classList.remove("hidden");
      return;
    }

    if (resultsEl) resultsEl.classList.remove("hidden");
    if (browseEl)  browseEl.classList.add("hidden");

    const matchKey = Object.keys(DB).find(k =>
      k.includes(query) ||
      query.includes(k) ||
      DB[k].name.toLowerCase().includes(query)
    );

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

  // ── AI search ───────────────────────────────────────────
  async function aiSearch(query) {
    const el = document.getElementById("ai-result");
    if (!el) return;
    el.innerHTML = Render.aiLoading();

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 1000,
          tools: [{ "type": "web_search_20250305", "name": "web_search" }],
          system: `You are EthosCheck's research assistant. Search for publicly reported ethical concerns about the given company, product, or government. Cover: environment, labour rights, tax, animal welfare, political lobbying, supply chain, and data/privacy.

CRITICAL RULE: Only report what has already happened or is currently happening. Do NOT include future pledges, sustainability targets, net zero goals, commitments to improve, stated intentions, or anything a company says it plans to do. If a company says it will do something, that is not a finding — only verified past actions and current ongoing conduct count.

Present findings as a factual list. Each finding is a short paragraph starting with the category in square brackets e.g. [Environment]. Name the source for every finding. No scores, no opinion. If nothing credible is found, say so plainly.`,
          messages: [{ role: "user", content: `Search for ethical findings about: ${query}` }]
        })
      });

      const data = await res.json();
      const text = data.content
        .filter(b => b.type === "text")
        .map(b => b.text)
        .join("\n");

      if (text) {
        el.innerHTML = `
          <div class="ai-result">${text.replace(/\[([^\]]+)\]/g, "<strong>[$1]</strong>")}</div>
          <p style="font-size:12px;color:var(--text3);margin-top:1rem">
            Found via web search. <a href="submit.html" style="color:var(--accent)">Submit as a verified finding →</a>
          </p>`;
      } else {
        el.innerHTML = `<p style="font-size:14px;color:var(--text2)">No findings returned. Try submitting what you know manually.</p>`;
      }
    } catch (err) {
      el.innerHTML = `<p style="font-size:14px;color:var(--text2)">Search unavailable right now. Try <a href="https://ethicalconsumer.org" target="_blank" style="color:var(--accent)">ethicalconsumer.org</a> or <a href="https://goodonyou.eco" target="_blank" style="color:var(--accent)">goodonyou.eco</a> directly.</p>`;
    }
  }

  // ── Entry page ──────────────────────────────────────────
  function loadEntryPage() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const container = document.getElementById("entry-container");
    if (!container) return;

    if (!id || !DB[id]) {
      container.innerHTML = `<div class="not-found"><h3>Entry not found</h3><p><a href="index.html" style="color:var(--accent)">← Back to search</a></p></div>`;
      return;
    }

    const entry = DB[id];
    document.title = `${entry.name} — EthosCheck`;
    container.innerHTML = Render.fullEntry(entry, id);

    document.querySelectorAll(".struct-card-name[data-search]").forEach(el => {
      el.addEventListener("click", () => {
        window.location.href = `index.html?q=${encodeURIComponent(el.dataset.search)}`;
      });
    });
  }

  // ── Init ────────────────────────────────────────────────
  function init() {
    // Set button text based on current state
    const btn = document.getElementById("dark-mode-btn");
    if (btn) {
      const isDark = !!document.getElementById("dark-style");
      btn.textContent = isDark ? "☀️ Light" : "🌙 Dark";
    }

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

  return { init, search, setFilter, toggleCat, toggleDarkMode, aiSearch, subscribeNewsletter, copyLink };

})();

function toggleCat(id) { App.toggleCat(id); }

document.addEventListener("DOMContentLoaded", App.init);
