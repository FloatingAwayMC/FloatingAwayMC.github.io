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
    return `<svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M7 3H3a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1V9M10 2h4m0 0v4m0-4L7 9"/></svg>`;
  }

  function infoIcon() {
    return `<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" style="flex-shrink:0;margin-top:2px"><circle cx="8" cy="8" r="6"/><path d="M8 5v3M8 11h.01"/></svg>`;
  }

  function chevronIcon(id) {
    return `<svg id="ch-${id}" class="cat-chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M4 6l4 4 4-4"/></svg>`;
  }

  function browseCard(key, entry) {
    return `
      <a class="browse-card" href="entry.html?id=${key}">
        <div class="browse-card-type">${entry.type}</div>
        <div class="browse-card-name">${entry.name}</div>
        <div class="browse-card-sub">${entry.subtitle.split('—')[0].trim()}</div>
      </a>`;
  }

  function resultHeader(entry) {
    const typeIcon = entry.type === "government" ? "🏛️" : entry.type === "company" ? "🏢" : "📦";
    const irishTag = entry.tags && entry.tags.includes("ireland")
      ? `<span class="rtag" style="background:var(--accent-bg);color:var(--accent)">🇮🇪 Ireland</span>` : "";
    const catCount = `<span class="rtag" style="background:var(--bg2);color:var(--text2)">${entry.categories.length} categories</span>`;
    const subCount = entry.corporate && entry.corporate.subsidiaries && entry.corporate.subsidiaries.length
      ? `<span class="rtag" style="background:var(--bg2);color:var(--text2)">${entry.corporate.subsidiaries.length} subsidiaries</span>` : "";

    return `
      <div class="result-header">
        <div class="result-type">${typeIcon} ${entry.type}</div>
        <div class="result-name">${entry.name}</div>
        <div class="result-sub">${entry.subtitle}</div>
        <div class="result-tags">${irishTag}${catCount}${subCount}</div>
      </div>`;
  }

  function resultNotice() {
    return `
      <div class="result-notice">
        ${infoIcon()}
        All findings describe what has already happened or is currently ongoing — not what a company says it plans to do. Every finding links to its original public source. EthosCheck does not assign scores or pass judgement.
      </div>`;
  }

  function corporateStructure(corporate, onNameClick) {
    if (!corporate) return "";
    const rows = [];

    if (corporate.parent) {
      rows.push(`
        <div class="struct-card">
          <div class="struct-card-role">Parent company</div>
          <div class="struct-card-name" data-search="${corporate.parent.name}">${corporate.parent.name}</div>
          <div class="struct-card-note" style="margin-top:4px">${complianceDot(corporate.parent.compliance)}</div>
          <div class="struct-card-note" style="margin-top:4px">${corporate.parent.note}</div>
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
          <div class="struct-card-name" data-search="${s.name}">${s.name}</div>
          <div class="struct-card-note" style="margin-top:4px">${complianceDot(s.compliance)}</div>
          <div class="struct-card-note" style="margin-top:4px">${s.note}</div>
        </div>`);
    });

    (corporate.shareholders || []).forEach(s => {
      rows.push(`
        <div class="struct-card">
          <div class="struct-card-role">Shareholder</div>
          <div class="struct-card-name">${s.name}</div>
          <div class="struct-card-note" style="margin-top:4px">${complianceDot(s.compliance)}</div>
          <div class="struct-card-note" style="margin-top:4px">${s.note}</div>
        </div>`);
    });

    if (!rows.length) return "";

    return `
      <div class="structure-section">
        <div class="section-label">Corporate structure & ownership</div>
        <div class="structure-grid">${rows.join("")}</div>
        <div class="compliance-legend">
          <span><span class="compliance-dot dot-concern"></span>Concerns reported</span>
          <span><span class="compliance-dot dot-mixed"></span>Mixed record</span>
          <span><span class="compliance-dot dot-unclear"></span>Unclear / unverified</span>
          <span><span class="compliance-dot dot-ok"></span>No major concerns found</span>
        </div>
      </div>`;
  }

  function productsSection(products) {
    if (!products || !products.length) return "";
    const cards = products.map(p => `
      <div class="product-card">
        <div class="product-name">${p.name}</div>
        <div class="product-flags">${p.flags.map(f => `<span class="pflag badge-supply">${f}</span>`).join("")}</div>
      </div>`).join("");

    return `
      <div class="products-section">
        <div class="section-label">Products & flags</div>
        <div class="product-grid">${cards}</div>
      </div>`;
  }

  function categoriesSection(categories) {
    if (!categories || !categories.length) return "";
    const blocks = categories.map((cat, i) => {
      const findings = cat.findings.map(f => `
        <div class="finding">
          <p>${f.text}</p>
          <a class="finding-source" href="${f.url}" target="_blank" rel="noopener">
            ${externalLinkIcon()} ${f.source}
          </a>
        </div>`).join("");

      return `
        <div class="cat-block">
          <button class="cat-toggle" onclick="toggleCat(${i})" aria-expanded="false" aria-controls="cb-${i}">
            <div class="cat-toggle-left">
              <span class="cat-title">${cat.label}</span>
              <span class="cat-badge ${cat.badgeClass}">${cat.findings.length} finding${cat.findings.length > 1 ? "s" : ""}</span>
            </div>
            ${chevronIcon(i)}
          </button>
          <div class="cat-body" id="cb-${i}">${findings}</div>
        </div>`;
    }).join("");

    return `<div class="categories-section"><div class="section-label" style="margin-bottom:.75rem">Ethical findings by category</div>${blocks}</div>`;
  }

  function alternativesSection(alternatives) {
    if (!alternatives || !alternatives.length) return "";
    const items = alternatives.map(a => `<div class="alt-item">${a}</div>`).join("");
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
        <a class="suggest-btn" href="submit.html">Suggest an edit</a>
      </div>`;
  }

  function notFound(query) {
    const suggestions = Object.keys(DB).map(k =>
      `<button class="nf-chip" onclick="App.search('${DB[k].name}')">${DB[k].name}</button>`
    ).join("");

    return `
      <div class="not-found">
        <h3>No results for "${query}"</h3>
        <p>We don't have an entry for that yet. Try the suggestions below, or use AI search to see what's been publicly reported.</p>
        <div class="nf-chips">${suggestions}</div>
        <div class="ai-block">
          <h3>Search public sources for "${query}"</h3>
          <p>EthosCheck will search publicly available reports and summarise what has actually happened — no future promises included.</p>
          <button class="search-btn" onclick="App.aiSearch('${query}')">Search for "${query}"</button>
          <div id="ai-result" style="margin-top:1rem"></div>
        </div>
      </div>`;
  }

  function aiLoading() {
    return `<div class="loading">Searching public sources <div class="dot-flash"><span></span><span></span><span></span></div></div>`;
  }

  function fullEntry(entry) {
    return [
      resultHeader(entry),
      resultNotice(),
      corporateStructure(entry.corporate),
      productsSection(entry.products),
      categoriesSection(entry.categories),
      alternativesSection(entry.alternatives),
      suggestBlock()
    ].join("");
  }

  return { browseCard, fullEntry, notFound, aiLoading };

})();
