/**
 * EthosCheck — app.js
 * Search, routing, filter, AI search, toggle logic.
 */

// ── Apply theme before page renders to avoid flash ───────
(function() {
  const saved = localStorage.getItem("ethoscheck-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (saved === "dark" || (!saved && prefersDark)) {
    document.documentElement.classList.add("dark-mode");
    document.body && (document.body.style.backgroundColor = "#141414");
    document.body && (document.body.style.color = "#ffffff");
  } else {
    document.body && (document.body.style.backgroundColor = "#ffffff");
    document.body && (document.body.style.color = "#1a1a1a");
  }
})();

const App = (() => {

  let activeFilter = "all";

  // ── Dark mode toggle ────────────────────────────────────
  function toggleDarkMode() {
    const html = document.documentElement;
    const body = document.body;
    const btn = document.getElementById("dark-mode-btn");

    const isCurrentlyDark = html.classList.contains("dark-mode") ||
      (!html.classList.contains("light-mode") &&
       window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (isCurrentlyDark) {
      html.classList.remove("dark-mode");
      html.classList.add("light-mode");
      body.style.backgroundColor = "#ffffff";
      body.style.color = "#1a1a1a";
      if (btn) btn.textContent = "🌙 Dark";
      localStorage.setItem("ethoscheck-theme", "light");
    } else {
      html.classList.remove("light-mode");
      html.classList.add("dark-mode");
      body.style.backgroundColor = "#141414";
      body.style.color = "#ffffff";
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
    // Apply correct background on load
    const savedTheme = localStorage.getItem("ethoscheck-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.body.style.backgroundColor = "#141414";
      document.body.style.color = "#ffffff";
      document.documentElement.classList.add("dark-mode");
    } else {
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#1a1a1a";
    }

    // Set button text
    const btn = document.getElementById("dark-mode-btn");
    if (btn) {
      const isDark = document.documentElement.classList.contains("dark-mode");
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
