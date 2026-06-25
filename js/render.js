/**
 * EthosCheck — render.js
 * Builds all HTML from data objects. No business logic here.
 */

const Render = (() => {

  const COMPLIANCE = {
    concern: { cls: "dot-concern", label: "Concerns reported" },
    mixed:   { cls: "dot-mixed",   label: "Mixed record" },
    unclear: { cls: "dot-unclear", label: "Unclear / unverified" },
    ok:      { cls: "dot-ok",      label: "No major concerns found" }
  };

  function complianceDot(level) {
    const c = COMPLIANCE[level] || COMPLIANCE.unclear;
    return `<span class="compliance-dot ${c.cls}"></span><span style="font-size:12px;color:var(--text2)">${c.label}</span>`;
  }

  function externalLinkIcon() {
    return `<svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M7 3H3a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1V9"/><path d="M10 2h4v4"/><path d="M15 1L8 8"/></svg>`;
  }

  function infoIcon() {
    return `<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" style="flex-shrink:0;margin-top:2px"><circle cx="8" cy="8" r="6"/><path d="M8 7v4"/><circle cx="8" cy="5" r=".5" fill="currentColor"/></svg>`;
  }

  function chevronIcon(id) {
    return `<svg id="ch-${id}" class="cat-chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M4 6l4 4 4-4"/></svg>`;
  }

  // ── Generic collapsible section wrapper ─────────────────
  // Every section uses this so they all look and behave identically.
  function collapsible(id, title, badgeHtml, bodyHtml) {
    if (!bodyHtml) return "";
    return `
      <div class="cat-block">
        <button class="cat-toggle" onclick="App.toggleCat('${id}')" aria-expanded="false" aria-controls="cb-${id}">
          <div class="cat-toggle-left">
            <span class="cat-title">${DOMPurify.sanitize(title)}</span>
            ${badgeHtml || ""}
          </div>
          ${chevronIcon(id)}
        </button>
        <div class="cat-body" id="cb-${id}">${bodyHtml}</div>
      </div>`;
  }

  function countBadge(n, label) {
    if (!n) return "";
    return `<span class="cat-badge" style="background:var(--bg3);color:var(--text2)">${n} ${label}</span>`;
  }

  function browseCard(key, entry) {
    return `
      <a class="browse-card" href="/pages/entry.html?id=${key}">
        <div class="browse-card-type">${DOMPurify.sanitize(entry.type)}</div>
        <div class="browse-card-name">${DOMPurify.sanitize(entry.name)}</div>
        <div class="browse-card-sub">${DOMPurify.sanitize(entry.subtitle.split('—')[0].trim())}</div>
      </a>`;
  }

  // ── Header with summary stats ───────────────────────────
  function resultHeader(entry) {
    const typeIcon = entry.type === "government" ? "🏛️" : entry.type === "company" ? "🏢" : "📦";
    const irishTag = entry.tags && entry.tags.includes("ireland")
      ? `<span class="rtag" style="background:var(--accent-bg);color:var(--accent)">🇮🇪 Ireland</span>` : "";

    const findingCount = (entry.categories || []).reduce((sum, c) => sum + ((c.findings || []).length), 0);
    const subCount = entry.corporate && entry.corporate.subsidiaries ? entry.corporate.subsidiaries.length : 0;
    const catCount = (entry.categories || []).length;

    return `
      <div class="result-header">
        <div class="result-type">${typeIcon} ${DOMPurify.sanitize(entry.type)}</div>
        <div class="result-name">${DOMPurify.sanitize(entry.name)}</div>
        <div class="result-sub">${DOMPurify.sanitize(entry.subtitle)}</div>
        ${entry.summary ? `<p style="font-size:14px;color:var(--text2);margin-top:.75rem;line-height:1.65">${DOMPurify.sanitize(entry.summary)}</p>` : ""}
        <div class="result-tags" style="margin-top:.5rem">
          ${irishTag}
          <span class="rtag" style="background:var(--bg2);color:var(--text2)">${catCount} categor${catCount !== 1 ? "ies" : "y"}</span>
          <span class="rtag" style="background:var(--bg2);color:var(--text2)">${findingCount} sourced finding${findingCount !== 1 ? "s" : ""}</span>
          ${subCount ? `<span class="rtag" style="background:var(--bg2);color:var(--text2)">${subCount} subsidiar${subCount !== 1 ? "ies" : "y"}</span>` : ""}
        </div>
      </div>`;
  }

  function resultNotice() {
    return `
      <div class="result-notice">
        ${infoIcon()}
        All findings describe what has already happened or is currently ongoing — not what a company says it plans to do. Every finding links to its original public source. EthosCheck does not assign scores or ratings.
      </div>`;
  }

  // ── Expand / collapse all controls ──────────────────────
  function expandControls() {
    return `
      <div style="display:flex;gap:8px;margin-bottom:1rem">
        <button class="suggest-btn" onclick="App.expandAll()">Expand all</button>
        <button class="suggest-btn" onclick="App.collapseAll()">Collapse all</button>
      </div>`;
  }

  // ── Corporate structure (collapsible) ───────────────────
  function corporateStructure(corporate) {
    if (!corporate) return "";
    const rows = [];

    if (corporate.parent) {
      rows.push(`
        <div class="struct-card">
          <div class="struct-card-role">Parent company</div>
          <div class="struct-card-name" data-search="${DOMPurify.sanitize(corporate.parent.name)}">${DOMPurify.sanitize(corporate.parent.name)}</div>
          <div class="struct-card-note" style="margin-top:4px">${complianceDot(corporate.parent.compliance)}</div>
          <div class="struct-card-note" style="margin-top:4px">${DOMPurify.sanitize(corporate.parent.note)}</div>
        </div>`);
    } else if (corporate.subsidiaries && corporate.subsidiaries.length) {
      rows.push(`
        <div class="struct-card">
          <div class="struct-card-role">Parent company</div>
          <div class="struct-card-note" style="font-size:13px;margin-top:4px">No parent — publicly listed or independent</div>
        </div>`);
    }

    (corporate.subsidiaries || []).forEach(s => {
      rows.push(`
        <div class="struct-card">
          <div class="struct-card-role">Subsidiary / division</div>
          <div class="struct-card-name" data-search="${DOMPurify.sanitize(s.name)}">${DOMPurify.sanitize(s.name)}</div>
          <div class="struct-card-note" style="margin-top:4px">${complianceDot(s.compliance)}</div>
          <div class="struct-card-note" style="margin-top:4px">${DOMPurify.sanitize(s.note)}</div>
        </div>`);
    });

    (corporate.shareholders || []).forEach(s => {
      rows.push(`
        <div class="struct-card">
          <div class="struct-card-role">Shareholder</div>
          <div class="struct-card-name">${DOMPurify.sanitize(s.name)}</div>
          <div class="struct-card-note" style="margin-top:4px">${complianceDot(s.compliance)}</div>
          <div class="struct-card-note" style="margin-top:4px">${DOMPurify.sanitize(s.note)}</div>
        </div>`);
    });

    if (!rows.length) return "";

    const total = rows.length;
    const body = `
    <div class="structure-grid" style="margin-top:.75rem;grid-template-columns:1fr">${rows.join("")}</div>
      <div class="compliance-legend">
        <span><span class="compliance-dot dot-concern"></span>Concerns reported</span>
        <span><span class="compliance-dot dot-mixed"></span>Mixed record</span>
        <span><span class="compliance-dot dot-unclear"></span>Unclear / unverified</span>
        <span><span class="compliance-dot dot-ok"></span>No major concerns found</span>
      </div>`;

    return collapsible("structure", "Corporate structure & ownership", countBadge(total, total === 1 ? "entity" : "entities"), body);
  }

  // ── Products (collapsible) ──────────────────────────────
  function productsSection(products) {
    if (!products || !products.length) return "";
const cards = products.map(p => `
      <div class="product-card" style="cursor:pointer" onclick="App.search('${DOMPurify.sanitize(p.name)}')">
        <div class="product-name">${DOMPurify.sanitize(p.name)}</div>
        <div class="product-flags">${(p.flags || []).map(f => `<span class="pflag badge-supply">${DOMPurify.sanitize(f)}</span>`).join("")}</div>
      </div>`).join("");

    const body = `<div class="product-grid" style="margin-top:.75rem;grid-template-columns:1fr">${cards}</div>`;
    return collapsible("products", "Products & flags", countBadge(products.length, products.length === 1 ? "product" : "products"), body);
  }

  // ── Findings by category (collapsible) ──────────────────
  function categoriesSection(categories) {
    if (!categories || !categories.length) return "";

    const blocks = categories.map((cat, i) => {
      const findings = (cat.findings || []).map(f => `
        <div class="finding">
          <p>${DOMPurify.sanitize(f.text)}</p>
          <a class="finding-source" href="${DOMPurify.sanitize(f.url)}" target="_blank" rel="noopener">
            ${externalLinkIcon()} ${DOMPurify.sanitize(f.source)}
          </a>
        </div>`).join("");

      const n = (cat.findings || []).length;
      const id = "cat" + i;

      return `
        <div class="cat-block">
          <button class="cat-toggle" onclick="App.toggleCat('${id}')" aria-expanded="false" aria-controls="cb-${id}">
            <div class="cat-toggle-left">
              <span class="cat-title">${DOMPurify.sanitize(cat.label)}</span>
              <span class="cat-badge ${DOMPurify.sanitize(cat.badgeClass)}">${n} finding${n !== 1 ? "s" : ""}</span>
            </div>
            ${chevronIcon(id)}
          </button>
          <div class="cat-body" id="cb-${id}">${findings}</div>
        </div>`;
    }).join("");

    return `
      <div class="categories-section">
        <div class="section-label" style="margin-bottom:.75rem">Ethical findings by category</div>
        ${blocks}
      </div>`;
  }

  function alternativesSection(alternatives) {
    if (!alternatives || !alternatives.length) return "";
    const items = alternatives.map(a => `<div class="alt-item">${DOMPurify.sanitize(a)}</div>`).join("");
    return `
      <div class="alt-block">
        <div class="alt-title">Ethical alternatives to consider</div>
        ${items}
      </div>`;
  }

  function suggestBlock() {
    return `
      <div class="suggest-block">
        <div>
          <p>Something missing or inaccurate?</p>
          <span>Help keep findings up to date and well-sourced.</span>
        </div>
        <a class="suggest-btn" href="/pages/submit.html">Suggest an edit</a>
      </div>`;
  }

  // ── Credibility footer ───────────────────────────────────
  function sourceFooter(entry) {
    const findingCount = (entry.categories || []).reduce((sum, c) => sum + ((c.findings || []).length), 0);
    if (!findingCount) return "";
    return `
      <div style="font-size:12px;color:var(--text3);text-align:center;padding:1rem 0;border-top:0.5px solid var(--border);margin-top:1.5rem">
        ${findingCount} finding${findingCount !== 1 ? "s" : ""}, each linked to a primary public source — court judgments, regulatory findings, tribunal reports, or investigative journalism.
      </div>`;
  }

  function notFound(query) {
    const suggestions = Object.keys(DB).map(k =>
      `<button class="nf-chip" onclick="App.search('${DOMPurify.sanitize(DB[k].name)}')">${DOMPurify.sanitize(DB[k].name)}</button>`
    ).join("");

    return `
      <div class="not-found">
        <h3>No results for "${DOMPurify.sanitize(query)}"</h3>
        <p>We don't have an entry for that yet. Try the suggestions below, or suggest a finding to add this subject to EthosCheck.</p>
        <div class="nf-chips">${suggestions}</div>
        <div style="margin-top:1rem">
          <a class="search-btn" href="/pages/submit.html">Suggest a finding for "${DOMPurify.sanitize(query)}"</a>
        </div>
      </div>`;
  }

function fullEntry(entry, key) {
    return [
      resultHeader(entry),
      expandControls(),
      corporateStructure(entry.corporate),
      productsSection(entry.products),
      categoriesSection(entry.categories),
      alternativesSection(entry.alternatives),
      sourceFooter(entry),
      resultNotice(),
      suggestBlock()
    ].join("");
  }

  return { browseCard, fullEntry, notFound };

})();
