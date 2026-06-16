/**
 * EthosCheck — app.js
 * Search, routing, filter, AI search, toggle logic.
 */

const App = (() => {

  let activeFilter = "all";

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

    if (resultsEl) resultsEl.innerHTML = Render.fullEntry(entry);

    // Bind clickable names in corporate structure to search
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

  // ── Entry page (entry.html) ─────────────────────────────
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
    container.innerHTML = Render.fullEntry(entry);

    document.querySelectorAll(".struct-card-name[data-search]").forEach(el => {
      el.addEventListener("click", () => {
        window.location.href = `index.html?q=${encodeURIComponent(el.dataset.search)}`;
      });
    });
  }

  // ── Init ────────────────────────────────────────────────
  function init() {
    renderBrowse();

    const input = document.getElementById("search-input");
    if (input) {
      input.addEventListener("keydown", e => { if (e.key === "Enter") _runSearch(input.value); });

      // Handle ?q= param on index page
      const params = new URLSearchParams(window.location.search);
      const q = params.get("q");
      if (q) { input.value = q; _runSearch(q); }
    }

    // Entry page
    if (document.getElementById("entry-container")) loadEntryPage();

    // Nav active state
    const page = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-links a").forEach(a => {
      if (a.getAttribute("href") === page) a.classList.add("active");
    });
  }

  return { init, search, setFilter, toggleCat, aiSearch };

})();

// Expose toggleCat globally for inline onclick in rendered HTML
function toggleCat(id) { App.toggleCat(id); }

document.addEventListener("DOMContentLoaded", App.init);
