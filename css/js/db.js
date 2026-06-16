/**
 * EthosCheck entry database
 * db.js — all entries as structured data
 *
 * Each entry follows this shape:
 * {
 *   type: "company" | "product" | "government"
 *   tags: string[]          — e.g. ["ireland"]
 *   name: string
 *   subtitle: string
 *   corporate: {
 *     parent: { name, note, compliance, link } | null
 *     subsidiaries: [{ name, note, compliance }]
 *     shareholders: [{ name, note, compliance }]
 *   }
 *   products: [{ name, flags[] }]
 *   categories: [{
 *     label: string
 *     badgeClass: string
 *     findings: [{ text, source, url }]
 *   }]
 *   alternatives: string[]
 * }
 *
 * RULE: Only past and current conduct. No future pledges, targets,
 * sustainability goals, or PR commitments. If they didn't do it, it doesn't count.
 */

const DB = {

  "coca-cola": {
    type: "product", tags: [],
    name: "Coca-Cola",
    subtitle: "Beverage product — The Coca-Cola Company",
    corporate: {
      parent: { name: "The Coca-Cola Company", note: "Atlanta, USA — NYSE: KO. Revenues ~$46bn/yr", compliance: "concern", link: "coca-cola company" },
      subsidiaries: [
        { name: "Fanta", note: "Owned by TCCC — same supply chain concerns apply", compliance: "concern" },
        { name: "Sprite", note: "Owned by TCCC", compliance: "concern" },
        { name: "Innocent Drinks", note: "Majority owned by TCCC since 2013. Traded on 'natural' image while under TCCC ownership.", compliance: "mixed" },
        { name: "Powerade", note: "Owned by TCCC", compliance: "concern" }
      ],
      shareholders: [
        { name: "Berkshire Hathaway (Warren Buffett)", note: "~9.3% stake — largest individual shareholder", compliance: "mixed" },
        { name: "Vanguard Group", note: "~8.6% institutional stake", compliance: "unclear" },
        { name: "BlackRock", note: "~6.4% institutional stake", compliance: "mixed" }
      ]
    },
    products: [
      { name: "Coca-Cola Classic", flags: ["High sugar", "Single-use plastic", "Recycling rates below production"] },
      { name: "Coca-Cola Zero", flags: ["Artificial sweeteners", "Single-use plastic"] },
      { name: "Fanta Orange", flags: ["High sugar", "Artificial colours", "Single-use plastic"] },
      { name: "Sprite", flags: ["High sugar", "Single-use plastic"] },
      { name: "Innocent Smoothies", flags: ["Parent company ethics concern", "Marketed as natural"] }
    ],
    categories: [
      { label: "Environment", badgeClass: "badge-env", findings: [
        { text: "Coca-Cola was named the world's most polluting plastic brand for the fifth consecutive year in Break Free From Plastic's 2023 brand audit, with its bottles found in 51 countries.", source: "Break Free From Plastic 2023", url: "https://breakfreefromplastic.org" },
        { text: "Coca-Cola's own internal sustainability audits, reviewed by the Ellen MacArthur Foundation, showed that the company's bottle recovery and recycling rates remain well below the volume of plastic it puts into the market annually across most countries including Ireland.", source: "Ellen MacArthur Foundation / TCCC Sustainability Audit", url: "https://ellenmacarthurfoundation.org" },
        { text: "Coca-Cola's water usage in water-stressed regions — including bottling plants in India and Mexico — has been linked to local water depletion by community groups and investigated by the Guardian.", source: "The Guardian 2023", url: "https://theguardian.com" }
      ]},
      { label: "Labour & human rights", badgeClass: "badge-labour", findings: [
        { text: "Workers at Coca-Cola bottling plants in Colombia were killed in the 1990s, with union organisers alleging company-linked paramilitary involvement. A US lawsuit (Sinaltrainal v. Coca-Cola) was dismissed on jurisdictional grounds but the allegations remain unresolved.", source: "International Labour Rights Forum", url: "https://laborrights.org" },
        { text: "Coca-Cola's supply chain includes sugar sourced from suppliers in Brazil, the Philippines, and El Salvador where child labour and poor conditions have been reported by Oxfam.", source: "Oxfam 2023", url: "https://oxfam.org" }
      ]},
      { label: "Tax", badgeClass: "badge-tax", findings: [
        { text: "The IRS issued a $3.3 billion tax bill to Coca-Cola in 2020 related to profit shifting to lower-tax jurisdictions through transfer pricing between its US operations and subsidiaries.", source: "US Tax Court 2020", url: "https://ustaxcourt.gov" }
      ]},
      { label: "Political & lobbying", badgeClass: "badge-political", findings: [
        { text: "Coca-Cola spent $5.9 million lobbying US Congress in 2023, targeting sugar taxes, plastic regulations, and labelling requirements.", source: "OpenSecrets 2023", url: "https://opensecrets.org" },
        { text: "The company funded research through the Global Energy Balance Network that downplayed sugar's role in obesity — a tactic academics compared to those used by the tobacco industry.", source: "JAMA Internal Medicine 2015 / BMJ 2019", url: "https://jamanetwork.com" }
      ]},
      { label: "Supply chain", badgeClass: "badge-supply", findings: [
        { text: "Coca-Cola's sugar supply chains in multiple countries have been linked to land grabbing, deforestation, and displacement of indigenous communities according to a 2022 investigation by Repórter Brasil.", source: "Repórter Brasil 2022", url: "https://reporterbrasil.org.br" }
      ]}
    ],
    alternatives: ["Local sparkling water with natural cordial", "Cawston Press (independent, UK)", "Bundaberg (Australian, smaller scale)"]
  },

  "penneys": {
    type: "company", tags: ["ireland"],
    name: "Penneys (Primark)",
    subtitle: "Fast fashion retail — Ireland & international",
    corporate: {
      parent: { name: "Associated British Foods plc (ABF)", note: "London Stock Exchange: ABF. Revenue ~£20bn. Also owns Kingsmill bread, Twinings tea, Silver Spoon sugar.", compliance: "mixed", link: "associated british foods" },
      subsidiaries: [
        { name: "Primark UK", note: "Same parent — identical supply chain concerns", compliance: "concern" },
        { name: "Primark US", note: "Expanding US presence from 2015", compliance: "concern" }
      ],
      shareholders: [
        { name: "Wittington Investments (Garfield Weston Foundation)", note: "~54% controlling stake — private family trust", compliance: "unclear" },
        { name: "BlackRock", note: "~5% institutional stake", compliance: "mixed" },
        { name: "Vanguard Group", note: "~3% institutional stake", compliance: "unclear" }
      ]
    },
    products: [
      { name: "Clothing (general range)", flags: ["Fast fashion model", "Supply chain opacity", "Polyester fibres"] },
      { name: "Primark Cares range", flags: ["Greenwashing found by UK CMA"] },
      { name: "Homeware", flags: ["Plastic content", "Supply chain opacity"] },
      { name: "Cosmetics", flags: ["Some palm oil derivatives", "Packaging waste"] }
    ],
    categories: [
      { label: "Labour & human rights", badgeClass: "badge-labour", findings: [
        { text: "Primark clothing was found in the rubble of the Rana Plaza factory collapse in Bangladesh in 2013, which killed 1,134 workers. Primark paid compensation to victims but was criticised for the pace and scale of payments.", source: "Clean Clothes Campaign 2013", url: "https://cleanclothes.org" },
        { text: "A 2021 investigation by Channel 4 Dispatches found workers in Leicester factories supplying Primark earning below minimum wage under exploitative conditions.", source: "Channel 4 Dispatches 2021", url: "https://channel4.com" },
        { text: "Primark has not published a full public list of its supplier factories, making independent verification of labour conditions impossible across its supply chain.", source: "Fashion Transparency Index 2023", url: "https://fashionrevolution.org" }
      ]},
      { label: "Environment", badgeClass: "badge-env", findings: [
        { text: "Primark's fast fashion model — selling clothing at very low prices with rapid turnover — contributes to throwaway clothing culture. The Ellen MacArthur Foundation estimates 73% of clothing ends up in landfill globally.", source: "Ellen MacArthur Foundation 2023", url: "https://ellenmacarthurfoundation.org" },
        { text: "Primark's 'Primark Cares' sustainability label was found by the UK Competition and Markets Authority in 2023 to include vague and potentially misleading environmental claims.", source: "UK CMA 2023", url: "https://gov.uk/cma" }
      ]},
      { label: "Tax", badgeClass: "badge-tax", findings: [
        { text: "Primark's Irish operations file with the CRO. Parent company ABF has used complex holding structures across European jurisdictions, though no specific Irish enforcement action has been taken.", source: "Companies Registration Office Ireland", url: "https://cro.ie" }
      ]},
      { label: "Animal welfare", badgeClass: "badge-animal", findings: [
        { text: "Primark sells wool, down, and leather products. Its animal welfare policy does not meet Four Paws or Responsible Down Standard certification levels across all product lines.", source: "Good On You / Four Paws 2023", url: "https://goodonyou.eco" }
      ]}
    ],
    alternatives: ["Charity shops / thrift stores across Ireland", "Depop, Vinted for secondhand clothing", "People Tree, Thought Clothing for ethical alternatives", "Buy less, buy better — extend garment lifespan"]
  },

  "ryanair": {
    type: "company", tags: ["ireland"],
    name: "Ryanair",
    subtitle: "Airline — Dublin, Ireland (Euronext: RYA)",
    corporate: {
      parent: { name: "Ryanair Holdings plc", note: "Parent holding company, listed Dublin & London", compliance: "concern", link: null },
      subsidiaries: [
        { name: "Ryanair DAC", note: "Main operating airline, Irish registered", compliance: "concern" },
        { name: "Buzz (Poland)", note: "Low-cost Polish subsidiary", compliance: "concern" },
        { name: "Lauda Europe", note: "Austrian subsidiary, acquired 2018", compliance: "concern" },
        { name: "Malta Air", note: "Maltese subsidiary, rebranded 2023", compliance: "concern" }
      ],
      shareholders: [
        { name: "Michael O'Leary (CEO)", note: "~4% personal stake", compliance: "concern" },
        { name: "Baillie Gifford", note: "~7% institutional stake", compliance: "unclear" },
        { name: "Vanguard Group", note: "~5% stake", compliance: "unclear" }
      ]
    },
    products: [
      { name: "Ryanair flights", flags: ["Highest CO₂ among EU airlines", "Ancillary fee complexity", "Cancellation disputes"] },
      { name: "Ryanair.com ancillaries", flags: ["Seat allocation manipulation", "Bag fee complexity"] }
    ],
    categories: [
      { label: "Environment", badgeClass: "badge-env", findings: [
        { text: "Ryanair was named Europe's top CO₂-emitting airline for five consecutive years (2018–2023) by EU ETS data, emitting approximately 15 million tonnes of CO₂ annually.", source: "EU Emissions Trading System 2023", url: "https://ec.europa.eu" },
        { text: "Transport & Environment placed Ryanair among the worst-performing airlines per passenger kilometre, despite its claims that high seat density makes it relatively green.", source: "Transport & Environment 2023", url: "https://transportenvironment.org" }
      ]},
      { label: "Labour & human rights", badgeClass: "badge-labour", findings: [
        { text: "Irish courts found Ryanair engaged in anti-union practices. The company only recognised trade unions in 2017–2018 after a pilot strike threatened mass cancellations.", source: "Irish Labour Court 2018", url: "https://labourcourt.ie" },
        { text: "Cabin crew across Spain, Portugal, Belgium, and Italy staged multiple strikes over pay and conditions between 2018 and 2023, citing below-average European aviation wages.", source: "European Transport Workers Federation 2023", url: "https://etf-europe.org" },
        { text: "Ryanair's use of self-employment contracts for pilots via agencies to avoid employment rights protections was ruled unlawful in multiple EU jurisdictions.", source: "Irish Times / EU Court findings", url: "https://irishtimes.com" }
      ]},
      { label: "Tax", badgeClass: "badge-tax", findings: [
        { text: "Ryanair's subsidiary structure across Malta, Poland, and Austria has drawn scrutiny for profit allocation between jurisdictions with varying tax rates.", source: "European Commission State Aid Register", url: "https://ec.europa.eu" }
      ]},
      { label: "Political & lobbying", badgeClass: "badge-political", findings: [
        { text: "CEO Michael O'Leary has publicly opposed EU aviation carbon taxes and Sustainable Aviation Fuel mandates, lobbying against both in public forums and in direct contact with EU officials recorded on the EU Transparency Register.", source: "Financial Times / EU Transparency Register 2023", url: "https://ft.com" }
      ]}
    ],
    alternatives: ["Irish Rail for Dublin–Cork, Dublin–Galway", "Bus Éireann Expressway for domestic routes", "Ferry routes for UK travel (Irish Ferries, Stena Line)"]
  },

  "tesco ireland": {
    type: "company", tags: ["ireland"],
    name: "Tesco Ireland",
    subtitle: "Retail supermarket — Republic of Ireland",
    corporate: {
      parent: { name: "Tesco PLC", note: "FTSE 100, London. Revenue ~£65bn globally.", compliance: "mixed", link: "tesco plc" },
      subsidiaries: [
        { name: "Tesco Mobile Ireland", note: "MVNO, joint venture with Three Ireland", compliance: "unclear" },
        { name: "Tesco Bank", note: "UK-based financial services arm", compliance: "mixed" }
      ],
      shareholders: [
        { name: "Schroders plc", note: "~6% stake in Tesco PLC", compliance: "unclear" },
        { name: "BlackRock", note: "~5% stake", compliance: "mixed" },
        { name: "Vanguard Group", note: "~5% stake", compliance: "unclear" }
      ]
    },
    products: [
      { name: "Tesco Finest range", flags: ["Premium tier — supply chain partially verified"] },
      { name: "Tesco own-brand basics", flags: ["Lowest-cost supply chains", "Labour risk higher"] },
      { name: "Tesco Organic", flags: ["Soil Association certified in many lines"] }
    ],
    categories: [
      { label: "Environment", badgeClass: "badge-env", findings: [
        { text: "A 2023 Tesco PLC sustainability audit showed Tesco Ireland stores redistributing significantly less surplus food than UK stores of comparable size, with fewer active partnerships with organisations like FoodCloud.", source: "Tesco PLC Sustainability Report 2023", url: "https://tescoplc.com" },
        { text: "Tesco's Irish supply chain includes beef and dairy producers contributing to Ireland's agricultural methane emissions, which represent 37% of national greenhouse gas output.", source: "EPA Ireland 2023", url: "https://epa.ie" }
      ]},
      { label: "Labour & human rights", badgeClass: "badge-labour", findings: [
        { text: "A 2021 Tesco Ireland worker dispute over sick pay and remote worker rights was resolved through WRC adjudication, with Mandate Trade Union representing affected staff.", source: "Workplace Relations Commission 2021", url: "https://wrc.ie" },
        { text: "Tesco's global supply chains including fruit and vegetable suppliers in Kenya and South Africa have been flagged for low wages in Oxfam's Behind the Barcodes campaign.", source: "Oxfam 2023", url: "https://oxfam.org" }
      ]},
      { label: "Tax", badgeClass: "badge-tax", findings: [
        { text: "Tesco Ireland files accounts with the CRO but ultimate profit routing goes through UK parent structures, reducing Irish taxable exposure relative to turnover.", source: "Companies Registration Office Ireland", url: "https://cro.ie" }
      ]},
      { label: "Animal welfare", badgeClass: "badge-animal", findings: [
        { text: "As of 2024, Tesco Ireland continues to sell eggs from caged hens across its stores. The European Chicken Commitment — which Tesco signed — required cage-free transition by 2025, but Tesco Ireland has not met this in practice.", source: "Compassion in World Farming 2024", url: "https://ciwf.org" }
      ]}
    ],
    alternatives: ["SuperValu — more Irish supplier sourcing", "Local farmers markets (irishfarmersmarkets.ie)", "Aldi Ireland — comparable pricing", "Community-supported agriculture (CSA) box schemes"]
  },

  "apple": {
    type: "company", tags: [],
    name: "Apple Inc.",
    subtitle: "Technology — United States (EU HQ in Cork, Ireland)",
    corporate: {
      parent: { name: "Apple Inc.", note: "Nasdaq: AAPL. Market cap ~$3 trillion. No parent company.", compliance: "mixed", link: null },
      subsidiaries: [
        { name: "Apple Operations International (Ireland)", note: "Main Irish holding company — used historically for profit routing", compliance: "concern" },
        { name: "Apple Distribution International (Ireland)", note: "Handles European sales distribution from Cork", compliance: "mixed" },
        { name: "Beats Electronics", note: "Acquired 2014 — audio products", compliance: "mixed" },
        { name: "Shazam", note: "Acquired 2018 — music recognition", compliance: "unclear" }
      ],
      shareholders: [
        { name: "Vanguard Group", note: "~8.5% — largest institutional shareholder", compliance: "unclear" },
        { name: "BlackRock", note: "~6.5% stake", compliance: "mixed" },
        { name: "Berkshire Hathaway", note: "~5.9% stake (Warren Buffett)", compliance: "mixed" },
        { name: "Tim Cook (CEO)", note: "~3.3 million shares personal holding", compliance: "unclear" }
      ]
    },
    products: [
      { name: "iPhone", flags: ["Cobalt mining concerns", "Planned obsolescence", "Right to repair blocked"] },
      { name: "MacBook", flags: ["Repairability score: low", "Soldered components"] },
      { name: "AirPods", flags: ["Battery not user-replaceable", "Electronic waste concern"] },
      { name: "Apple Watch", flags: ["Battery lifespan limits", "Cobalt content"] },
      { name: "iCloud", flags: ["Data stored on third-party servers", "Privacy policy complexity"] }
    ],
    categories: [
      { label: "Labour & human rights", badgeClass: "badge-labour", findings: [
        { text: "Foxconn factories in China — Apple's primary manufacturer — have faced sustained reports of excessive working hours, low wages, and worker suicide rates investigated by multiple NGOs.", source: "China Labor Watch 2023", url: "https://chinalaborwatch.org" },
        { text: "Cobalt used in Apple batteries is sourced from the Democratic Republic of Congo, where artisanal mining has been linked to child labour according to Amnesty International.", source: "Amnesty International 2023", url: "https://amnesty.org" }
      ]},
      { label: "Tax", badgeClass: "badge-tax", findings: [
        { text: "The EU Court of Justice ruled in September 2024 that Apple must repay €13 billion in back taxes to Ireland following a decade-long legal battle over illegal state aid.", source: "EU Court of Justice 2024", url: "https://curia.europa.eu" },
        { text: "Apple Operations International was used for years to route global profits at effective tax rates far below the Irish headline rate, documented by the US Senate Permanent Subcommittee on Investigations.", source: "US Senate Subcommittee on Investigations", url: "https://hsgac.senate.gov" }
      ]},
      { label: "Environment", badgeClass: "badge-env", findings: [
        { text: "Repair advocacy groups including iFixit and Right to Repair Europe have consistently rated Apple products low on repairability, contributing to electronic waste when devices are replaced rather than repaired.", source: "iFixit Repairability Score 2023", url: "https://ifixit.com" }
      ]},
      { label: "Political & lobbying", badgeClass: "badge-political", findings: [
        { text: "Apple spent $9.4 million on US federal lobbying in 2023, targeting legislation on app store regulation, digital markets, privacy law, and AI governance.", source: "OpenSecrets 2023", url: "https://opensecrets.org" }
      ]},
      { label: "Data & privacy", badgeClass: "badge-data", findings: [
        { text: "Apple received a €25 million fine from France's data authority CNIL in 2023 for placing advertising trackers on iPhones without adequate user consent.", source: "CNIL France 2023", url: "https://cnil.fr" }
      ]}
    ],
    alternatives: ["Fairphone (ethical Android alternative)", "Refurbished iPhones via Back Market or Swappie", "Extend device lifespan — repair rather than replace"]
  },

  "irish government": {
    type: "government", tags: ["ireland"],
    name: "Irish Government",
    subtitle: "National government — Republic of Ireland",
    corporate: {
      parent: null,
      subsidiaries: [
        { name: "NAMA (National Asset Management Agency)", note: "State agency — Project Eagle sale controversy, PAC investigation", compliance: "concern" },
        { name: "An Bord Pleanála", note: "Planning authority — senior official conflicts of interest found 2022", compliance: "concern" },
        { name: "HSE (Health Service Executive)", note: "National health system — CervicalCheck scandal, procurement controversies", compliance: "concern" },
        { name: "An Garda Síochána", note: "National police — Morris Tribunal, whistleblower retaliation findings", compliance: "concern" },
        { name: "RTÉ", note: "National broadcaster — secret payments scandal 2023, financial mismanagement", compliance: "concern" },
        { name: "IDA Ireland", note: "Inward investment agency — approved data centre expansion during grid crisis", compliance: "mixed" }
      ],
      shareholders: []
    },
    products: [],
    categories: [
      { label: "Corruption & planning", badgeClass: "badge-political", findings: [
        { text: "The Mahon Tribunal (1997–2012) found that corruption in Irish political and planning life had been 'both endemic and systemic'. It made findings of corruption against multiple politicians and officials involved in Dublin land rezoning, including a finding that former minister Ray Burke received corrupt payments from developers.", source: "Mahon Tribunal Final Report 2012", url: "https://mahontribunal.ie" },
        { text: "Lobbyist Frank Dunlop was sentenced to two years in prison in 2009 after admitting to paying bribes to Dublin County Councillors in exchange for votes on planning rezoning decisions in the 1990s.", source: "Irish Times / Mahon Tribunal 2009", url: "https://irishtimes.com" },
        { text: "The Mahon Tribunal found that former Taoiseach Bertie Ahern failed to truthfully account for over IR£165,000 passing through accounts connected to him, and rejected his evidence about the sources of those funds. Fianna Fáil subsequently moved to expel him over conduct described as 'unbecoming'.", source: "Mahon Tribunal Final Report 2012", url: "https://bbc.com" },
        { text: "An Bord Pleanála deputy chair Paul Hyde resigned in 2022 following an RTÉ Investigates report that found he had undisclosed connections to planning projects he was involved in deciding. An internal inquiry confirmed conflicts of interest.", source: "RTÉ Investigates / Dept of Housing 2022", url: "https://rte.ie" },
        { text: "Charles Haughey, Taoiseach three times between 1979 and 1992, was found by the Moriarty Tribunal to have received over IR£9 million in payments from businessmen during his time in office. No criminal convictions resulted.", source: "Moriarty Tribunal Final Report 2011", url: "https://moriarty-tribunal.ie" }
      ]},
      { label: "Lobbying & corporate influence", badgeClass: "badge-supply", findings: [
        { text: "The source of less than 9% of donations to Irish political parties between 2019 and 2022 was disclosed to the public, according to Transparency International Ireland's 2024 report.", source: "Transparency International Ireland 2024", url: "https://transparency.ie" },
        { text: "The Moriarty Tribunal found that businessman Denis O'Brien received the second mobile phone licence in Ireland in 1995 through a process the Tribunal described as 'affected by plain corruption', with payments made to then-communications minister Michael Lowry. O'Brien denied wrongdoing. Lowry has never been charged.", source: "Moriarty Tribunal Final Report 2011", url: "https://moriarty-tribunal.ie" },
        { text: "Transparency International Ireland's 2024 report found that Ireland's ethics legislation remained 'hopelessly outdated', with SIPO lacking the powers and resources to effectively audit and investigate political party finances.", source: "Transparency International Ireland 2024", url: "https://transparency.ie" }
      ]},
      { label: "Garda & justice", badgeClass: "badge-housing", findings: [
        { text: "The Morris Tribunal (2002–2008) found widespread corruption and misconduct in An Garda Síochána in Donegal, including fabrication of explosives evidence against innocent people, the planting of hoax devices, and systematic obstruction of complaints. Several officers named received no criminal prosecution.", source: "Morris Tribunal Final Report 2008", url: "https://morristribunal.ie" },
        { text: "Two Garda whistleblowers — Sergeant Maurice McCabe and Garda John Wilson — who made protected disclosures about Garda malpractice were subjected to smear campaigns by senior Garda management. The Charleton Tribunal found the smearing of McCabe was orchestrated at senior levels, including through false allegations to child protection services.", source: "Charleton Tribunal 2018", url: "https://rte.ie" },
        { text: "The penalty points scandal involved Garda members cancelling penalty points for favoured individuals. Whistleblower Sergeant Maurice McCabe raised this. A subsequent audit confirmed irregularities in thousands of cases.", source: "Garda Ombudsman GSOC / RTÉ 2012", url: "https://gsoc.ie" }
      ]},
      { label: "Political finance & revolving door", badgeClass: "badge-tax", findings: [
        { text: "Multiple former senior Irish politicians and officials have moved into roles in industries they previously regulated — including banking, property, and telecoms. Ireland's cooling-off period rules for such moves were not legally enforceable until 2024.", source: "Transparency International Ireland / Open Government Partnership", url: "https://transparency.ie" },
        { text: "The Golfgate scandal (August 2020): 81 people attended a golf society dinner in Clifden during Level 3 COVID restrictions limiting indoor gatherings to 50 people. Attendees included a European Commissioner, a minister, a senator, and a Supreme Court judge. Two ministers and one EU Commissioner resigned.", source: "RTÉ News / The Journal 2020", url: "https://thejournal.ie" },
        { text: "Former Taoiseach Enda Kenny accepted a €15,000 speaking fee from a private healthcare company in 2019 — an industry that benefited from government policy during his time in office. Disclosed under lobbying rules.", source: "The Ditch / Sunday Times Ireland 2021", url: "https://theditch.ie" }
      ]},
      { label: "State agency scandals", badgeClass: "badge-supply", findings: [
        { text: "The CervicalCheck scandal (2018): over 200 women were not informed of errors in their cervical smear tests, some of whom died of cervical cancer in the interim. The State initially contested Vicky Phelan's legal case before settling. Phelan died in 2022.", source: "Scally Report 2018 / RTÉ", url: "https://rte.ie" },
        { text: "RTÉ's secret payments scandal (2023): Ireland's national broadcaster concealed payments totalling over €345,000 to presenter Ryan Tubridy through undisclosed arrangements over several years. The RTÉ board and director general resigned. The PAC found widespread financial mismanagement and a culture of concealment.", source: "PAC Report / RTÉ 2023", url: "https://oireachtas.ie" },
        { text: "The NAMA Project Eagle sale (2014): NAMA sold a portfolio of Northern Irish loans to US fund Cerberus for £1.24 billion. A Stormont Inquiry found that a £7 million fee was paid to a company connected to individuals with political links.", source: "Stormont Assembly Inquiry / Oireachtas PAC", url: "https://oireachtas.ie" }
      ]},
      { label: "Environment", badgeClass: "badge-env", findings: [
        { text: "Ireland missed its 2020 EU emissions reduction targets and was subject to EU infringement proceedings. Data centre energy consumption accounted for approximately 21% of Irish electricity use by 2023 — growing rapidly under planning approvals granted by successive governments.", source: "EPA Ireland / SEAI 2023", url: "https://epa.ie" },
        { text: "EirGrid issued repeated public warnings from 2021 to 2023 that the national grid faced capacity shortfalls, yet planning permissions for large-scale data centres continued to be granted during the same period.", source: "EirGrid Grid Capacity Statement 2023", url: "https://eirgrid.ie" }
      ]},
      { label: "Housing & human rights", badgeClass: "badge-housing", findings: [
        { text: "Homelessness reached record levels in 2024, with over 14,000 people in emergency accommodation — a figure that grew consistently throughout a decade of government housing policy prioritising market-led development.", source: "Focus Ireland / Dept of Housing 2024", url: "https://focusireland.ie" },
        { text: "The Commission of Investigation into Mother and Baby Homes (2021) found that approximately 9,000 children died in these institutions between 1922 and 1998 — a mortality rate significantly higher than in the general population. The State ran and funded many of these institutions. The subsequent redress scheme excluded thousands of survivors under narrow eligibility criteria.", source: "Commission of Investigation Report 2021", url: "https://gov.ie" },
        { text: "The Direct Provision system housed asylum seekers in institutional shared accommodation for years at a time. UNHCR and multiple Irish human rights bodies documented inadequate living conditions, mental health impacts, and violations of the right to a private and family life.", source: "Irish Refugee Council / UNHCR Ireland", url: "https://irishrefugeecouncil.ie" }
      ]},
      { label: "Tax & corporate policy", badgeClass: "badge-tax", findings: [
        { text: "Ireland facilitated the 'Double Irish' tax structure — used by Apple, Google, and others — for decades. The structure allowed multinationals to route global profits through Irish-registered companies at near-zero effective tax rates. The EU Commission ruled in 2016 that Apple's arrangements constituted illegal state aid.", source: "European Commission 2016 / EU Court of Justice 2024", url: "https://curia.europa.eu" },
        { text: "The NAMA Project Eagle sale was subject to a Stormont Inquiry and Oireachtas PAC investigation into alleged conflicts of interest and whether the Irish state received fair value for the asset portfolio.", source: "PAC Report / Stormont Inquiry", url: "https://oireachtas.ie" }
      ]}
    ],
    alternatives: []
  },

  "meta": {
    type: "company", tags: [],
    name: "Meta Platforms",
    subtitle: "Technology — United States (EU HQ in Dublin)",
    corporate: {
      parent: { name: "Meta Platforms Inc.", note: "Nasdaq: META. Mark Zuckerberg controls ~61% of voting shares.", compliance: "concern", link: null },
      subsidiaries: [
        { name: "Facebook", note: "Core social network — privacy and misinformation concerns", compliance: "concern" },
        { name: "Instagram", note: "Image platform — teen mental health concerns documented internally", compliance: "concern" },
        { name: "WhatsApp", note: "End-to-end encrypted but metadata collected", compliance: "mixed" },
        { name: "Threads", note: "Twitter/X competitor, launched 2023", compliance: "concern" },
        { name: "Oculus / Meta Quest", note: "VR hardware division", compliance: "mixed" }
      ],
      shareholders: [
        { name: "Mark Zuckerberg", note: "~13% economic stake, ~61% voting control via Class B shares", compliance: "concern" },
        { name: "Vanguard Group", note: "~7% stake", compliance: "unclear" },
        { name: "BlackRock", note: "~6% stake", compliance: "mixed" }
      ]
    },
    products: [
      { name: "Facebook", flags: ["Behavioural data harvesting", "Political ad microtargeting", "Misinformation spread documented"] },
      { name: "Instagram", flags: ["Teen mental health concerns", "Algorithm-driven body image issues"] },
      { name: "WhatsApp", flags: ["Metadata collection", "Owned by company with poor privacy record"] },
      { name: "Meta Quest (VR)", flags: ["Biometric data collection", "Account linkage required"] }
    ],
    categories: [
      { label: "Data & privacy", badgeClass: "badge-data", findings: [
        { text: "The Irish Data Protection Commission fined Meta €1.2 billion in 2023 — the largest GDPR fine in history — for transferring EU user data to the US without adequate legal protections.", source: "Data Protection Commission Ireland 2023", url: "https://dataprotection.ie" },
        { text: "Meta's advertising business is built on detailed behavioural profiling of users. The company collected data on non-users through tracking pixels on third-party websites — ruled illegal by Belgian courts.", source: "Belgian Data Protection Authority 2022", url: "https://dataprotectionauthority.be" }
      ]},
      { label: "Labour & human rights", badgeClass: "badge-labour", findings: [
        { text: "Content moderators employed through Accenture in Dublin reported severe psychological trauma from exposure to violent and abusive content, with inadequate mental health support, in a 2021 Guardian investigation.", source: "The Guardian 2021", url: "https://theguardian.com" },
        { text: "Frances Haugen's 2021 whistleblower disclosure revealed Meta's internal research showed Instagram worsens body image issues in teenage girls — findings the company did not act on.", source: "US Senate Commerce Committee 2021", url: "https://commerce.senate.gov" }
      ]},
      { label: "Political & lobbying", badgeClass: "badge-political", findings: [
        { text: "Meta spent over $20 million on US federal lobbying in 2023, targeting AI regulation, Section 230 reform, and data privacy legislation.", source: "OpenSecrets 2023", url: "https://opensecrets.org" }
      ]}
    ],
    alternatives: ["Signal for private messaging", "Mastodon or Bluesky for social networking", "BeReal for photo sharing", "ProtonMail for private email"]
  },

  "nestle": {
    type: "company", tags: [],
    name: "Nestlé",
    subtitle: "Food & beverage — Switzerland (SWX: NESN)",
    corporate: {
      parent: { name: "Nestlé S.A.", note: "Largest food company in the world by revenue (~CHF 95bn). HQ Vevey, Switzerland.", compliance: "concern", link: null },
      subsidiaries: [
        { name: "KitKat", note: "Chocolate — cocoa supply chain concerns", compliance: "concern" },
        { name: "Nescafé", note: "Coffee — smallholder sourcing issues", compliance: "mixed" },
        { name: "San Pellegrino", note: "Sparkling water — plastic packaging", compliance: "mixed" },
        { name: "Perrier", note: "Water — extraction concerns in water-stressed areas", compliance: "concern" },
        { name: "Purina", note: "Pet food — meat sourcing and supply chain", compliance: "mixed" },
        { name: "Maggi", note: "Seasoning — historically associated with nutritional controversies", compliance: "mixed" },
        { name: "Milo", note: "Chocolate malt drink — aggressive marketing in developing markets", compliance: "concern" }
      ],
      shareholders: [
        { name: "BlackRock", note: "~3% stake", compliance: "mixed" },
        { name: "Norges Bank (Norway sovereign fund)", note: "~2.8% stake", compliance: "mixed" }
      ]
    },
    products: [
      { name: "KitKat", flags: ["Palm oil in supply chain", "Cocoa child labour risk"] },
      { name: "Nescafé", flags: ["Smallholder wage concerns", "Single-use packaging"] },
      { name: "San Pellegrino", flags: ["Plastic bottle use", "Water extraction concerns"] },
      { name: "Purina pet food", flags: ["Meat sourcing opacity", "Packaging waste"] },
      { name: "Nesquik", flags: ["High sugar", "Child-targeted marketing"] }
    ],
    categories: [
      { label: "Labour & human rights", badgeClass: "badge-labour", findings: [
        { text: "Nestlé has acknowledged in legal filings that it cannot guarantee its cocoa supply chain — including KitKat — is free from child labour in West Africa, particularly Ivory Coast and Ghana.", source: "Nestlé Legal Filing / Washington Post 2019", url: "https://washingtonpost.com" },
        { text: "Nestlé was the subject of a decades-long international boycott over the aggressive marketing of infant formula in developing countries, where it was used in unsafe conditions with contaminated water. The boycott, started in 1977, continues as of 2024.", source: "IBFAN / Baby Milk Action — ongoing", url: "https://babymilkaction.org" }
      ]},
      { label: "Environment", badgeClass: "badge-env", findings: [
        { text: "Nestlé was ranked among the top plastic polluters globally by Break Free From Plastic's 2023 audit, with single-use plastic found across 37 countries.", source: "Break Free From Plastic 2023", url: "https://breakfreefromplastic.org" },
        { text: "Nestlé's bottled water brands (Perrier, San Pellegrino) have been linked to water extraction from drought-affected regions in France and California, raising water rights concerns.", source: "Le Monde / ProPublica 2021", url: "https://lemonde.fr" }
      ]},
      { label: "Political & lobbying", badgeClass: "badge-political", findings: [
        { text: "Nestlé has lobbied against strong regulations on infant formula marketing and sugar content labelling in multiple jurisdictions, documented by the Corporate Europe Observatory.", source: "Corporate Europe Observatory 2022", url: "https://corporateeurope.org" }
      ]}
    ],
    alternatives: ["Tony's Chocolonely (slave-labour-free chocolate)", "Tap water or local spring water over bottled", "Independent pet food brands", "Fairtrade certified coffee brands"]
  }

};
