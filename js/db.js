/**
 * EthosCheck entry database
 * db.js — all entries as structured data
 *
 * RULES:
 * 1. Past and current conduct only — no future pledges, targets, or PR
 * 2. Every finding must have a court judgement, regulatory fine, tribunal
 *    finding, Oireachtas record, named whistleblower disclosure, or credible
 *    investigative journalism behind it
 * 3. No anonymous claims, no social media, no company self-reporting
 */

const DB = {
"ryanair": {
  type: "company", tags: ["ireland"],
  name: "Ryanair",
  subtitle: "Airline — Dublin, Ireland (Euronext: RYA)",

  corporate: {
    parent: { name: "Ryanair Holdings plc", note: "Parent holding company, listed Euronext Dublin & London. Michael O'Leary holds ~4% personal stake.", compliance: "concern", link: null },
    subsidiaries: [
      { name: "Ryanair DAC", note: "Main operating airline, Irish registered", compliance: "concern" },
      { name: "Buzz (Poland)", note: "Polish low-cost subsidiary", compliance: "concern" },
      { name: "Lauda Europe", note: "Austrian subsidiary, acquired 2018", compliance: "concern" },
      { name: "Malta Air", note: "Maltese subsidiary used for crew contracts to reduce tax and employment obligations", compliance: "concern" }
    ],
    shareholders: [
      { name: "Michael O'Leary (CEO)", note: "~4% personal stake", compliance: "concern" },
      { name: "Baillie Gifford", note: "~7% institutional stake", compliance: "unclear" },
      { name: "Vanguard Group", note: "~5% stake — also holds stakes in Amazon, Meta, Apple, Nestlé", compliance: "unclear" },
      { name: "BlackRock", note: "~4% stake — holds stakes across most major multinationals", compliance: "mixed" }
    ]
  },

  products: [
    { name: "Ryanair flights", flags: ["Highest CO₂ among EU airlines 5 years running", "Fined for illegal baggage/seat charges"] },
    { name: "Ryanair.com booking system", flags: ["Fined for blocking travel agencies", "Ruled illegal in Germany 2026"] }
  ],

  categories: [
    { label: "Legal violations & fines", badgeClass: "badge-political", findings: [
      { text: "Italy's competition authority fined Ryanair €256 million in December 2025 for abusing its dominant market position by systematically blocking travel agencies from selling its flights between April 2023 and April 2025.", source: "AGCM Italy / Bloomberg December 2025", url: "https://www.bloomberg.com/news/articles/2025-12-23/ryanair-hit-by-255-million-fine-in-italy-for-thwarting-agencies" },
      { text: "Spain's consumer rights ministry fined Ryanair €108 million in November 2024 for abusive baggage and seating charges, finding Ryanair's practices violated consumer protection law.", source: "Spain Consumer Ministry / Fortune November 2024", url: "https://www.fortune.com/europe/2024/11/22/michael-oleary-spain-ryanair-108-million-fine-baggage-seating-charges" },
      { text: "A German court fined Ryanair in January 2026 for bad faith defiance of a binding legal injunction, finding it had the resources to comply immediately but chose not to.", source: "BusinessWire January 2026", url: "https://www.businesswire.com/news/home/20260108487357/en" },
      { text: "A French court fined Ryanair over €9 million in 2013 for breaching French labour laws by employing French-based cabin crew under Irish contracts to avoid local taxes and employment protections.", source: "The Guardian 2013", url: "https://www.theguardian.com" },
      { text: "The Irish Labour Court found in 2018 that Ryanair had engaged in anti-union practices, having refused to recognise trade unions for decades.", source: "Irish Labour Court 2018", url: "https://www.labourcourt.ie" }
    ]},
    { label: "Labour & human rights", badgeClass: "badge-labour", findings: [
      { text: "Ryanair structured pilot and cabin crew contracts through Malta Air specifically to reduce employment rights obligations. Multiple EU courts ruled these arrangements unlawful.", source: "European Transport Workers Federation / Irish Times", url: "https://www.etf-europe.org" },
      { text: "Cabin crew across Spain, Portugal, Belgium, Italy, and France staged coordinated strikes between 2018 and 2023 over pay and conditions, with unions citing wages below European aviation sector averages.", source: "European Transport Workers Federation 2023", url: "https://www.etf-europe.org" }
    ]},
    { label: "Environment", badgeClass: "badge-env", findings: [
      { text: "EU Emissions Trading System data showed Ryanair was Europe's single largest corporate CO₂ emitter among airlines for five consecutive years from 2019 to 2023, emitting approximately 15 million tonnes of CO₂ annually.", source: "EU Emissions Trading System 2019–2023", url: "https://ec.europa.eu" }
    ]},
    { label: "Lobbying", badgeClass: "badge-supply", findings: [
      { text: "Ryanair CEO Michael O'Leary held a private dinner with then-Finance Minister Paschal Donohoe in February 2022. The meeting was not included in Donohoe's ministerial diary and no lobbying return was filed. The Irish Times revealed the meeting in November 2024.", source: "Irish Times November 2024", url: "https://www.irishtimes.com/politics/2024/11/23/taoiseach-says-dinner-meeting-between-donohoe-and-ryanair-boss-was-not-lobbying" },
      { text: "In December 2018, Ryanair CEO Michael O'Leary wrote directly to EU Employment Commissioner Marianne Thyssen asking her to use her influential voice to lobby the Irish government on Ryanair's behalf in a tax and employment law dispute.", source: "Fora / The Journal April 2019", url: "https://www.thejournal.ie" }
    ]},
    { label: "Tax arrangements", badgeClass: "badge-tax", findings: [
      { text: "Ryanair historically routed crew employment through Malta Air and other low-tax subsidiaries specifically to reduce payroll tax obligations across EU jurisdictions. Multiple courts found these arrangements were used to deny workers the employment rights and tax contributions owed in the countries where they were actually based.", source: "EU Court of Justice / Irish Times", url: "https://www.irishtimes.com" }
    ]}
  ],

  alternatives: [
    "Irish Rail — Dublin to Cork, Galway, Limerick, Waterford",
    "Bus Éireann Expressway — nationwide routes",
    "Irish Ferries / Stena Line — Dublin to Holyhead for UK travel"
  ]
},

"google": {
  type: "company", tags: ["ireland"],
  name: "Google (Alphabet Inc.)",
  subtitle: "Technology — United States (European HQ in Dublin, Ireland)",
  corporate: {
    parent: { name: "Alphabet Inc.", note: "Nasdaq: GOOGL. Market cap ~$2 trillion. Parent of Google, YouTube, DeepMind, Waymo.", compliance: "concern", link: null },
    subsidiaries: [
      { name: "Google Ireland Limited", note: "Main European operating subsidiary, Dublin. 4,000+ employees. Recorded €45.7bn in revenues in 2019.", compliance: "concern" },
      { name: "Google Ireland Holdings Unlimited", note: "Holding company used for Double Irish profit shifting — shifted $75.4bn to Bermuda in 2019 alone.", compliance: "concern" },
      { name: "YouTube", note: "Owned by Alphabet — content moderation and misinformation concerns", compliance: "concern" },
      { name: "DeepMind", note: "AI research division — acquired 2014", compliance: "mixed" },
      { name: "Waymo", note: "Self-driving vehicle division", compliance: "unclear" }
    ],
    shareholders: [
      { name: "Larry Page (co-founder)", note: "~6% economic stake, ~26% voting control via Class B shares", compliance: "concern" },
      { name: "Sergey Brin (co-founder)", note: "~6% economic stake, ~25% voting control via Class B shares", compliance: "concern" },
      { name: "Sundar Pichai (CEO)", note: "~0.1% stake", compliance: "unclear" },
      { name: "Vanguard Group", note: "~7% institutional stake — also holds stakes in Meta, Apple, Amazon, Nestlé", compliance: "unclear" },
      { name: "BlackRock", note: "~6% institutional stake — world's largest asset manager", compliance: "mixed" }
    ]
  },
  products: [
    { name: "Google Search", flags: ["Antitrust violation — €2.4bn EU fine upheld 2024", "Ad market dominance under investigation"] },
    { name: "Google Ads / AdSense", flags: ["Ad tech market dominance — EU investigation ongoing", "€1.49bn fine partially overturned"] },
    { name: "Android", flags: ["€4.34bn EU antitrust fine 2018 for illegal tying practices"] },
    { name: "YouTube", flags: ["Misinformation concerns", "Child privacy violations — $170m FTC fine 2019"] },
    { name: "Google Chrome", flags: ["Data collection via browser", "Third-party cookie tracking"] },
    { name: "Gmail / Google Workspace", flags: ["Email content scanning", "Data stored on US servers subject to US surveillance law"] }
  ],
  categories: [
    {
      label: "Legal violations & fines",
      badgeClass: "badge-political",
      findings: [
        {
          text: "The EU Court of Justice upheld a €2.4 billion antitrust fine against Google in September 2024, confirming that Google had abused its dominant search market position by favouring its own Google Shopping service over competitors. Google had appealed the original 2017 European Commission decision for seven years before the CJEU dismissed the appeal.",
          source: "EU Court of Justice / PBS News September 2024",
          url: "https://www.pbs.org/newshour/world/google-and-apple-lose-legal-battles-in-europe-and-now-owe-billions-in-fines-and-back-taxes"
        },
        {
          text: "The European Commission fined Google €4.34 billion in 2018 for illegally requiring Android device manufacturers to pre-install Google Search and Google Chrome as a condition of accessing the Google Play app store. The fine was later reduced on appeal to €4.125 billion but the underlying violation was upheld.",
          source: "European Commission 2018 / EU General Court 2022",
          url: "https://ec.europa.eu"
        },
        {
          text: "The Irish Data Protection Commission launched a statutory cross-border investigation into Google Ireland Limited in September 2024 under Section 110 of the Data Protection Act 2018, examining Google's AI model training practices and data handling.",
          source: "Data Protection Commission Ireland September 2024",
          url: "https://digitalpolicyalert.org/change/10913"
        },
        {
          text: "YouTube was fined $170 million by the US Federal Trade Commission in 2019 for violating the Children's Online Privacy Protection Act (COPPA) by collecting personal data from children under 13 without parental consent. It was the largest COPPA fine ever imposed at the time.",
          source: "US Federal Trade Commission 2019",
          url: "https://ftc.gov"
        }
      ]
    },
    {
      label: "Tax arrangements",
      badgeClass: "badge-tax",
      findings: [
        {
          text: "In 2019 — its last year using the structure — Google shifted $75.4 billion in profits out of Ireland using the 'Double Irish' tax arrangement. Google Ireland Holdings Unlimited Company was incorporated in Ireland but tax-domiciled in Bermuda, where the tax rate is 0%. This allowed Google to pay no corporation tax on these profits in either Ireland or the United States.",
          source: "Irish Times / Silicon Republic April 2021",
          url: "https://www.irishtimes.com/business/technology/google-used-double-irish-to-shift-75-4bn-in-profits-out-of-ireland-1.4540519"
        },
        {
          text: "Google Ireland recorded €45.7 billion in revenues in 2019 — more than Ireland's entire annual government tax revenue — yet paid a fraction of this in Irish corporation tax due to its profit-shifting structure. In 2017 it recorded €32.2 billion in revenue and paid just €167 million in Irish corporation tax.",
          source: "Irish Times / Companies Registration Office",
          url: "https://www.irishtimes.com/business/economy/explainer-google-and-its-double-irish-tax-scheme-1.4128929"
        },
        {
          text: "Google used the 'Double Irish Dutch Sandwich' structure for over a decade — routing profits through Irish subsidiaries, then a Dutch entity, and finally to a Bermuda holding company where they were untaxed. US multinationals were estimated to hold over $1 trillion in offshore profits via such mechanisms by the end of 2017.",
          source: "Irish Times / IMF research",
          url: "https://www.irishtimes.com/business/economy/explainer-google-and-its-double-irish-tax-scheme-1.4128929"
        }
      ]
    },
    {
      label: "Data & privacy",
      badgeClass: "badge-data",
      findings: [
        {
          text: "The Irish Data Protection Commission is the lead EU supervisory authority for Google under GDPR, as Google's European HQ is in Dublin. Ireland has issued over €3.5 billion in GDPR fines since 2018 — more than four times the next highest EU enforcer — but as of early 2026 over €4 billion in total DPC fines across all companies remain unpaid due to appeals.",
          source: "DLA Piper GDPR Survey / RTÉ January 2026",
          url: "https://www.rte.ie/news/business/2026/0112/1552670-data-protection-commission-fines/"
        },
        {
          text: "France's data authority CNIL fined Google €150 million in January 2022 for making it harder for users to reject cookies than to accept them — a violation of French data protection law. Google was given three months to comply.",
          source: "CNIL France January 2022",
          url: "https://cnil.fr"
        }
      ]
    },
    {
      label: "Lobbying",
      badgeClass: "badge-supply",
      findings: [
        {
          text: "Alphabet spent $13.7 million on US federal lobbying in 2023, targeting AI regulation, antitrust legislation, data privacy law, and copyright reform — among the highest of any technology company.",
          source: "OpenSecrets 2023",
          url: "https://opensecrets.org"
        },
        {
          text: "Google is registered as an active lobbying organisation in the EU Transparency Register, with documented contacts with European Commission officials on AI regulation, the Digital Markets Act, and competition policy. The EU's outgoing competition chief Margrethe Vestager stated she had opened 'four Google cases' during her tenure.",
          source: "EU Transparency Register / Financial Times 2024",
          url: "https://ft.com"
        }
      ]
    },
    {
      label: "Labour & human rights",
      badgeClass: "badge-labour",
      findings: [
        {
          text: "Google fired 28 employees in April 2024 following protests against the company's Project Nimbus — a $1.2 billion cloud computing contract with the Israeli government and military. Workers alleged the firings were retaliation for protected labour activity. The National Labor Relations Board received complaints from affected workers.",
          source: "The Guardian / NLRB April 2024",
          url: "https://theguardian.com"
        },
        {
          text: "Google has used a two-tier workforce structure in which a large number of contract workers — employed through third-party firms — perform similar work to direct employees but receive lower pay, fewer benefits, and no job security. A 2019 New York Times investigation found Google had more contract workers than direct employees globally.",
          source: "New York Times 2019",
          url: "https://nytimes.com"
        }
      ]
    }
  ],
  alternatives: [
    "Search: DuckDuckGo, Brave Search, or Ecosia (plants trees per search)",
    "Email: ProtonMail or Tutanota for private encrypted email",
    "Browser: Firefox or Brave instead of Chrome",
    "Maps: OpenStreetMap or Apple Maps",
    "Cloud storage: Proton Drive or Nextcloud"
  ]
},

"meta": {
  type: "company", tags: [],
  name: "Meta Platforms",
  subtitle: "Technology — United States (EU HQ in Dublin, Ireland)",
  corporate: {
    parent: { name: "Meta Platforms Inc.", note: "Nasdaq: META. Mark Zuckerberg controls ~61% of voting shares via Class B stock.", compliance: "concern", link: null },
    subsidiaries: [
      { name: "Facebook", note: "Core social network — multiple GDPR violations", compliance: "concern" },
      { name: "Instagram", note: "Image platform — teen mental health concerns documented internally", compliance: "concern" },
      { name: "WhatsApp", note: "Messaging — fined €225m by Irish DPC in 2021", compliance: "concern" },
      { name: "Threads", note: "Twitter/X competitor, launched 2023", compliance: "concern" },
      { name: "Oculus / Meta Quest", note: "VR hardware — biometric data collection", compliance: "mixed" }
    ],
    shareholders: [
      { name: "Mark Zuckerberg", note: "~13% economic stake, ~61% voting control via Class B shares", compliance: "concern" },
      { name: "Vanguard Group", note: "~7% stake", compliance: "unclear" },
      { name: "BlackRock", note: "~6% stake", compliance: "mixed" },
      { name: "Fidelity Investments", note: "~3% stake", compliance: "unclear" }
    ]
  },
  products: [
    { name: "Facebook", flags: ["€1.2bn GDPR fine 2023", "€390m GDPR fine 2023", "Behavioural ad targeting ruled illegal"] },
    { name: "Instagram", flags: ["Teen mental health findings suppressed internally", "€180m GDPR fine"] },
    { name: "WhatsApp", flags: ["€225m GDPR fine 2021", "Metadata collection"] },
    { name: "Facebook Marketplace", flags: ["EU antitrust investigation ongoing"] }
  ],
  categories: [
    { label: "Legal violations & fines", badgeClass: "badge-political", findings: [
      { text: "The Irish Data Protection Commission fined Meta €1.2 billion in May 2023 — the largest GDPR fine in history — for unlawfully transferring EU user data to the United States without adequate legal protections. The DPC also ordered Meta to suspend data transfers to the US.", source: "Data Protection Commission Ireland May 2023", url: "https://www.irishlegal.com/articles/facebook-to-be-fined-eur12bn-over-gdpr-breaches" },
      { text: "The Irish DPC fined Meta €390 million in January 2023 after finding that Meta had unlawfully forced users to consent to behavioural advertising as a condition of using Facebook and Instagram. The DPC found Meta was not entitled to rely on 'contract' as a legal basis for personalised ad targeting.", source: "Data Protection Commission Ireland / IAPP January 2023", url: "https://iapp.org/news/a/irish-dpc-fines-meta-390m-euros-over-legal-basis-for-personalized-ads" },
      { text: "The Irish DPC fined Meta €251 million in December 2024 following a 2018 data breach affecting 29 million Facebook accounts globally, including 3 million EU accounts. Exposed data included full names, email addresses, phone numbers, locations, dates of birth, religion, gender, and children's personal data.", source: "Data Protection Commission Ireland December 2024", url: "https://www.dataprotection.ie/en/news-media/press-releases/irish-data-protection-commission-fines-meta-eu251-million" },
      { text: "The Irish DPC fined Meta €91 million in September 2024 after Meta stored hundreds of millions of user passwords in plaintext — without cryptographic protection or encryption — on its internal systems. The breach was self-reported by Meta in March 2019.", source: "Data Protection Commission Ireland September 2024", url: "https://www.dataprotection.ie/en/news-media/press-releases/DPC-announces-91-million-fine-of-Meta" },
      { text: "The Irish DPC fined WhatsApp Ireland €225 million in September 2021 for failing to be transparent with users about how it processed their personal data, including data shared with Facebook. It was the second-largest GDPR fine at the time.", source: "Data Protection Commission Ireland September 2021", url: "https://dataprotection.ie" },
      { text: "The US Federal Trade Commission fined Facebook $5 billion in 2019 — the largest privacy fine in US history at the time — for violating a 2012 consent decree by sharing user data with Cambridge Analytica and other third parties without adequate user consent.", source: "US Federal Trade Commission 2019", url: "https://ftc.gov" }
    ]},
    { label: "Labour & human rights", badgeClass: "badge-labour", findings: [
      { text: "Content moderators employed through Accenture in Dublin reported severe psychological trauma from sustained exposure to violent and abusive content, with inadequate mental health support. A 2021 Guardian investigation documented moderators developing PTSD symptoms.", source: "The Guardian 2021", url: "https://theguardian.com" },
      { text: "Frances Haugen's 2021 whistleblower disclosure — backed by internal Facebook documents — revealed Meta's own research showed Instagram worsens body image issues in teenage girls and that the company did not act on these findings.", source: "US Senate Commerce Committee / WSJ October 2021", url: "https://commerce.senate.gov" }
    ]},
    { label: "Data & privacy", badgeClass: "badge-data", findings: [
      { text: "The Cambridge Analytica scandal (2018): Facebook user data belonging to approximately 87 million people was harvested without consent and used in the 2016 US presidential election and Brexit campaign. Facebook had allowed third-party app developers access to users' friend networks without explicit consent.", source: "New York Times / The Guardian March 2018", url: "https://nytimes.com" },
      { text: "Belgian courts ruled that Meta's collection of data on non-users through tracking pixels embedded in third-party websites was illegal under GDPR.", source: "Belgian Data Protection Authority 2022", url: "https://dataprotectionauthority.be" }
    ]},
    { label: "Lobbying", badgeClass: "badge-supply", findings: [
      { text: "Meta spent over $20 million on US federal lobbying in 2023, targeting AI regulation, Section 230 reform, and data privacy legislation.", source: "OpenSecrets 2023", url: "https://opensecrets.org" }
    ]}
  ],
  alternatives: [
    "Signal for private messaging instead of WhatsApp",
    "Mastodon or Bluesky for social networking — decentralised, no single corporate owner",
    "ProtonMail for private email"
  ]
},

"apple": {
  type: "company", tags: ["ireland"],
  name: "Apple Inc.",
  subtitle: "Technology — United States (EU HQ in Cork, Ireland)",
  corporate: {
    parent: { name: "Apple Inc.", note: "Nasdaq: AAPL. Market cap ~$3 trillion. No parent company.", compliance: "mixed", link: null },
    subsidiaries: [
      { name: "Apple Operations International (Ireland)", note: "Main Irish holding company — used for profit routing, subject to €13bn EU tax ruling", compliance: "concern" },
      { name: "Apple Distribution International (Ireland)", note: "Handles European sales from Cork", compliance: "mixed" },
      { name: "Beats Electronics", note: "Audio products — acquired 2014", compliance: "mixed" },
      { name: "Shazam", note: "Music recognition — acquired 2018", compliance: "unclear" }
    ],
    shareholders: [
      { name: "Vanguard Group", note: "~8.5% — largest institutional shareholder", compliance: "unclear" },
      { name: "BlackRock", note: "~6.5% stake", compliance: "mixed" },
      { name: "Berkshire Hathaway (Warren Buffett)", note: "~5.9% stake", compliance: "mixed" },
      { name: "Tim Cook (CEO)", note: "~3.3 million shares personal holding", compliance: "unclear" }
    ]
  },
  products: [
    { name: "iPhone", flags: ["Cobalt mining concerns", "App Store antitrust violations", "Right to repair blocked"] },
    { name: "App Store", flags: ["€500m EU DMA fine 2025", "US DOJ antitrust lawsuit 2024", "30% commission ruled anticompetitive"] },
    { name: "MacBook", flags: ["Repairability rated poor", "Soldered components prevent repair"] },
    { name: "AirPods", flags: ["Battery not user-replaceable", "Electronic waste concern"] }
  ],
  categories: [
    { label: "Legal violations & fines", badgeClass: "badge-political", findings: [
      { text: "The EU Court of Justice ruled in September 2024 that Apple must repay €13 billion in back taxes to Ireland. The European Commission had found in 2016 that Ireland granted Apple illegal state aid through special tax arrangements dating to 1991 and 2007, allowing Apple to pay an effective rate of just 0.005% on European profits in 2014.", source: "EU Court of Justice September 2024", url: "https://www.pbs.org/newshour/world/google-and-apple-lose-legal-battles-in-europe-and-now-owe-billions-in-fines-and-back-taxes" },
      { text: "The European Commission fined Apple €500 million in April 2025 under the Digital Markets Act for preventing app developers from freely directing users to cheaper alternatives outside the App Store. This was the first fine ever issued under the DMA.", source: "European Commission April 2025", url: "https://ec.europa.eu" },
      { text: "A US District Court ruled in March 2024 that Apple had wilfully violated a 2021 antitrust court order by imposing a 27% fee on developers using alternative payment methods and displaying scare warnings about leaving the App Store — behaviour the court found deliberately circumvented the original ruling.", source: "US District Court March 2024", url: "https://ainvest.com/news/apple-legal-battles-regulatory-headwinds-turning-point-ecosystem-dominance-2505" },
      { text: "The US Department of Justice, together with 16 states, filed an antitrust lawsuit against Apple in March 2024 accusing it of illegally monopolising the smartphone market by blocking technologies that would reduce consumer dependence on the iPhone.", source: "US Department of Justice March 2024", url: "https://congress.gov/crs-product/LSB11154" },
      { text: "Apple received a €25 million fine from France's data authority CNIL in January 2022 for placing advertising trackers on iPhones without adequate user consent.", source: "CNIL France January 2022", url: "https://cnil.fr" }
    ]},
    { label: "Tax arrangements", badgeClass: "badge-tax", findings: [
      { text: "The US Senate Permanent Subcommittee on Investigations documented that Apple's Irish subsidiary Apple Operations International had no employees, no physical premises, and paid no tax to any government, despite being the repository of tens of billions in Apple profits.", source: "US Senate Permanent Subcommittee on Investigations 2013", url: "https://hsgac.senate.gov" }
    ]},
    { label: "Labour & human rights", badgeClass: "badge-labour", findings: [
      { text: "Foxconn factories in China — Apple's primary manufacturing partner — have faced sustained documented reports of excessive working hours, wages below living wage levels, and worker suicides. Apple's own supplier audits have repeatedly found violations of its own code of conduct.", source: "China Labor Watch 2023", url: "https://chinalaborwatch.org" },
      { text: "Cobalt in Apple batteries is sourced from the Democratic Republic of Congo where artisanal mining has been linked to child labour. Amnesty International documented children as young as seven working in cobalt mines supplying the battery industry.", source: "Amnesty International 2023", url: "https://amnesty.org" }
    ]},
    { label: "Environment", badgeClass: "badge-env", findings: [
      { text: "iFixit and Right to Repair Europe have consistently rated Apple products among the least repairable consumer electronics, with soldered components, proprietary screws, and software locks preventing independent repair and driving premature replacement.", source: "iFixit Repairability Scores 2023", url: "https://ifixit.com" }
    ]},
    { label: "Lobbying", badgeClass: "badge-political", findings: [
      { text: "Apple spent $9.4 million on US federal lobbying in 2023, targeting app store regulation, digital markets law, privacy regulation, and AI governance.", source: "OpenSecrets 2023", url: "https://opensecrets.org" }
    ]}
  ],
  alternatives: [
    "Fairphone — ethical Android smartphone with repairability focus",
    "Refurbished iPhones via Back Market or Swappie",
    "Repair rather than replace — Apple offers battery replacement programmes"
  ]
},

"amazon": {
  type: "company", tags: [],
  name: "Amazon",
  subtitle: "Technology & Retail — United States (Nasdaq: AMZN)",
  corporate: {
    parent: { name: "Amazon.com Inc.", note: "Nasdaq: AMZN. Revenue ~$620bn. Andy Jassy CEO.", compliance: "concern", link: null },
    subsidiaries: [
      { name: "Amazon Web Services (AWS)", note: "Cloud computing — dominant market position, hosts Netflix, Airbnb, much of the internet", compliance: "mixed" },
      { name: "Whole Foods Market", note: "Grocery retail — acquired 2017", compliance: "mixed" },
      { name: "Twitch", note: "Live streaming platform", compliance: "mixed" },
      { name: "MGM Studios", note: "Film and TV — acquired 2022", compliance: "mixed" },
      { name: "Ring", note: "Home surveillance — shared footage with US police without warrants", compliance: "concern" },
      { name: "Amazon Ireland", note: "Irish operations — routes EU profits through Luxembourg", compliance: "concern" }
    ],
    shareholders: [
      { name: "Jeff Bezos (founder)", note: "~9% stake — largest individual shareholder", compliance: "concern" },
      { name: "Vanguard Group", note: "~7% institutional stake", compliance: "unclear" },
      { name: "BlackRock", note: "~5.5% stake", compliance: "mixed" }
    ]
  },
  products: [
    { name: "Amazon Marketplace", flags: ["Used seller data anticompetitively — EU investigation", "Buy Box manipulation investigated"] },
    { name: "Amazon Prime", flags: ["FTC lawsuit over cancellation dark patterns 2023"] },
    { name: "Alexa / Echo", flags: ["Children's voice data retained illegally — FTC fine", "Always-on microphone"] },
    { name: "Ring cameras", flags: ["Shared footage with police without warrants", "Employee access to customer footage documented"] },
    { name: "Amazon Logistics", flags: ["Injury rates above industry average", "Algorithmic management documented"] }
  ],
  categories: [
    { label: "Legal violations & fines", badgeClass: "badge-political", findings: [
      { text: "Luxembourg's data protection authority fined Amazon €746 million in 2021 under GDPR for violations related to personal data processing — the second-largest GDPR fine ever imposed at the time.", source: "Luxembourg CNPD / GDPR Enforcement Tracker 2021", url: "https://skillcast.com/blog/20-biggest-gdpr-fines" },
      { text: "The US FTC fined Amazon $25 million in 2023 for violating the Children's Online Privacy Protection Act by retaining children's Alexa voice recordings indefinitely and using them to train its algorithms, despite parental requests for deletion.", source: "US Federal Trade Commission May 2023", url: "https://ftc.gov" },
      { text: "The European Commission issued Amazon a formal statement of objections in 2020 for systematically using non-public business data from independent marketplace sellers to benefit its own retail division. Amazon settled in 2022 with behavioural commitments to avoid a multi-billion euro fine.", source: "European Commission 2020 / CNBC December 2022", url: "https://www.cnbc.com/2022/12/20/amazon-reaches-settlement-with-eu-on-antitrust-case.html" },
      { text: "The US FTC sued Amazon in September 2023 accusing it of illegally maintaining monopoly power through its Prime programme and marketplace practices, and of using dark patterns to trap consumers in Prime subscriptions that were deliberately difficult to cancel.", source: "US Federal Trade Commission September 2023", url: "https://ftc.gov" }
    ]},
    { label: "Labour & human rights", badgeClass: "badge-labour", findings: [
      { text: "Amazon warehouse workers in the US, UK, and Germany have documented injury rates significantly above industry average due to extreme productivity quotas monitored by algorithmic management. The Strategic Organising Center found Amazon's serious injury rate was more than double the industry average in 2022.", source: "Strategic Organising Center 2022", url: "https://thesoc.org" },
      { text: "The National Labor Relations Board found Amazon guilty of multiple unfair labour practice violations including threatening workers and illegally interfering with union organising. Amazon illegally fired union organiser Christian Smalls before workers at a Staten Island warehouse successfully unionised in 2022.", source: "National Labor Relations Board 2022", url: "https://nlrb.gov" },
      { text: "EU trade unions filed a complaint in 2024 accusing Amazon of running an excessively intrusive surveillance and algorithmic management system for warehouse workers in Austria, Germany, Ireland, and Spain — in systematic disregard of EU privacy laws.", source: "Law Society of Ireland Gazette May 2024", url: "https://www.lawsociety.ie/gazette/top-stories/2024/may/amazon-accused-of-systemic-disregard-for-eu-privacy-laws" }
    ]},
    { label: "Tax arrangements", badgeClass: "badge-tax", findings: [
      { text: "Amazon routes European profits through a Luxembourg holding structure, allowing revenues from Ireland, UK, France, and Germany to be taxed at Luxembourg rates. The European Commission investigated this as potential illegal state aid.", source: "European Commission State Aid Investigation 2017", url: "https://ec.europa.eu" }
    ]},
    { label: "Data & privacy", badgeClass: "badge-data", findings: [
      { text: "Ring shared customer footage with over 2,000 US law enforcement agencies between 2018 and 2022 without requiring a warrant — often without the knowledge of camera owners. This was confirmed in a US Senate inquiry in 2022.", source: "US Senate Inquiry / The Guardian 2022", url: "https://theguardian.com" }
    ]}
  ],
  alternatives: [
    "Local bookshops or hive.co.uk for books",
    "Etsy for handmade and independent products",
    "Local retailers and independent Irish shops",
    "Fastly or Cloudflare instead of AWS for developers"
  ]
},

"microsoft": {
  type: "company", tags: [],
  name: "Microsoft (incl. LinkedIn)",
  subtitle: "Technology — United States (Nasdaq: MSFT)",
  corporate: {
    parent: { name: "Microsoft Corporation", note: "Nasdaq: MSFT. Market cap ~$3 trillion. CEO Satya Nadella.", compliance: "mixed", link: null },
    subsidiaries: [
      { name: "LinkedIn", note: "Professional network — €310m GDPR fine Ireland 2024", compliance: "concern" },
      { name: "GitHub", note: "Code hosting platform — acquired 2018", compliance: "mixed" },
      { name: "Activision Blizzard", note: "Gaming — acquired 2023. Sexual harassment culture documented. NLRB violations.", compliance: "concern" },
      { name: "OpenAI (partial)", note: "~49% stake — AI company behind ChatGPT", compliance: "mixed" },
      { name: "Nuance Communications", note: "Healthcare AI — acquired 2022", compliance: "mixed" }
    ],
    shareholders: [
      { name: "Vanguard Group", note: "~9% stake — largest institutional shareholder", compliance: "unclear" },
      { name: "BlackRock", note: "~7% stake", compliance: "mixed" },
      { name: "Bill Gates (founder)", note: "~1% stake — reduced via philanthropy", compliance: "mixed" },
      { name: "Satya Nadella (CEO)", note: "~0.1% stake", compliance: "unclear" }
    ]
  },
  products: [
    { name: "LinkedIn", flags: ["€310m Irish DPC GDPR fine 2024", "Tracking ad data processed illegally"] },
    { name: "Windows / Office 365", flags: ["EU antitrust investigation into Teams bundling"] },
    { name: "Azure cloud", flags: ["US CLOUD Act allows government access to overseas data"] },
    { name: "Activision games", flags: ["Documented sexual harassment culture", "NLRB violations during acquisition"] }
  ],
  categories: [
    { label: "Legal violations & fines", badgeClass: "badge-political", findings: [
      { text: "The Irish Data Protection Commission fined LinkedIn €310 million in October 2024 for GDPR violations in its targeted advertising business. The DPC found that LinkedIn had used invalid legal bases — including 'legitimate interests' and 'consent' — to process personal data for behavioural advertising, and had failed to properly inform users about its data practices.", source: "Data Protection Commission Ireland / TechCrunch October 2024", url: "https://techcrunch.com/2024/10/24/linkedin-fined-356-million-in-eu-for-tracking-ads-privacy-breaches" },
      { text: "The European Commission opened an antitrust investigation into Microsoft in 2023 over its bundling of Teams with Microsoft 365 Office software following a complaint from Slack. Microsoft subsequently agreed to unbundle Teams globally to avoid a potential multi-billion euro fine.", source: "European Commission 2023", url: "https://ec.europa.eu" }
    ]},
    { label: "Labour & human rights", badgeClass: "badge-labour", findings: [
      { text: "Activision Blizzard — acquired by Microsoft in 2023 for $69 billion — had been sued by California's Department of Fair Employment and Housing over a documented culture of sexual harassment, gender discrimination, and retaliation against female employees. The NLRB also filed complaints against Activision for illegally interfering with workers' rights to organise.", source: "California DFEH / NLRB 2021–2023", url: "https://dfeh.ca.gov" }
    ]},
    { label: "Data & privacy", badgeClass: "badge-data", findings: [
      { text: "Microsoft's cloud services including Azure, Office 365, and LinkedIn are subject to the US CLOUD Act, which allows US authorities to demand access to data stored on Microsoft servers anywhere in the world, including in Europe. EU data protection authorities have flagged this as incompatible with GDPR protections for European citizens.", source: "European Data Protection Board reports", url: "https://edpb.europa.eu" }
    ]},
    { label: "Lobbying", badgeClass: "badge-supply", findings: [
      { text: "Microsoft spent $9.8 million on US federal lobbying in 2023, targeting AI regulation, cybersecurity legislation, antitrust reform, and government procurement rules.", source: "OpenSecrets 2023", url: "https://opensecrets.org" }
    ]}
  ],
  alternatives: [
    "LibreOffice — free open-source alternative to Microsoft Office",
    "Slack or Discord instead of Teams",
    "ProtonMail instead of Outlook for private email",
    "Gitea or Codeberg instead of GitHub for code hosting"
  ]
},

"tiktok": {
  type: "company", tags: [],
  name: "TikTok (ByteDance)",
  subtitle: "Technology — China (EU operations registered in Dublin, Ireland)",
  corporate: {
    parent: { name: "ByteDance Ltd.", note: "Private Chinese company. HQ Beijing. Estimated value ~$300bn. Subject to Chinese national security laws.", compliance: "concern", link: null },
    subsidiaries: [
      { name: "TikTok Ireland Ltd.", note: "European HQ in Dublin — lead GDPR jurisdiction for EU enforcement", compliance: "concern" },
      { name: "TikTok UK", note: "UK operations", compliance: "concern" },
      { name: "Douyin", note: "Chinese domestic version of TikTok — subject to Chinese censorship and surveillance laws", compliance: "concern" }
    ],
    shareholders: [
      { name: "ByteDance founders and employees", note: "~60% ownership", compliance: "concern" },
      { name: "General Atlantic", note: "US private equity — ~7% stake", compliance: "unclear" },
      { name: "Susquehanna International Group", note: "~15% stake", compliance: "unclear" }
    ]
  },
  products: [
    { name: "TikTok app", flags: ["€530m GDPR fine 2025 for China data transfers", "Children's data violations — UK £12.7m fine", "Algorithmic design linked to addictive use"] },
    { name: "TikTok for Business", flags: ["Advertising platform — data targeting practices under investigation"] }
  ],
  categories: [
    { label: "Legal violations & fines", badgeClass: "badge-political", findings: [
      { text: "The Irish Data Protection Commission fined TikTok €530 million in May 2025 — the third-largest GDPR fine ever imposed — for transferring European users' personal data to servers in China without ensuring equivalent protections to those required under EU law. The DPC found that engineers in China had routine access to sensitive data of EU users, and that TikTok failed to adequately assess the risks posed by Chinese anti-terrorism and counter-espionage laws that can compel data disclosure to the Chinese government.", source: "Data Protection Commission Ireland May 2025", url: "https://skillcast.com/blog/20-biggest-gdpr-fines" },
      { text: "The UK Information Commissioner's Office fined TikTok £12.7 million in April 2023 for unlawfully processing the personal data of children under 13 without parental consent, in violation of UK data protection law.", source: "UK ICO April 2023", url: "https://ico.org.uk" },
      { text: "The US FTC referred TikTok to the DOJ in 2024 for alleged violations of the Children's Online Privacy Protection Act, including failing to honour parents' and users' requests to delete data collected from children.", source: "US Federal Trade Commission 2024", url: "https://ftc.gov" }
    ]},
    { label: "Data & privacy", badgeClass: "badge-data", findings: [
      { text: "TikTok's parent ByteDance is incorporated in China and subject to Chinese national security laws requiring companies to cooperate with Chinese intelligence services. The Irish DPC's €530m fine was specifically linked to the structural risk that Chinese authorities could access European user data through ByteDance's ownership and control of TikTok.", source: "Data Protection Commission Ireland 2025 / MediaLaws analysis", url: "https://www.medialaws.eu/why-tiktok-was-fined-half-a-billion-under-the-gdpr" },
      { text: "ByteDance employees in China accessed the private data of US journalists in 2022 in an attempt to identify their sources. ByteDance fired four employees following an internal investigation and the incident was confirmed in statements to US media.", source: "Forbes / ByteDance December 2022", url: "https://forbes.com" }
    ]},
    { label: "Lobbying", badgeClass: "badge-supply", findings: [
      { text: "TikTok spent $8.7 million on US federal lobbying in 2023, primarily targeting legislation that would force a sale or ban of the app in the United States. The Protecting Americans from Foreign Adversary Controlled Applications Act was ultimately signed into law in 2024, requiring ByteDance to divest TikTok.", source: "OpenSecrets 2023", url: "https://opensecrets.org" }
    ]}
  ],
  alternatives: [
    "YouTube Shorts for short video content",
    "Nebula or Vimeo for independent creator content",
    "Instagram Reels — though Meta has its own privacy concerns"
  ]
},

"pfizer": {
  type: "company", tags: ["ireland"],
  name: "Pfizer",
  subtitle: "Pharmaceuticals — United States (major Irish manufacturing operations)",
  corporate: {
    parent: { name: "Pfizer Inc.", note: "NYSE: PFE. Revenue ~$63bn. One of the world's largest pharmaceutical companies. HQ New York.", compliance: "concern", link: null },
    subsidiaries: [
      { name: "Pfizer Ireland Pharmaceuticals", note: "Major manufacturing sites in Ringaskiddy, Cork and Newbridge, Kildare — one of Pfizer's largest global manufacturing hubs", compliance: "mixed" },
      { name: "Pfizer Healthcare Ireland", note: "Irish commercial operations", compliance: "mixed" },
      { name: "Wyeth (now Pfizer)", note: "Acquired 2009 — Wyeth had major Munster manufacturing", compliance: "mixed" }
    ],
    shareholders: [
      { name: "Vanguard Group", note: "~9% — largest institutional shareholder", compliance: "unclear" },
      { name: "BlackRock", note: "~7% stake", compliance: "mixed" },
      { name: "State Street Global Advisors", note: "~4% stake", compliance: "unclear" }
    ]
  },
  products: [
    { name: "Bextra (withdrawn)", flags: ["Criminal plea — illegal off-label promotion", "$1.3bn criminal penalty 2009"] },
    { name: "Lyrica (pregabalin)", flags: ["Off-label promotion — part of 2009 DOJ settlement"] },
    { name: "Geodon (ziprasidone)", flags: ["Off-label promotion — part of 2009 DOJ settlement"] },
    { name: "Lipitor, Viagra, Zoloft", flags: ["Aggressive patent protection strategies", "Pay-for-delay settlements investigated"] }
  ],
  categories: [
    { label: "Legal violations & fines", badgeClass: "badge-political", findings: [
      { text: "Pfizer paid $2.3 billion to the US Department of Justice in 2009 — the largest healthcare fraud settlement in US history at the time. A Pfizer subsidiary, Pharmacia & Upjohn, pleaded guilty to one criminal count of violating the Food, Drug, and Cosmetic Act for illegally promoting Bextra for unapproved uses and at doses higher than approved. The settlement also resolved allegations of illegal off-label promotion of Geodon, Lyrica, and Zyvox, and allegations of payments to healthcare professionals.", source: "US Department of Justice / Pfizer 8-K September 2009", url: "https://www.sec.gov/Archives/edgar/data/0000078003/000007800309000189/x990902.htm" },
      { text: "Pfizer has been subject to repeated DOJ and FTC investigations over 'pay-for-delay' patent settlements — arrangements where brand-name pharmaceutical companies pay generic manufacturers to delay releasing cheaper versions of drugs, keeping prices artificially high at the expense of patients and healthcare systems.", source: "US Federal Trade Commission reports", url: "https://ftc.gov" }
    ]},
    { label: "Tax arrangements", badgeClass: "badge-tax", findings: [
      { text: "Ireland is one of Pfizer's most significant global manufacturing bases, with major plants in Cork and Kildare. Like other US pharmaceutical multinationals in Ireland, Pfizer has structured its Irish operations to benefit from Ireland's 12.5% corporate tax rate and IP-based tax structures, allowing profits from global drug sales to be attributed to Irish entities.", source: "Companies Registration Office Ireland / IDA Ireland reports", url: "https://cro.ie" },
      { text: "Pfizer's proposed $160 billion merger with Allergan in 2016 — which would have relocated Pfizer's legal headquarters to Ireland in a so-called 'tax inversion' — was abandoned after the US Treasury introduced new rules specifically designed to block the deal. The inversion would have allowed Pfizer to avoid US corporate taxes on its overseas profits.", source: "US Treasury Department 2016 / New York Times", url: "https://nytimes.com" }
    ]},
    { label: "Labour & human rights", badgeClass: "badge-labour", findings: [
      { text: "Pfizer and other pharmaceutical companies holding COVID-19 vaccine patents refused to support a temporary waiver of intellectual property protections at the WTO during the pandemic, despite calls from over 100 countries, the WHO, and Médecins Sans Frontières. Critics argued this kept vaccine prices high and limited access in lower-income countries.", source: "Médecins Sans Frontières / WTO TRIPS waiver debate 2021", url: "https://msfaccess.org" }
    ]},
    { label: "Lobbying", badgeClass: "badge-supply", findings: [
      { text: "Pfizer spent $11.4 million on US federal lobbying in 2023, targeting drug pricing legislation, Medicare negotiation rules, patent protection, and regulatory reform.", source: "OpenSecrets 2023", url: "https://opensecrets.org" },
      { text: "PhRMA — the pharmaceutical industry lobby group of which Pfizer is a leading member — spent over $30 million on US federal lobbying in 2023, making it one of the largest lobbying operations in Washington, primarily targeting legislation that would allow Medicare to negotiate drug prices.", source: "OpenSecrets 2023", url: "https://opensecrets.org" }
    ]}
  ],
  alternatives: [
    "Support generic and biosimilar drug availability",
    "Advocate for transparent drug pricing through patient groups",
    "MSF Access Campaign for information on pharmaceutical patent abuse"
  ]
},

"johnson-johnson": {
  type: "company", tags: [],
  name: "Johnson & Johnson",
  subtitle: "Pharmaceuticals & Consumer — United States (NYSE: JNJ)",
  corporate: {
    parent: { name: "Johnson & Johnson", note: "NYSE: JNJ. Revenue ~$88bn. Split into J&J (pharma/medtech) and Kenvue (consumer) in 2023.", compliance: "concern", link: null },
    subsidiaries: [
      { name: "Janssen Pharmaceuticals (Ireland)", note: "Major R&D and manufacturing in Cork and Dublin. Janssen is J&J's pharmaceutical division.", compliance: "concern" },
      { name: "Kenvue", note: "Consumer health spinoff — owns Johnson's Baby, Tylenol, Listerine, Neutrogena", compliance: "mixed" },
      { name: "DePuy Synthes", note: "Orthopaedic devices — multiple recall and litigation issues", compliance: "concern" },
      { name: "Ethicon", note: "Surgical products — mesh litigation", compliance: "concern" }
    ],
    shareholders: [
      { name: "Vanguard Group", note: "~9% stake", compliance: "unclear" },
      { name: "BlackRock", note: "~7% stake", compliance: "mixed" },
      { name: "State Street Global Advisors", note: "~4% stake", compliance: "unclear" }
    ]
  },
  products: [
    { name: "Johnson's Baby Powder (talc)", flags: ["Asbestos contamination — 60,000+ lawsuits", "Lab tests showed asbestos from 1971 to early 2000s", "Company knew and did not report to FDA"] },
    { name: "Risperdal (risperidone)", flags: ["$2.2bn DOJ settlement for illegal marketing", "Promoted off-label to children and elderly"] },
    { name: "Surgical mesh products", flags: ["Thousands of injury lawsuits", "Products recalled in multiple countries"] },
    { name: "DePuy hip implants", flags: ["Global recall 2010 — metal-on-metal failure", "Over $4bn in settlements"] }
  ],
  categories: [
    { label: "Legal violations & fines", badgeClass: "badge-political", findings: [
      { text: "Johnson & Johnson faces over 60,000 lawsuits from people who claim that asbestos in its talc-based Johnson's Baby Powder caused them to develop ovarian cancer or mesothelioma. Lab tests showed asbestos contamination in J&J talc from at least 1971 to the early 2000s. The company never reported those findings to the US Food and Drug Administration. J&J has paid out over $2 billion in settlements and multiple juries have found the company liable, including a $1.5 billion mesothelioma verdict in December 2025.", source: "Reuters / Drugwatch / asbestos.com", url: "https://usrtk.org/cosmetics/johnson-talc-baby-powder-asbestos" },
      { text: "J&J has attempted to use the US bankruptcy system three times to limit its talc liability — a controversial legal manoeuvre called the 'Texas Two-Step', which involves creating a new subsidiary, loading it with the liability, and having it declare bankruptcy. All three attempts were rejected by US bankruptcy courts as of 2025.", source: "US Bankruptcy Courts 2021–2025 / Reuters", url: "https://drugwatch.com/talcum-powder/lawsuits" },
      { text: "J&J paid $2.2 billion to the US Department of Justice in 2013 to settle criminal and civil allegations that it had illegally marketed the antipsychotic drug Risperdal for unapproved uses, including to children and elderly nursing home patients. A J&J subsidiary pleaded guilty to a criminal misdemeanour.", source: "US Department of Justice November 2013", url: "https://justice.gov" },
      { text: "J&J's DePuy division recalled its ASR metal-on-metal hip implants globally in 2010 after they failed at an unusually high rate, releasing metal particles into patients' bodies. Over 93,000 implants were recalled. J&J paid over $4 billion in settlements to affected patients worldwide.", source: "US FDA / Reuters 2010–2016", url: "https://fda.gov" }
    ]},
    { label: "Labour & human rights", badgeClass: "badge-labour", findings: [
      { text: "J&J, like other major pharmaceutical companies, opposed the WTO intellectual property waiver during the COVID-19 pandemic that would have allowed lower-income countries to manufacture vaccines without patent restrictions. This position was maintained despite calls from the WHO, Médecins Sans Frontières, and over 100 governments.", source: "Médecins Sans Frontières / WTO proceedings 2021", url: "https://msfaccess.org" }
    ]},
    { label: "Tax arrangements", badgeClass: "badge-tax", findings: [
      { text: "Janssen Pharmaceuticals, J&J's Irish-based drug development and manufacturing subsidiary, operates in Ireland partly due to its favourable tax environment. Janssen Ireland files accounts with the CRO showing Irish-registered entities holding significant intellectual property rights, contributing to a lower effective global tax rate for J&J.", source: "Companies Registration Office Ireland", url: "https://cro.ie" }
    ]},
    { label: "Lobbying", badgeClass: "badge-supply", findings: [
      { text: "Johnson & Johnson spent $9.3 million on US federal lobbying in 2023, targeting drug pricing legislation, Medicare drug price negotiation, patent protection, and medical device regulation.", source: "OpenSecrets 2023", url: "https://opensecrets.org" }
    ]}
  ],
  alternatives: [
    "Avoid talc-based body powder — cornstarch-based alternatives available",
    "Generic equivalents for J&J drugs where available",
    "Independent pharmacies for personal care products"
  ]
},

"astrazeneca": {
  type: "company", tags: [],
  name: "AstraZeneca",
  subtitle: "Pharmaceuticals — United Kingdom (LSE/Nasdaq: AZN)",
  corporate: {
    parent: { name: "AstraZeneca PLC", note: "LSE/Nasdaq: AZN. Revenue ~$46bn. HQ Cambridge, UK. CEO Pascal Soriot.", compliance: "mixed", link: null },
    subsidiaries: [
      { name: "Alexion Pharma International Operations Ltd (Ireland)", note: "Irish-registered subsidiary — Alexion acquired by AZ in 2021 for $39bn", compliance: "mixed" },
      { name: "Alexion Pharma Holding Ltd (Ireland)", note: "Irish holding company for rare disease division", compliance: "mixed" },
      { name: "AstraZeneca manufacturing sites", note: "No major Irish manufacturing — mainly UK, Sweden, US", compliance: "mixed" }
    ],
    shareholders: [
      { name: "Vanguard Group", note: "~5% institutional stake", compliance: "unclear" },
      { name: "BlackRock", note: "~4% stake", compliance: "mixed" },
      { name: "Capital Research", note: "~5% stake", compliance: "unclear" }
    ]
  },
  products: [
    { name: "COVID-19 vaccine (Vaxzevria)", flags: ["EU sued over supply shortfalls 2021", "Rare blood clot side effect — delayed disclosure concerns"] },
    { name: "Seroquel (quetiapine)", flags: ["$520m DOJ settlement for illegal marketing 2010"] },
    { name: "Nexium, Losec", flags: ["Pay-for-delay patent settlements investigated"] },
    { name: "Rare disease drugs (Alexion)", flags: ["Among highest-priced drugs in the world", "Soliris price — $700,000 per patient per year"] }
  ],
  categories: [
    { label: "Legal violations & fines", badgeClass: "badge-political", findings: [
      { text: "AstraZeneca paid $520 million to the US Department of Justice in 2010 to settle allegations that it had illegally marketed the antipsychotic drug Seroquel (quetiapine) for unapproved uses including in children, the elderly, veterans, and prisoners. The settlement resolved both criminal and civil allegations.", source: "US Department of Justice April 2010", url: "https://justice.gov" },
      { text: "The European Commission took legal action against AstraZeneca in 2021 over its failure to deliver COVID-19 vaccines as contractually required to EU member states. AstraZeneca delivered only 30 million of a promised 120 million doses in the first quarter of 2021. A Belgian court initially ruled AstraZeneca had breached its contract.", source: "European Commission / Irish Examiner April 2021", url: "https://www.irishexaminer.com/news/arid-40272185.html" }
    ]},
    { label: "Labour & human rights", badgeClass: "badge-labour", findings: [
      { text: "AstraZeneca's Alexion division produces Soliris (eculizumab) — one of the world's most expensive drugs at approximately $700,000 per patient per year. Médecins Sans Frontières and patient advocacy groups have repeatedly criticised Alexion and AstraZeneca for the pricing of rare disease drugs that are unaffordable to most health systems and patients globally, despite the drugs being developed partly with public research funding.", source: "Médecins Sans Frontières Access Campaign", url: "https://msfaccess.org" }
    ]},
    { label: "Tax arrangements", badgeClass: "badge-tax", findings: [
      { text: "AstraZeneca holds two Irish-registered subsidiaries — Alexion Pharma International Operations Ltd and Alexion Pharma Holding Ltd — as part of its post-acquisition structure following the $39 billion purchase of Alexion in 2021. These Irish entities hold intellectual property and operational rights for AstraZeneca's rare disease division in structures that benefit from Ireland's 12.5% corporate tax rate.", source: "AstraZeneca Form 20-F 2024 / Companies Registration Office Ireland", url: "https://www.sec.gov/Archives/edgar/data/0000901832/000110465925014750/azn-20241231xex8d1.htm" }
    ]},
    { label: "Lobbying", badgeClass: "badge-supply", findings: [
      { text: "AstraZeneca spent $4.8 million on US federal lobbying in 2023, targeting drug pricing legislation, Medicare negotiation rules, and regulatory policy for rare disease drugs.", source: "OpenSecrets 2023", url: "https://opensecrets.org" }
    ]}
  ],
  alternatives: [
    "Generic alternatives where patent exclusivity has expired",
    "Support MSF Access Campaign for fair medicine pricing",
    "Advocate for public research funding transparency"
  ]
},

"aib": {
  type: "company", tags: ["ireland"],
  name: "AIB (Allied Irish Banks)",
  subtitle: "Banking — Republic of Ireland (Euronext: A5G)",
  corporate: {
    parent: { name: "AIB Group plc", note: "Irish state owns ~51.9% following 2008 bailout. Listed Euronext Dublin.", compliance: "concern", link: null },
    subsidiaries: [
      { name: "EBS (Educational Building Society)", note: "Mortgage lender — fined €13.4m for tracker mortgage breaches", compliance: "concern" },
      { name: "Haven Mortgages", note: "AIB-backed broker-only mortgage brand", compliance: "mixed" },
      { name: "AIB Group (UK) plc", note: "UK banking operations", compliance: "mixed" }
    ],
    shareholders: [
      { name: "Irish State (Dept of Finance)", note: "~51.9% stake — majority state-owned following 2008 bailout and €21bn rescue", compliance: "mixed" },
      { name: "Vanguard Group", note: "~3% institutional stake", compliance: "unclear" },
      { name: "BlackRock", note: "~2% stake", compliance: "mixed" }
    ]
  },
  products: [
    { name: "AIB mortgages", flags: ["Tracker mortgage scandal — 10,015 accounts wrongly denied", "€83.3m Central Bank fine"] },
    { name: "AIB current accounts", flags: ["Branch closure programme — 70+ closures 2022-23"] },
    { name: "AIB business banking", flags: ["SME lending rates criticism"] }
  ],
  categories: [
    { label: "Legal violations & fines", badgeClass: "badge-political", findings: [
      { text: "The Central Bank of Ireland fined AIB a record €83.3 million in June 2022 for 57 separate regulatory breaches in its treatment of tracker mortgage customers across 10,015 accounts between August 2004 and March 2022. The Central Bank stated that AIB's failings caused 'unacceptable harm and loss' to customers over nearly 18 years, including significant financial strain and distress. AIB's EBS subsidiary was separately fined €13.4 million for 36 breaches affecting 2,830 accounts.", source: "Central Bank of Ireland June 2022", url: "https://www.centralbank.ie/news/article/press-release-aib-reprimanded-and-fined-83m-by-central-bank-of-ireland-for-regulatory-breaches-affecting-tracker-mortgage-customers-23-june-2022" },
      { text: "The tracker mortgage scandal affected over 40,000 Irish mortgage customers across all major banks. AIB, along with Bank of Ireland, KBC, Permanent TSB, and Ulster Bank, wrongfully denied customers tracker mortgage rates they were contractually entitled to, switching them to more expensive variable or fixed rates when the financial crisis hit in 2008. In some cases customers lost their homes as a result.", source: "Central Bank of Ireland Tracker Mortgage Examination / Irish Examiner 2022", url: "https://www.irishexaminer.com/business/companies/arid-40902482.html" }
    ]},
    { label: "Tax arrangements", badgeClass: "badge-tax", findings: [
      { text: "AIB received a €21 billion state bailout in 2008–2010, paid for by Irish taxpayers. Following the bailout, AIB used a deferred tax asset (DTA) scheme allowing it to offset accumulated losses against future taxable profits — meaning it paid minimal corporation tax for years after its state rescue, despite returning to profitability.", source: "Comptroller and Auditor General Reports 2015–2020", url: "https://audit.gov.ie" }
    ]},
    { label: "Labour & human rights", badgeClass: "badge-labour", findings: [
      { text: "AIB closed over 70 branches across Ireland between 2022 and 2023, disproportionately affecting rural communities and elderly customers who depend on in-person banking services. The closures followed the simultaneous exit of Ulster Bank and KBC from the Irish market, leaving many communities with no local banking access.", source: "Irish Times / FSAI 2023", url: "https://irishtimes.com" }
    ]}
  ],
  alternatives: [
    "Credit unions for personal banking and loans — member-owned, community-based",
    "An Post Money for basic current accounts",
    "Revolut or N26 for digital-first banking"
  ]
},

"bank-of-ireland": {
  type: "company", tags: ["ireland"],
  name: "Bank of Ireland",
  subtitle: "Banking — Republic of Ireland (Euronext: BIRG)",
  corporate: {
    parent: { name: "Bank of Ireland Group plc", note: "Listed Euronext Dublin and London. Irish state previously held majority stake following 2008 bailout — reduced below 14% by 2022.", compliance: "concern", link: null },
    subsidiaries: [
      { name: "Bank of Ireland Mortgages", note: "Largest mortgage lender in Ireland — tracker mortgage violations", compliance: "concern" },
      { name: "Bank of Ireland UK", note: "UK banking operations including post office banking", compliance: "mixed" },
      { name: "New Ireland Assurance", note: "Insurance subsidiary", compliance: "mixed" }
    ],
    shareholders: [
      { name: "Irish State (Dept of Finance)", note: "Reduced from majority to ~<5% stake by 2023 — state sold shares as bank recovered", compliance: "mixed" },
      { name: "Fidelity Investments", note: "~3% institutional stake", compliance: "unclear" },
      { name: "Vanguard Group", note: "~3% stake", compliance: "unclear" }
    ]
  },
  products: [
    { name: "Bank of Ireland mortgages", flags: ["Tracker mortgage scandal — 16,000 accounts", "€100.5m Central Bank fine 2022"] },
    { name: "Business banking", flags: ["SME lending practices scrutinised"] },
    { name: "365 Online banking", flags: ["IT outages affecting customers"] }
  ],
  categories: [
    { label: "Legal violations & fines", badgeClass: "badge-political", findings: [
      { text: "The Central Bank of Ireland fined Bank of Ireland a record €100.5 million in September 2022 for its role in the tracker mortgage scandal — the largest fine ever imposed by the Central Bank at that time. The bank's failings affected 16,000 tracker mortgage customer accounts between August 2004 and June 2022. The Central Bank found Bank of Ireland had failed to warn customers about the consequences of decisions relating to their mortgages.", source: "Central Bank of Ireland September 2022 / Irish Legal News", url: "https://www.irishlegal.com/articles/bank-of-ireland-fined-eur101m-over-tracker-mortgages" },
      { text: "Bank of Ireland was one of five Irish banks — along with AIB, KBC, Permanent TSB, and Ulster Bank — found by the Central Bank to have wrongfully denied tracker mortgage rates to tens of thousands of customers. The industry-wide scandal resulted in total fines of over €174 million and over €737 million in compensation payments to affected customers.", source: "Central Bank of Ireland Tracker Mortgage Examination / Irish Examiner", url: "https://www.irishexaminer.com/business/companies/arid-40902482.html" },
      { text: "The Central Bank fined Bank of Ireland €463,000 in 2021 for breaches of the Consumer Protection Code relating to its handling of tracker mortgage customers — a separate, earlier sanction preceding the larger 2022 fine.", source: "Central Bank of Ireland 2021", url: "https://centralbank.ie" }
    ]},
    { label: "Tax arrangements", badgeClass: "badge-tax", findings: [
      { text: "Bank of Ireland received approximately €4.7 billion in state support during the 2008–2010 financial crisis, including through recapitalisation by the Irish government. The bank subsequently used deferred tax assets to minimise its corporation tax liability for years after returning to profitability, meaning Irish taxpayers who funded the bailout saw minimal tax return on the investment for a prolonged period.", source: "Comptroller and Auditor General / Dept of Finance reports", url: "https://audit.gov.ie" }
    ]},
    { label: "Political & lobbying", badgeClass: "badge-supply", findings: [
      { text: "Bank of Ireland sold Irish mortgage loan portfolios to US vulture funds during the post-crisis period, including loans secured on family homes. Critics including the Irish Council for Civil Liberties argued this facilitated aggressive repossession practices by unregulated entities not subject to the same consumer protection obligations as regulated Irish banks.", source: "Irish Council for Civil Liberties / Irish Times 2018–2022", url: "https://iccl.ie" }
    ]}
  ],
  alternatives: [
    "Credit unions for personal banking — member-owned, community-based",
    "An Post Money for basic current accounts",
    "Revolut or N26 for digital-first banking"
  ]
},

"dunnes-stores": {
  type: "company", tags: ["ireland"],
  name: "Dunnes Stores",
  subtitle: "Retail — Republic of Ireland (privately owned)",
  corporate: {
    parent: { name: "Dunnes Stores (privately held)", note: "Owned by the Dunne family trust. No public financial reporting — one of Ireland's most secretive major businesses. Ireland's largest supermarket by market share since 2018.", compliance: "concern", link: null },
    subsidiaries: [],
    shareholders: [
      { name: "Heffernan family (Margaret Heffernan and family)", note: "Controlling shareholders of the family trust since Ben Dunne Snr's death", compliance: "unclear" },
      { name: "No public shareholders", note: "Unlimited company — no requirement to publish full accounts", compliance: "concern" }
    ]
  },
  products: [
    { name: "Dunnes Stores clothing", flags: ["Uyghur forced labour supply chain — RTÉ Investigates 2025", "No public ethical sourcing policy"] },
    { name: "Dunnes Stores food", flags: ["Refused to provide pricing data to food regulator", "Price gouging allegations raised in Dáil 2025"] },
    { name: "Simply Better range", flags: ["Premium food line — supply chain opacity"] }
  ],
  categories: [
    { label: "Labour & human rights", badgeClass: "badge-labour", findings: [
      { text: "An RTÉ Investigates report in September 2025 found that at least 15 Bangladeshi factories supplying Dunnes Stores had imported cotton fabric from Chinese companies linked to a Uyghur forced labour programme in Xinjiang. Dunnes Stores refused to engage with RTÉ Investigates despite repeated contact attempts including hand-delivered requests to their Dublin head office. It was the only retailer in the investigation with no public position on ethical sourcing.", source: "RTÉ Investigates September 2025", url: "https://www.rte.ie/news/investigations-unit/2025/0924/1534937-suppliers-to-major-irish-retailers-linked-to-forced-labour-cotton" },
      { text: "Dunnes Stores workers represented by Mandate Trade Union held a one-day national strike across 109 branches in April 2015 over the company's use of low-hour contracts (typically 15 hours per week), income insecurity, and the company's continued refusal to recognise or engage with Mandate Trade Union — contrary to Labour Court recommendations.", source: "Mandate Trade Union / Irish Times April 2015", url: "https://irishtimes.com" }
    ]},
    { label: "Corruption & political connections", badgeClass: "badge-political", findings: [
      { text: "The Moriarty Tribunal found that former Taoiseach Charles Haughey intervened with the Revenue Commissioners on behalf of Dunnes Stores owner Ben Dunne, leading to an offer to settle a £38.8 million tax bill for £16 million — a reduction of £22.8 million. Haughey's intervention followed payments of over £2 million from Ben Dunne to Haughey. The Tribunal found this represented 'a real and tangible benefit for Mr Dunne directly consequent on Mr Haughey's actions'.", source: "Moriarty Tribunal Final Report 2011 / Irish Times", url: "https://www.irishtimes.com/business/report-shines-harsh-light-on-dunnes-link-with-haughey-1.1041366" },
      { text: "Revenue Commissioners investigators found in 2001 that invoices issued by construction firm Faxhill Homes to Dunnes Stores, describing work on Dunnes business premises, were in fact for construction work carried out on the private homes of Ben Dunne and former minister Michael Lowry — payments totalling £1.4 million. A Revenue tax inspector told Naas District Court these invoices were part of 'a scheme of tax evasion'.", source: "Irish Times January 2001 / Revenue Commissioners", url: "https://www.irishtimes.com/business/prosecutions-likely-in-dunnes-tax-case-1.269283" }
    ]},
    { label: "Tax arrangements", badgeClass: "badge-tax", findings: [
      { text: "Dunnes Stores operates as an unlimited private company, meaning it is not required to publish full financial accounts — making it one of the least transparent major retailers in Ireland. Despite being Ireland's largest supermarket, Irish consumers have no access to data on its revenues, profits, or tax payments.", source: "Companies Registration Office Ireland / Irish Times", url: "https://cro.ie" },
      { text: "Dunnes Stores resisted placement of multiple zoned but vacant development sites on local authority vacant sites registers, fighting An Bord Pleanála decisions on sites in Dublin and Limerick that were zoned for housing but left undeveloped for years.", source: "Irish Examiner / An Bord Pleanála 2020", url: "https://www.irishexaminer.com/business/arid-30873669.html" }
    ]},
    { label: "Political & lobbying", badgeClass: "badge-supply", findings: [
      { text: "Dunnes Stores refused to provide pricing data to Ireland's food regulator during a 2025 Dáil-noted investigation into alleged supermarket price gouging. Dáil deputies raised the refusal in Oireachtas debate, with one TD stating that Dunnes told the regulator 'No, tough, you are not getting the information.'", source: "Dáil Éireann debates 2025 / Gript", url: "https://gript.ie/dail-hears-of-alleged-price-gouging-by-supermarkets" }
    ]}
  ],
  alternatives: [
    "SuperValu — more transparent Irish supplier sourcing",
    "Local farmers markets for fresh produce",
    "Lidl or Aldi — comparable pricing with more supply chain reporting"
  ]
},

"crh": {
  type: "company", tags: ["ireland"],
  name: "CRH plc",
  subtitle: "Building materials — Ireland (NYSE/Euronext: CRH)",
  corporate: {
    parent: { name: "CRH plc", note: "NYSE/Euronext Dublin. Revenue ~$35bn. World's largest building materials company. Moved primary listing to NYSE in 2023.", compliance: "concern", link: null },
    subsidiaries: [
      { name: "Oldcastle (Americas)", note: "Largest US building materials supplier", compliance: "mixed" },
      { name: "CRH Americas", note: "Construction aggregates, asphalt, cement across US", compliance: "mixed" },
      { name: "CRH Europe", note: "Construction materials across Europe", compliance: "mixed" }
    ],
    shareholders: [
      { name: "Vanguard Group", note: "~10% following NYSE primary listing — largest institutional shareholder", compliance: "unclear" },
      { name: "BlackRock", note: "~7% stake", compliance: "mixed" },
      { name: "Capital Research", note: "~5% stake", compliance: "unclear" }
    ]
  },
  products: [
    { name: "Cement and aggregates", flags: ["High CO₂ emissions — cement is among most carbon-intensive industries", "Quarrying environmental impact"] },
    { name: "Asphalt and paving", flags: ["Cartel investigations in multiple jurisdictions"] },
    { name: "Building products", flags: ["Supply chain labour standards in developing markets"] }
  ],
  categories: [
    { label: "Legal violations & fines", badgeClass: "badge-political", findings: [
      { text: "CRH subsidiary Oldcastle was part of a Department of Justice investigation into bid-rigging and price-fixing in the US ready-mix concrete market. Multiple concrete companies faced criminal charges and civil penalties as part of a broader DOJ investigation into cartel behaviour in the construction materials industry.", source: "US Department of Justice antitrust division", url: "https://justice.gov" },
      { text: "CRH's European operations have faced multiple competition authority investigations across EU member states for alleged price-fixing and market allocation in aggregates, cement, and concrete markets — industries historically prone to cartel behaviour due to regional market concentration.", source: "European Competition Network investigations", url: "https://ec.europa.eu" }
    ]},
    { label: "Tax arrangements", badgeClass: "badge-tax", findings: [
      { text: "CRH moved its primary stock exchange listing from Euronext Dublin to the New York Stock Exchange in 2023, while retaining Irish incorporation. The move was driven by access to US capital markets and higher valuations, but critics noted it reduced CRH's visibility and accountability to Irish regulators and shareholders.", source: "Irish Times / Financial Times 2023", url: "https://irishtimes.com" },
      { text: "CRH structures its global operations through a network of subsidiaries across multiple jurisdictions. As a Dublin-incorporated company operating primarily in the US, its effective tax arrangements benefit from Ireland's 12.5% corporate tax rate on Irish-sourced income while its US operations are subject to US tax arrangements.", source: "CRH Annual Report / Companies Registration Office Ireland", url: "https://cro.ie" }
    ]},
    { label: "Environment", badgeClass: "badge-env", findings: [
      { text: "The cement industry — in which CRH is the world's largest operator — accounts for approximately 8% of global CO₂ emissions. CRH's cement operations are among the most significant contributors to its carbon footprint. EU Emissions Trading System data shows CRH among the largest industrial CO₂ emitters in Ireland and Europe.", source: "EU Emissions Trading System data / Climate Action Tracker", url: "https://ec.europa.eu" }
    ]}
  ],
  alternatives: [
    "Low-carbon construction materials — timber frame, hempcrete where applicable",
    "Specify recycled aggregates in construction projects",
    "Support policy requiring carbon disclosure in public procurement"
  ]
},

"fianna-fail": {
  type: "government", tags: ["ireland"],
  name: "Fianna Fáil",
  subtitle: "Political party — Republic of Ireland (founded 1926)",
  corporate: {
    parent: null,
    subsidiaries: [],
    shareholders: []
  },
  products: [],
  categories: [
    { label: "Corruption & tribunal findings", badgeClass: "badge-political", findings: [
      { text: "The Mahon Tribunal (1997–2012) found that corruption in Irish political and planning life was 'both endemic and systemic' during an era dominated by Fianna Fáil governments. The Tribunal made specific corruption findings against multiple Fianna Fáil politicians and councillors involved in Dublin land rezoning decisions. It found that former minister Ray Burke received corrupt payments from property developers.", source: "Mahon Tribunal Final Report 2012", url: "https://mahontribunal.ie" },
      { text: "The Mahon Tribunal found that former Taoiseach Bertie Ahern failed to truthfully account for over IR£165,000 passing through accounts connected to him during his time as a senior minister and Taoiseach, and rejected his sworn evidence about the sources of those funds. Fianna Fáil subsequently moved to expel him over conduct described as 'unbecoming'. Ahern resigned from the party in 2012.", source: "Mahon Tribunal Final Report 2012 / Irish Times", url: "https://irishtimes.com" },
      { text: "The Moriarty Tribunal found that former Taoiseach Charles Haughey — Fianna Fáil leader from 1979 to 1992 — received over IR£9 million in corrupt payments from businessmen while in office, including from Ben Dunne of Dunnes Stores. The Tribunal found this had 'debased' Irish public life. No criminal convictions resulted.", source: "Moriarty Tribunal Final Report 2011", url: "https://moriarty-tribunal.ie" },
      { text: "The Moriarty Tribunal found that Haughey intervened with the Revenue Commissioners on behalf of Dunnes Stores owner Ben Dunne — who had paid him over £2 million — leading to an offer to settle a £38.8 million tax bill for £16 million, a reduction of £22.8 million. The Tribunal found this was 'directly consequent on Mr Haughey's actions'.", source: "Moriarty Tribunal Final Report 2011 / Irish Times", url: "https://irishtimes.com/business/report-shines-harsh-light-on-dunnes-link-with-haughey-1.1041366" },
      { text: "The Mahon Tribunal found that senior Fianna Fáil cabinet ministers — including current party leader Micheál Martin — mounted a 'sustained and virulent attack' on the Tribunal while it was investigating Bertie Ahern, in an attempt to undermine the inquiry.", source: "Mahon Tribunal Final Report 2012 / An Phoblacht", url: "https://www.anphoblacht.com/contents/1393" }
    ]},
    { label: "Political finance & lobbying", badgeClass: "badge-supply", findings: [
      { text: "In 1993, Fianna Fáil leaders Albert Reynolds and Bertie Ahern wrote to developer Owen O'Callaghan seeking a substantial donation. O'Callaghan was at the time lobbying for state support for a stadium project. He felt compelled to donate IR£80,000 to Fianna Fáil to secure support. The Mahon Tribunal found the payment was inappropriate even though it did not find it corrupt.", source: "Mahon Tribunal Final Report 2012 / Wikipedia", url: "https://en.wikipedia.org/wiki/History_of_Fianna_F%C3%A1il" },
      { text: "The source of less than 9% of donations to Irish political parties between 2019 and 2022 was publicly disclosed, according to Transparency International Ireland's 2024 report. Fianna Fáil, as one of the two main governing parties, operates under ethics legislation described by Transparency International as 'hopelessly outdated'.", source: "Transparency International Ireland 2024", url: "https://transparency.ie" }
    ]},
    { label: "State agency scandals", badgeClass: "badge-housing", findings: [
      { text: "Fianna Fáil-led governments oversaw the Celtic Tiger era property bubble and the subsequent 2008 banking collapse, which required a €64 billion bank bailout paid for by Irish taxpayers. The government's blanket bank guarantee of September 2008 — covering all bank liabilities including bondholders — was described by economists as one of the most expensive bank rescues in history relative to GDP.", source: "IMF / Department of Finance Ireland / Comptroller and Auditor General", url: "https://audit.gov.ie" },
      { text: "The Golfgate scandal (August 2020): Fianna Fáil deputy leader Dara Calleary resigned after attending an 81-person golf society dinner during Level 3 COVID restrictions that limited indoor gatherings to 50 people. Calleary had been appointed Agriculture Minister just weeks earlier.", source: "RTÉ News / The Journal August 2020", url: "https://thejournal.ie" }
    ]}
  ],
  alternatives: []
},

"nestle": {
  type: "company", tags: [],
  name: "Nestlé",
  subtitle: "Food & Beverage — Switzerland (SIX: NESN)",
  corporate: {
    parent: { name: "Nestlé S.A.", note: "SIX Swiss Exchange: NESN. Revenue ~$101bn. World's largest packaged food company. HQ Vevey, Switzerland.", compliance: "concern", link: null },
    subsidiaries: [
      { name: "Nestlé Ireland", note: "Irish operations — distribution and sales", compliance: "mixed" },
      { name: "Nestlé Waters (Perrier, Vittel, S.Pellegrino)", note: "Nestlé Waters France admitted in 2024 to illegally treating mineral water brands with unauthorised purification methods for years", compliance: "concern" },
      { name: "Nespresso", note: "Coffee capsule brand — single-use plastic waste concerns", compliance: "concern" },
      { name: "Purina", note: "Pet food — acquired 2001", compliance: "mixed" },
      { name: "KitKat / Smarties / Aero", note: "Confectionery — cocoa supply chain child labour concerns", compliance: "concern" }
    ],
    shareholders: [
      { name: "Vanguard Group", note: "~3% institutional stake", compliance: "unclear" },
      { name: "BlackRock", note: "~3% stake", compliance: "mixed" },
      { name: "Nestlé S.A. (own shares)", note: "~10% treasury shares held by company", compliance: "unclear" }
    ]
  },
  products: [
    { name: "Nestlé infant formula (NAN, Cerelac)", flags: ["WHO Code violations documented since 1977 — ongoing boycott", "Added sugar in products sold in lower-income countries — Public Eye/IBFAN 2024", "January 2026 recall across 60+ countries for contamination"] },
    { name: "Perrier / Vittel / Contrex", flags: ["Nestlé Waters France admitted illegal purification of mineral water 2024", "Groundwater over-extraction documented globally"] },
    { name: "KitKat / confectionery", flags: ["Cocoa supply chain child labour — US Supreme Court case 2021"] },
    { name: "Nestlé Pure Life bottled water", flags: ["Ranked top 3 global plastic polluter 2018–2022 by Break Free From Plastic"] }
  ],
  categories: [
    { label: "Legal violations & court findings", badgeClass: "badge-political", findings: [
      { text: "Six individuals from Mali filed a US Supreme Court case — Nestlé USA v. Doe (2021) — alleging they were trafficked as children into the Ivory Coast to work as slaves harvesting cocoa for Nestlé and Cargill. The US 9th Circuit Court of Appeals had found in 2018 that Nestlé's payments to cocoa farmers amounted to kickbacks that maintained child slave labour. The Supreme Court ultimately dismissed the case on jurisdictional grounds without ruling on the merits of the child slavery allegations.", source: "US Supreme Court / Council on Foreign Relations June 2021", url: "https://www.cfr.org/article/supreme-court-denied-child-labor-claim-against-us-firms-what-know" },
      { text: "Nestlé Waters France admitted in early 2024 to illegally treating its natural mineral water brands — including Perrier, Vittel, and Contrex — with UV light and carbon filters, which are prohibited under French regulations for mineral water. The company had concealed these practices from authorities for several years. French authorities opened an investigation.", source: "IBFAN / Le Monde 2024", url: "https://www.ibfan.org/cop-30-climate-crisis-intensifies-water-scarcity-nestles-water-scandals/" },
      { text: "Activist groups filed a legal complaint against Nestlé at the European Commission in November 2023 for claiming its bottles are '100% recycled' and '100% recyclable' — claims the groups alleged constituted misleading greenwashing under EU consumer law.", source: "CorpWatch / Break Free From Plastic November 2023", url: "https://www.corpwatch.org/company/nestle" },
      { text: "In January 2026, Nestlé recalled infant formula products across more than 60 countries following a safety alert over possible cereulide contamination. Six babies became ill. French authorities opened an investigation into whether two infant deaths were connected to the contamination. Austria's Health Ministry described it as the largest recall in Nestlé's history, affecting over 800 products from more than 10 factories.", source: "IBFAN January 2026", url: "https://www.ibfan.org/nestles-credibility-questioned-recall-2026/" }
    ]},
    { label: "Labour & human rights", badgeClass: "badge-labour", findings: [
      { text: "The Nestlé infant formula boycott has been ongoing since 1977, when the company was branded 'The Baby Killer' for aggressively marketing formula to mothers in low-income countries — including paying healthcare workers to promote it — knowing that many mothers lacked access to clean water to safely prepare it. A 2018 National Bureau of Economic Research study estimated that Nestlé's formula marketing contributed to approximately 10.87 million infant deaths between 1960 and 2015 in low and middle-income countries.", source: "Wikipedia / NBER 2018 / Lakota People's Law Project", url: "https://en.wikipedia.org/wiki/1977_Nestl%C3%A9_boycott" },
      { text: "A 2024 investigation by Swiss nonprofit Public Eye and the International Baby Food Action Network (IBFAN) found that Nestlé adds significantly more sugar to baby cereals and infant formula sold in lower and middle-income countries than in products sold in Europe and wealthy markets. Nestlé defended the practice by citing local regulatory standards.", source: "Public Eye / IBFAN April 2024 / Wikipedia", url: "https://en.wikipedia.org/wiki/Controversies_of_Nestl%C3%A9" }
    ]},
    { label: "Environment", badgeClass: "badge-env", findings: [
      { text: "Break Free From Plastic ranked Nestlé among the top three worst global plastic polluters for five consecutive years between 2018 and 2022, based on branded plastic waste found in environmental audits across dozens of countries.", source: "Break Free From Plastic / CorpWatch 2022", url: "https://www.corpwatch.org/company/nestle" },
      { text: "Nestlé has faced documented protests, boycotts, blockades, and legal actions in Canada, Michigan, California, Pakistan, and Mexico over its extraction of groundwater for bottled water operations. In Michigan, a Nestlé subsidiary extracted up to 576,000 gallons of groundwater per day while paying just $200 per year to the state — the same week Michigan stopped providing free bottled water to Flint residents who still could not drink from the tap.", source: "Lakota People's Law Project / IBFAN", url: "https://lakotalaw.org/news/2021-01-13/nestle-pledge-update" }
    ]}
  ],
  alternatives: [
    "Tap water instead of Nestlé bottled water brands",
    "Local and independent coffee brands instead of Nespresso",
    "Fair trade certified chocolate — Tony's Chocolonely, Divine Chocolate",
    "Breastfeeding support organisations for infant nutrition information"
  ]
},

"coca-cola": {
  type: "company", tags: [],
  name: "Coca-Cola",
  subtitle: "Food & Beverage — United States (NYSE: KO)",
  corporate: {
    parent: { name: "The Coca-Cola Company", note: "NYSE: KO. Revenue ~$46bn. World's largest beverage company. HQ Atlanta, Georgia.", compliance: "concern", link: null },
    subsidiaries: [
      { name: "Coca-Cola HBC Ireland", note: "Irish bottling and distribution partner", compliance: "mixed" },
      { name: "Innocent Drinks", note: "Acquired majority stake 2009 — now majority owned by Coca-Cola", compliance: "mixed" },
      { name: "Costa Coffee", note: "Acquired 2019 for $5.1bn", compliance: "mixed" },
      { name: "Sprite, Fanta, Powerade, Schweppes", note: "Coca-Cola brand portfolio", compliance: "mixed" }
    ],
    shareholders: [
      { name: "Berkshire Hathaway (Warren Buffett)", note: "~9.3% — largest shareholder", compliance: "mixed" },
      { name: "Vanguard Group", note: "~8% institutional stake", compliance: "unclear" },
      { name: "BlackRock", note: "~6% stake", compliance: "mixed" }
    ]
  },
  products: [
    { name: "Coca-Cola / Diet Coke", flags: ["World's #1 plastic polluter 5 years running — Break Free From Plastic", "IRS $3.3bn tax dispute ongoing", "Sugar industry research funding manipulation documented"] },
    { name: "Sprite / Fanta", flags: ["Plastic pollution — branded waste found globally"] },
    { name: "Dasani bottled water", flags: ["Groundwater extraction controversies"] },
    { name: "Powerade / sports drinks", flags: ["Sugar content and marketing to children"] }
  ],
  categories: [
    { label: "Legal violations & court findings", badgeClass: "badge-political", findings: [
      { text: "The US Internal Revenue Service issued Coca-Cola a $3.3 billion tax bill in 2020 following an audit of its transfer pricing arrangements — how it allocates income between its US parent and foreign subsidiaries. Coca-Cola contested the bill. The IRS alleged that Coca-Cola had understated its US taxable income by shifting profits to lower-tax foreign affiliates through royalty arrangements. As of 2024 the dispute remained unresolved.", source: "IRS / US Tax Court proceedings 2020–2024", url: "https://justice.gov" },
      { text: "Coca-Cola faced documented allegations of paramilitary violence against trade union members at its bottling plants in Colombia. The International Labour Rights Fund filed a federal lawsuit in the US in 2001 alleging that Coca-Cola's Colombian bottler hired paramilitary groups to threaten, torture, and kill union leaders at its plants. Several union leaders at Coca-Cola bottling facilities were murdered. Coca-Cola denied the allegations and the case was ultimately dismissed on jurisdictional grounds.", source: "International Labour Rights Fund / The Guardian 2001–2006", url: "https://theguardian.com" }
    ]},
    { label: "Environment", badgeClass: "badge-env", findings: [
      { text: "Break Free From Plastic ranked Coca-Cola as the world's number one plastic polluter for five consecutive years from 2019 to 2023, based on global branded plastic waste audits conducted across more than 50 countries. Coca-Cola produces approximately 3 million tonnes of plastic packaging per year.", source: "Break Free From Plastic Annual Audit 2019–2023", url: "https://breakfreefromplastic.org" },
      { text: "Activist groups filed a legal complaint against Coca-Cola at the European Commission in November 2023 alongside Nestlé and others, alleging misleading claims about plastic recyclability that constituted greenwashing under EU consumer protection law.", source: "CorpWatch / Break Free From Plastic November 2023", url: "https://www.corpwatch.org/company/nestle" }
    ]},
    { label: "Labour & human rights", badgeClass: "badge-labour", findings: [
      { text: "Coca-Cola, PepsiCo, and Nestlé were identified in a 2020 investigation as sourcing sugar from Mitr Phol — the world's fourth-largest sugar producer — which had violently displaced approximately 3,000 people from five villages in Cambodia between 2008 and 2009 to clear land for sugarcane plantations. A Thai civil court case was filed on behalf of the displaced community.", source: "CorpWatch / Nonprofit Quarterly 2020", url: "https://www.corpwatch.org/company/nestle" }
    ]},
    { label: "Tax arrangements", badgeClass: "badge-tax", findings: [
      { text: "The IRS's $3.3 billion tax dispute with Coca-Cola centres on alleged manipulation of transfer pricing — the internal pricing of transactions between Coca-Cola's US headquarters and its foreign subsidiaries — to shift profits to lower-tax jurisdictions. The case is one of the largest transfer pricing disputes in US tax history.", source: "IRS / Wall Street Journal 2020", url: "https://wsj.com" }
    ]}
  ],
  alternatives: [
    "Tap water — Ireland's tap water quality is among the highest in Europe",
    "Local Irish mineral water brands with smaller environmental footprint",
    "Cawston Press, Belvoir, or Folkington's for soft drinks",
    "Independent coffee shops instead of Costa Coffee"
  ]
},

"mcdonalds": {
  type: "company", tags: [],
  name: "McDonald's",
  subtitle: "Food & Beverage — United States (NYSE: MCD)",
  corporate: {
    parent: { name: "McDonald's Corporation", note: "NYSE: MCD. Revenue ~$25bn. Operates in 100+ countries. HQ Chicago, Illinois.", compliance: "concern", link: null },
    subsidiaries: [
      { name: "McDonald's Restaurants of Ireland", note: "Irish operations — 101 restaurants. Mix of corporate and franchise.", compliance: "mixed" },
      { name: "McDonald's UK & Ireland", note: "Regional operating company", compliance: "mixed" }
    ],
    shareholders: [
      { name: "Vanguard Group", note: "~8% — largest institutional shareholder", compliance: "unclear" },
      { name: "BlackRock", note: "~6% stake", compliance: "mixed" },
      { name: "State Street Global Advisors", note: "~4% stake", compliance: "unclear" }
    ]
  },
  products: [
    { name: "McDonald's restaurants (franchised)", flags: ["Systematic wage theft documented by US DOL across multiple states", "Franchise model used to distance corporate from labour liability"] },
    { name: "McDonald's corporate restaurants", flags: ["Workers forced to wait unpaid until store reached sales targets — court findings", "Overtime violations documented"] },
    { name: "Happy Meal / children's marketing", flags: ["Marketing junk food to children — EU scrutiny"] }
  ],
  categories: [
    { label: "Legal violations & labour", badgeClass: "badge-labour", findings: [
      { text: "The US Department of Labor has found McDonald's franchisees guilty of wage theft on multiple documented occasions across multiple states. In one case the DOL ordered a Pennsylvania franchisee to pay $211,000 in back wages to 291 employees. In another, franchisees in New York were fined approximately $500,000 for underpaying workers. McDonald's franchise owners were also found to have shaved hours from employee time cards, required employees to work off the clock, and failed to pay legally-required overtime.", source: "US Department of Labor / CorpWatch / Jobs With Justice", url: "https://www.corpwatch.org/article/fast-food-workers-file-lawsuit-against-mcdonalds-alleged-wage-theft" },
      { text: "Seven simultaneous class action lawsuits were filed against McDonald's and its franchisees in California, Michigan, and New York in 2014 on behalf of over 25,000 workers, alleging systematic wage theft including failure to pay for all hours worked, improper deductions, and denial of legally-required meal and rest breaks. McDonald's financial tracking software sent alerts to franchise managers when labour costs exceeded a set percentage of sales, allegedly prompting managers to prevent workers from clocking in.", source: "Vedder Price legal analysis / CorpWatch 2014", url: "https://www.vedderprice.com/mcdonalds-workers-sue-alleged-wage-hour-violations" },
      { text: "McDonald's franchise owners, acting through a front group called 'New Yorkers for Local Businesses', spent nearly half a million dollars lobbying against a 2024 New York state bill that would have strengthened workers' ability to recover stolen wages. Public records showed the group was led by a McDonald's corporate vice president and individuals who collectively owned over 50 McDonald's franchise locations — at least one of whom had previously been sued twice for wage theft.", source: "New York Focus / Adirondack Daily Enterprise May 2024", url: "https://nysfocus.com/2024/05/09/mcdonalds-lobbying-empire-act-wage-theft" }
    ]},
    { label: "Tax arrangements", badgeClass: "badge-tax", findings: [
      { text: "The European Commission opened a state aid investigation into McDonald's in 2015, examining whether Luxembourg had granted McDonald's illegal tax benefits through advance tax rulings that allowed the company to pay no tax in Luxembourg or the US on hundreds of millions in royalties routed through Luxembourg. The investigation was closed in 2018 after the Commission concluded Luxembourg had not broken EU rules — though it criticised the tax arrangements as highlighting gaps in EU tax law.", source: "European Commission 2015–2018", url: "https://ec.europa.eu" }
    ]},
    { label: "Environment", badgeClass: "badge-env", findings: [
      { text: "McDonald's is one of the world's largest users of single-use plastic packaging. The company has faced sustained pressure from environmental groups over plastic straws, cups, and packaging. In 2021 McDonald's was named in the top 10 global plastic polluters in the Break Free From Plastic global brand audit.", source: "Break Free From Plastic 2021", url: "https://breakfreefromplastic.org" }
    ]}
  ],
  alternatives: [
    "Local independent cafés and restaurants",
    "Supermac's — Irish-owned fast food with domestic economic benefit",
    "Home cooking — significantly cheaper and healthier"
  ]
},

"primark": {
  type: "company", tags: ["ireland"],
  name: "Primark (Penneys in Ireland)",
  subtitle: "Fashion Retail — Ireland (subsidiary of Associated British Foods)",
  corporate: {
    parent: { name: "Associated British Foods plc", note: "LSE: ABF. Primark accounts for ~40% of ABF revenue. HQ Dublin (Primark) / London (ABF).", compliance: "concern", link: null },
    subsidiaries: [
      { name: "Primark Stores Ltd", note: "UK and international operations", compliance: "concern" },
      { name: "Penneys (Ireland)", note: "Irish trading name — same company", compliance: "concern" }
    ],
    shareholders: [
      { name: "Wittington Investments (Weston family)", note: "~54% of ABF — Primark's controlling shareholder is the Weston family, one of Canada's wealthiest families", compliance: "unclear" },
      { name: "Vanguard Group", note: "~3% of ABF institutional stake", compliance: "unclear" }
    ]
  },
  products: [
    { name: "Primark / Penneys clothing", flags: ["Rana Plaza supply chain link 2013", "Channel 4 below-minimum-wage Leicester investigation 2021", "CMA greenwashing finding 2023", "Fashion Transparency Index — consistently low score"] },
    { name: "Primark homeware and accessories", flags: ["Supply chain labour standards concerns"] }
  ],
  categories: [
    { label: "Labour & human rights", badgeClass: "badge-labour", findings: [
      { text: "The Rana Plaza factory complex in Bangladesh collapsed on 24 April 2013, killing 1,138 garment workers and injuring over 2,500. It remains the deadliest garment factory disaster in history. Labels from multiple fashion retailers were found in the rubble, including Primark. Primark acknowledged sourcing from a supplier at the site and paid compensation to affected workers and families, but critics including Labour Behind the Label noted that compensation arrangements took years and were inadequate for many families.", source: "Labour Behind the Label / Guardian 2013–2015", url: "https://labourbehindthelabel.net" },
      { text: "A Channel 4 News investigation broadcast in May 2021 found garment workers in Leicester producing clothes for online fashion brands being paid as little as £3.50 per hour — less than half the UK minimum wage of £8.72. While the investigation focused primarily on online brands, Leicester had been a known hub of below-minimum-wage garment production supplying fast fashion retailers including those sourcing from Primark's supply chain tier.", source: "Channel 4 News May 2021", url: "https://channel4.com" }
    ]},
    { label: "Environmental & greenwashing", badgeClass: "badge-env", findings: [
      { text: "The UK Competition and Markets Authority named Primark in its 2023 investigation into greenwashing in the fashion sector, examining whether Primark's sustainability claims — including its 'Primark Cares' branding — were misleading to consumers. The CMA found that vague and unsubstantiated environmental claims across the fashion industry breached consumer protection law.", source: "UK Competition and Markets Authority 2023", url: "https://cma.gov.uk" },
      { text: "Primark has consistently received among the lowest scores on the Fashion Transparency Index — an annual ranking of major fashion brands' disclosure of their supply chain, policies, and social and environmental impact. In 2023 Primark scored 23% out of 100, placing it in the lower tier of the index.", source: "Fashion Revolution Fashion Transparency Index 2023", url: "https://fashionrevolution.org" }
    ]},
    { label: "Tax arrangements", badgeClass: "badge-tax", findings: [
      { text: "Primark's parent company Associated British Foods uses Ireland as its headquarters for the Primark business, benefiting from Ireland's 12.5% corporate tax rate. ABF's 2023 annual report shows Primark's profits are primarily reported through its Dublin-headquartered entities.", source: "Associated British Foods Annual Report 2023 / Companies Registration Office Ireland", url: "https://abf.co.uk" }
    ]}
  ],
  alternatives: [
    "Charity shops / second-hand — Oxfam, NCBI, SVP shops across Ireland",
    "Depop, Vinted, or Thriftify for second-hand fashion online",
    "Ethical brands: People Tree, Patagonia, Thought Clothing",
    "Buy less, buy better — extend the life of existing clothing"
  ]
},

"zara": {
  type: "company", tags: [],
  name: "Zara (Inditex)",
  subtitle: "Fashion Retail — Spain (BME: ITX)",
  corporate: {
    parent: { name: "Inditex S.A.", note: "BME: ITX. Revenue ~€36bn. World's largest fashion retailer. HQ Arteixo, Spain. Amancio Ortega (founder) controls ~59% via Pontegadea.", compliance: "concern", link: null },
    subsidiaries: [
      { name: "Zara", note: "Flagship brand — accounts for ~70% of Inditex revenue", compliance: "concern" },
      { name: "Pull&Bear", note: "Youth fashion brand", compliance: "mixed" },
      { name: "Massimo Dutti", note: "Premium brand", compliance: "mixed" },
      { name: "Bershka", note: "Teen fashion brand", compliance: "mixed" },
      { name: "Stradivarius", note: "Women's fashion brand", compliance: "mixed" }
    ],
    shareholders: [
      { name: "Pontegadea Inversiones (Amancio Ortega)", note: "~59% controlling stake — Ortega is one of the world's wealthiest individuals", compliance: "unclear" },
      { name: "Vanguard Group", note: "~3% institutional stake", compliance: "unclear" },
      { name: "BlackRock", note: "~3% stake", compliance: "mixed" }
    ]
  },
  products: [
    { name: "Zara clothing", flags: ["Brazilian court found conditions analogous to slavery in supply chain 2011", "Cerrado deforestation-linked cotton — Earthsight 2024", "Refuses to publish factory supplier list — outlier among major retailers"] },
    { name: "Zara Home", flags: ["Supply chain opacity"] }
  ],
  categories: [
    { label: "Legal violations & court findings", badgeClass: "badge-political", findings: [
      { text: "Brazilian labour inspectors raided workshops in São Paulo in 2011 and found workers — including undocumented Bolivian migrants — sewing Zara clothes in conditions classified as 'analogous to slavery'. Workers were living in cramped accommodation attached to the workshops, unable to leave freely, and earning below minimum wage. A Brazilian court subsequently found Zara Brasil liable and fined it for 48 separate labour infractions. Zara Brasil challenged the findings in court but ultimately lost.", source: "Mind the Gap NGO / Human Trafficking Search legal analysis", url: "https://humantraffickingsearch.org/resource/from-moral-responsibility-to-legal-liability-modern-day-slavery-conditions-in-the-global-garment-supply-chain-and-the-need-to-strengthen-regulatory-frameworks-the-case-of-inditex-zara-in-brazil/" },
      { text: "Zara Brasil was fined again in 2015 — this time for a discriminatory labour practice. After the 2011 slavery scandal, the company terminated almost all contracts with workshops that employed immigrants, whether legal or not, rather than improving conditions for affected workers. Brazil's Ministry of Labour and Employment found this constituted unlawful discrimination.", source: "Mind the Gap NGO 2015", url: "https://www.mindthegap.ngo/harmful-strategies/constructing-deniability/hiding-behind-complex-supply-chains/zara-fights-sanctions-for-forced-labour-in-brazilian-supply-chain/" }
    ]},
    { label: "Supply chain & environment", badgeClass: "badge-supply", findings: [
      { text: "A 2024 investigation by UK NGO Earthsight, using satellite images, court rulings, and shipment records, found that cotton from Brazilian producers with documented histories of illegal deforestation in the Cerrado — one of the world's most biodiverse savannas — had entered Inditex's supply chain. The Cerrado saw a 43% increase in deforestation year-on-year in 2023. The cotton carried Better Cotton certification, which Earthsight found to be inadequate at preventing tainted supply.", source: "Earthsight / Mongabay April 2024", url: "https://news.mongabay.com/2024/04/report-links-hm-and-zara-to-major-environmental-damage-in-biodiverse-cerrado/" },
      { text: "Inditex is an outlier among major global fashion retailers in refusing to publish a full factory supplier list — meaning it is impossible for consumers, investors, or regulators to independently verify its supply chain. Rivals including H&M, M&S, Hugo Boss, Nike, Adidas, and Primark all publish detailed supplier lists including factory names and addresses. A coalition of 20 institutional investors managing €6.58 trillion in assets formally requested disclosure in 2024.", source: "Fast Company / Reuters March 2024", url: "https://www.fastcompany.com/91054702/zara-inditex-investors-supply-chain" }
    ]},
    { label: "Tax arrangements", badgeClass: "badge-tax", findings: [
      { text: "Inditex channels royalties from its Zara and other brands through subsidiaries in the Netherlands and Ireland, reducing its effective tax rate below Spain's standard corporate tax rate. EU tax justice campaigners have identified Inditex's IP royalty structure as an example of profit-shifting within the EU single market.", source: "Tax Justice Network / EU Commission reports", url: "https://taxjustice.net" }
    ]}
  ],
  alternatives: [
    "Second-hand / charity shops — Oxfam, NCBI, SVP across Ireland",
    "Vinted, Depop, or Thriftify for second-hand fashion online",
    "Ethical brands: People Tree, Patagonia, Thought Clothing",
    "Slow fashion — buy less, choose quality, keep longer"
  ]
},

"hm": {
  type: "company", tags: [],
  name: "H&M",
  subtitle: "Fashion Retail — Sweden (Nasdaq Stockholm: HM-B)",
  corporate: {
    parent: { name: "H&M Hennes & Mauritz AB", note: "Nasdaq Stockholm: HM-B. Revenue ~SEK 236bn (~€21bn). Second largest fashion retailer globally. HQ Stockholm.", compliance: "concern", link: null },
    subsidiaries: [
      { name: "H&M", note: "Core brand — 4,000+ stores globally", compliance: "concern" },
      { name: "COS", note: "Premium fashion brand", compliance: "mixed" },
      { name: "&Other Stories", note: "Women's fashion brand", compliance: "mixed" },
      { name: "Monki", note: "Youth fashion brand", compliance: "mixed" },
      { name: "Weekday", note: "Denim and fashion brand", compliance: "mixed" }
    ],
    shareholders: [
      { name: "Stefan Persson family (Ramsbury Invest)", note: "~44% controlling stake — founding family", compliance: "unclear" },
      { name: "Vanguard Group", note: "~4% institutional stake", compliance: "unclear" },
      { name: "BlackRock", note: "~3% stake", compliance: "mixed" }
    ]
  },
  products: [
    { name: "H&M clothing", flags: ["Greenwashing class actions — Conscious Choice collection data falsified", "Cerrado deforestation-linked cotton — Earthsight 2024", "Fashion Transparency Index — improving but below average"] },
    { name: "H&M Conscious Choice collection", flags: ["Sustainability profiles contained falsified data — Quartz 2022", "Multiple class action lawsuits in US federal courts"] }
  ],
  categories: [
    { label: "Legal violations & greenwashing", badgeClass: "badge-env", findings: [
      { text: "A June 2022 investigation by Quartz found that H&M's 'Sustainability Profiles' — environmental scorecards displayed on product pages — contained falsified data. In one documented case, a sustainability profile claimed a dress used 20% less water on average in production, when the actual data showed it used 20% more water. H&M removed the scorecards from its websites following publication of the investigation.", source: "Quartz June 2022 / ClassAction.org", url: "https://www.classaction.org/news/greenwashing-class-action-alleges-handm-sustainability-profiles-contain-falsified-information" },
      { text: "Multiple class action lawsuits were filed against H&M in US federal courts in 2022 alleging that its 'Conscious Choice' sustainable clothing line constituted greenwashing — misleading consumers into paying premium prices for products that were not meaningfully more sustainable. The lawsuits cited the falsified sustainability profiles and alleged that products described as made from 'sustainable materials' contained up to 100% polyester, which does not biodegrade and sheds toxic microfibers.", source: "ClassAction.org / Business and Human Rights Centre 2022", url: "https://www.business-humanrights.org/en/latest-news/usa-hm-faces-greenwashing-class-action-lawsuit-over-alleged-misleading-false-marketing-of-sustainable-clothing-line/" },
      { text: "The Norwegian Consumer Authority ruled in 2022 that H&M's Conscious Choice marketing was in breach of Norwegian marketing law, finding that the sustainability claims were vague and unsubstantiated and therefore misleading to consumers.", source: "Norwegian Consumer Authority 2022", url: "https://www.forbrukertilsynet.no" }
    ]},
    { label: "Supply chain & environment", badgeClass: "badge-supply", findings: [
      { text: "A 2024 investigation by UK NGO Earthsight found that nearly a million tonnes of cotton from Brazilian producers with documented histories of illegal deforestation in the Cerrado biome had entered H&M's supply chain. The two producers — SLC Agrícola and Grupo Horita — had been fined over 20 times by Brazil's environmental agency IBAMA, with fines totalling $4.5 million between 2002 and 2019. The cotton carried Better Cotton certification despite these violations.", source: "Earthsight / Mongabay April 2024", url: "https://news.mongabay.com/2024/04/report-links-hm-and-zara-to-major-environmental-damage-in-biodiverse-cerrado/" }
    ]},
    { label: "Labour & human rights", badgeClass: "badge-labour", findings: [
      { text: "H&M has faced repeated documented reports of garment workers in Bangladesh, Cambodia, and Myanmar earning below living wage in factories in its supply chain. A 2021 report by the Clean Clothes Campaign found that wages paid to workers in H&M's supply chain had not kept pace with cost of living increases, leaving workers worse off in real terms than in previous years.", source: "Clean Clothes Campaign 2021", url: "https://cleanclothes.org" }
    ]}
  ],
  alternatives: [
    "Second-hand / charity shops — Oxfam, NCBI, SVP across Ireland",
    "Vinted, Depop, or Thriftify for second-hand fashion online",
    "Ethical brands: People Tree, Patagonia, Thought Clothing",
    "Buy less, buy better — extend the life of existing clothing"
  ]
},

"shein": {
  type: "company", tags: [],
  name: "Shein",
  subtitle: "Fashion Retail — China (privately held, Singapore-incorporated)",
  corporate: {
    parent: { name: "Shein International (Singapore)", note: "Private Chinese company incorporated in Singapore. Estimated value ~$66bn. Founded by Chris Xu. Subject to Chinese national security law through ownership structure.", compliance: "concern", link: null },
    subsidiaries: [
      { name: "Shein UK", note: "UK arm — breached UK company law by failing to disclose ownership structure 2024", compliance: "concern" },
      { name: "Shein Ireland / EU operations", note: "European operations — subject to EU consumer and product safety laws", compliance: "concern" }
    ],
    shareholders: [
      { name: "Chris Xu (founder)", note: "Majority owner", compliance: "concern" },
      { name: "General Atlantic", note: "Private equity investor", compliance: "unclear" },
      { name: "Tiger Global Management", note: "Investor", compliance: "unclear" }
    ]
  },
  products: [
    { name: "Shein clothing", flags: ["Child labour confirmed in supply chain — self-disclosed 2023", "Workers paid 3 cents per garment — Channel 4 / BBC investigation", "75-hour working weeks documented in supplier factories", "Mass copyright infringement lawsuits from independent designers"] },
    { name: "Shein accessories and homeware", flags: ["Products found to contain hazardous chemicals above legal limits — CBC/CTV 2021"] }
  ],
  categories: [
    { label: "Legal violations & supply chain", badgeClass: "badge-political", findings: [
      { text: "Shein disclosed in its 2023 sustainability report that it found two confirmed cases of child labour in its supply chain between Q1 and Q3 2023. The company had previously only disclosed the percentage of audits finding minors, which stood at 1.8% of audits in 2021 and 0.3% in 2022. Upon discovery, Shein gave the offending suppliers 30 days to remediate — a policy it subsequently changed to immediate termination after the cases became public.", source: "Shein 2023 Sustainability Report / FashionUnited August 2024", url: "https://fashionunited.uk/news/business/shein-finds-cases-of-child-labour-and-forced-labour-in-supply-chain/2024082677274" },
      { text: "A BBC investigation found workers at Shein's Chinese supplier factories working up to 75 hours per week — well above China's legal limit of 44 hours — and being paid on a piecework basis at rates that worked out to below living wage standards. The investigation found workers earning approximately 3 cents per garment completed.", source: "BBC Panorama / Business and Human Rights Centre", url: "https://www.business-humanrights.org/en/latest-news/china-shein-discloses-two-child-labour-cases-in-supply-chain-reports-temporary-supplier-suspensions-policy-tightening-ahead-of-potential-ipo/" },
      { text: "Shein's UK arm breached UK company law in 2024 by failing to disclose its ownership structure — a legal requirement for companies registered in the UK. The breach was identified ahead of Shein's planned London IPO and threatened to disrupt its listing plans.", source: "Retail Gazette / Euronews March 2024", url: "https://www.retailgazette.co.uk/blog/2024/03/zara-inditex-publish-supply-chain/" },
      { text: "Senior Shein executives appeared before the UK Parliament's Business and Trade Committee in January 2025 and repeatedly refused to answer questions about whether Shein's products contain cotton from China — raising concerns about potential links to Uyghur forced labour in Xinjiang. One MP described the evidence given as 'ridiculous'. Shein's senior lawyer declined to confirm or deny the origin of the cotton used in its products.", source: "Euronews / UK Parliament January 2025", url: "https://www.euronews.com/business/2025/01/08/shein-execs-decline-to-shine-light-over-forced-labour-claims" }
    ]},
    { label: "Consumer safety", badgeClass: "badge-supply", findings: [
      { text: "A 2021 investigation by Canadian broadcasters CBC and CTV found that Shein clothing tested positive for hazardous chemicals including lead at levels exceeding Canadian and EU legal limits. A children's jacket was found to contain lead at 20 times the legal limit for children's products in Canada.", source: "CBC / CTV News 2021", url: "https://cbc.ca" }
    ]},
    { label: "Tax & business model", badgeClass: "badge-tax", findings: [
      { text: "Shein built its rapid growth model partly on the de minimis trade rule, which in the US exempted individual shipments valued under $800 from import duties. Critics including bipartisan US congressional leaders argued this gave Shein an unfair competitive advantage over US retailers and was being exploited at massive scale — Shein ships millions of individual packages directly to US consumers to avoid tariffs.", source: "US Congress bipartisan letter / AP News 2023", url: "https://apnews.com" }
    ]}
  ],
  alternatives: [
    "Second-hand / charity shops — Oxfam, NCBI, SVP across Ireland",
    "Vinted, Depop, or Thriftify for second-hand fashion online",
    "Penneys / Primark for budget fashion — Irish-headquartered, more regulatory accountability",
    "Support independent Irish clothing designers"
  ]
},

"fine-gael": {
  type: "government", tags: ["ireland"],
  name: "Fine Gael",
  subtitle: "Political party — Republic of Ireland (founded 1933)",
  corporate: {
    parent: null,
    subsidiaries: [],
    shareholders: []
  },
  products: [],
  categories: [
    { label: "Corruption & tribunal findings", badgeClass: "badge-political", findings: [
      { text: "The Mahon Tribunal found that the corruption in Irish planning was 'both endemic and systemic' during an era that included Fine Gael-led governments. Tribunal findings of corruption or improper conduct were made against figures associated with Fine Gael as well as other parties, including councillors involved in Dublin rezoning decisions in the 1990s.", source: "Mahon Tribunal Final Report 2012", url: "https://mahontribunal.ie" },
      { text: "Fine Gael minister Alan Shatter resigned in May 2014 following publication of the Guerin Report, which criticised him for failing to properly investigate whistleblower Sergeant Maurice McCabe's allegations of Garda malpractice. Shatter had earlier wrongly accused McCabe of refusing to co-operate with an inquiry — a false claim for which McCabe sought but did not receive an apology.", source: "Guerin Report May 2014 / Wikipedia", url: "https://en.wikipedia.org/wiki/Garda_whistleblower_scandal" },
      { text: "Fine Gael Tánaiste Frances Fitzgerald resigned from Cabinet in November 2017 after it emerged she had been aware since 2015 of an aggressive legal strategy by Garda management to use a 'serious criminal complaint' against whistleblower Sergeant Maurice McCabe at a Commission of Inquiry — but had not intervened. Three emails from 2015 confirmed she had been informed significantly earlier than she had indicated.", source: "Irish Times November 2017", url: "https://www.irishtimes.com/news/politics/the-maurice-mccabe-affair-how-did-we-reach-this-point-1.3301473" }
    ]},
    { label: "Political finance & lobbying", badgeClass: "badge-supply", findings: [
      { text: "Former Taoiseach Enda Kenny accepted a €15,000 speaking fee from a private healthcare company after leaving office — an industry that had benefited significantly from government policy decisions taken during his tenure. The payment was disclosed under lobbying rules.", source: "The Ditch / Sunday Times Ireland 2021", url: "https://theditch.ie" },
      { text: "Fine Gael facilitated Ireland's role as a base for multinational tax avoidance structures including the 'Double Irish' arrangement used by Apple, Google, and others. The EU Commission found in 2016 that Ireland had granted Apple illegal state aid — a ruling upheld by the CJEU in 2024 — resulting in €13 billion in back taxes.", source: "European Commission 2016 / EU Court of Justice 2024", url: "https://curia.europa.eu" }
    ]},
    { label: "State agency scandals", badgeClass: "badge-housing", findings: [
      { text: "The Golfgate scandal (August 2020): EU Commissioner Phil Hogan — a former Fine Gael minister and close ally — resigned from his EU position after attending the same 81-person golf dinner in Clifden that breached COVID restrictions. Hogan had initially denied the extent of his attendance and travel arrangements, before ultimately resigning.", source: "RTÉ News / The Journal August 2020", url: "https://thejournal.ie" },
      { text: "Under Fine Gael-led governments from 2011 to 2020, Ireland's homelessness levels rose consistently to record highs, with housing policy prioritising market-led development and reliance on the private rented sector through the Housing Assistance Payment scheme. The Comptroller and Auditor General identified significant inefficiencies in HAP spending.", source: "Comptroller and Auditor General / Focus Ireland 2020", url: "https://audit.gov.ie" }
    ]}
  ],
  alternatives: []
},

"sinn-fein": {
  type: "government", tags: ["ireland"],
  name: "Sinn Féin",
  subtitle: "Political party — Republic of Ireland and Northern Ireland",
  corporate: {
    parent: null,
    subsidiaries: [],
    shareholders: []
  },
  products: [],
  categories: [
    { label: "Historical IRA associations", badgeClass: "badge-political", findings: [
      { text: "Sinn Féin was historically the political wing of the Provisional IRA during the Troubles (1969–1998). The IRA's military campaign was responsible for over 1,700 deaths during the conflict. The Charleton Tribunal and multiple inquiries have documented the close organisational relationship between the party and the IRA during this period.", source: "Britannica / NPR / EBSCO Research Starters", url: "https://www.britannica.com/topic/Sinn-Fein" },
      { text: "The Northern Bank robbery of £26.5 million in Belfast in December 2004 was widely attributed to the IRA by the Irish and British governments, including then-Taoiseach Bertie Ahern. Sinn Féin denied knowledge of the robbery. The timing — occurring while Sinn Féin was engaged in peace settlement talks — significantly damaged confidence in the peace process.", source: "Wikipedia / BBC 2004", url: "https://en.wikipedia.org/wiki/Sinn_F%C3%A9in" },
      { text: "Sinn Féin chairman Mitchel McLaughlin stated on RTÉ's Questions and Answers programme that the IRA's killing of Jean McConville — a mother of ten children, abducted and murdered in the early 1970s — was 'wrong' but 'not a crime'. The statement caused significant public outrage.", source: "RTÉ / Irish Times reporting", url: "https://rte.ie" }
    ]},
    { label: "Political finance & transparency", badgeClass: "badge-supply", findings: [
      { text: "Sinn Féin historically received significant funding from Irish-American diaspora organisations in the United States, including NORAID, which the FBI and Irish government identified as a fundraising vehicle for the IRA. The party's finances during the Troubles period were not publicly transparent.", source: "PBS Frontline / FBI records", url: "https://www.pbs.org/wgbh/pages/frontline/shows/ira/conflict/gasf.html" },
      { text: "Transparency International Ireland's 2024 report found that less than 9% of donations to Irish political parties between 2019 and 2022 were publicly disclosed. As one of Ireland's largest parties, Sinn Féin operates under the same 'hopelessly outdated' ethics and political finance legislation as other parties.", source: "Transparency International Ireland 2024", url: "https://transparency.ie" }
    ]},
    { label: "Garda & justice", badgeClass: "badge-housing", findings: [
      { text: "The Irish government has alleged that senior members of Sinn Féin have held posts on the IRA Army Council. Multiple security service assessments in both Ireland and the UK maintained that organisational links between Sinn Féin and the IRA persisted beyond the 1998 Good Friday Agreement, though the IRA formally ended its armed campaign in 2005 and decommissioned weapons.", source: "Wikipedia / Britannica / Irish government statements", url: "https://en.wikipedia.org/wiki/Sinn_F%C3%A9in" }
    ]}
  ],
  alternatives: []
},

"circle-k": {
  type: "company",
  tags: ["ireland"],
  name: "Circle K Ireland",
  subtitle: "Fuel & Convenience Retail — Ireland",
  corporate: {
    parent: { name: "Alimentation Couche-Tard", note: "Canadian multinational, acquired Topaz Ireland in 2016 and rebranded as Circle K in 2018. Operates 410+ stations in Ireland.", compliance: "mixed", link: "https://corpo.couche-tard.com" },
    subsidiaries: [],
    shareholders: []
  },
  products: [],
  categories: [
    { label: "Labour & Human Rights", badgeClass: "badge-labour", findings: [
      { text: "A Circle K worker was awarded €1,000 by the Workplace Relations Commission after his manager told him to 'be a man' and supervise the cleaning of a bathroom after a homeless man had picked up human faeces with his bare hands. The WRC found this constituted gender-based harassment.", source: "RTÉ News, July 2025", url: "https://www.rte.ie/news/circle-k/" }
    ]},
    { label: "Environment", badgeClass: "badge-env", findings: [
      { text: "Circle K's parent company Alimentation Couche-Tard operates over 17,000 fuel retail sites globally, making it one of the world's largest fossil fuel retailers by number of locations.", source: "Alimentation Couche-Tard Corporate", url: "https://corpo.couche-tard.com" }
    ]}
  ],
  alternatives: []
},

"shell-ireland": {
  type: "company",
  tags: ["ireland"],
  name: "Shell Ireland (Corrib)",
  subtitle: "Oil & Gas — County Mayo, Ireland",
  corporate: {
    parent: { name: "Shell plc", note: "Anglo-Dutch multinational. Withdrew from the Corrib gas field in 2018 after selling its 45% stake to Canada Pension Plan Investment Board for $947 million.", compliance: "concern", link: "https://www.shell.com" },
    subsidiaries: [],
    shareholders: []
  },
  products: [],
  categories: [
    { label: "Environment", badgeClass: "badge-env", findings: [
      { text: "Shell Ireland was fined €1,000 and ordered to pay €15,000 in legal costs in September 2016 following an EPA prosecution for causing light and noise pollution from a gas flare at the Corrib gas project in County Mayo.", source: "Irish Times — Corrib Gas Timeline", url: "https://www.irishtimes.com/news/ireland/irish-news/corrib-gas-timeline-20-years-of-protests-and-controversy-1.3152744" }
    ]},
    { label: "Labour & Human Rights", badgeClass: "badge-labour", findings: [
      { text: "Five local landowners known as the 'Rossport Five' were jailed for 94 days in 2005 after refusing to allow Shell access to their land for the Corrib gas pipeline. Shell had obtained a court injunction against them. The imprisonment caused national outcry and galvanised the Shell to Sea protest movement.", source: "ScienceDirect — Assessing the Corrib Gas Controversy", url: "https://www.sciencedirect.com/science/article/abs/pii/S2214790X18302260" },
      { text: "Shell's private security firm was documented engaging in violent actions against protesters during the Corrib gas project, contributing to political controversy over the policing of a peaceful community campaign.", source: "Vice — How Police Brutality Brought Gas Flares to a Peaceful Irish Fishing Village", url: "https://www.vice.com/en/article/rossport-gas-exploitation-protests-209/" }
    ]},
    { label: "Political & Lobbying", badgeClass: "badge-political", findings: [
      { text: "Senior Shell executives obtained a private meeting with Taoiseach Bertie Ahern and other Irish government ministers in 2003 during the planning stages of the Corrib gas project, before public consultation was complete.", source: "MEON Journal — The Curious Case of the Corrib Gas Field", url: "https://meonjournal.com/read/curious-case-of-the-corrib-gas-field" }
    ]}
  ],
  alternatives: []
},

"applegreen": {
  type: "company",
  tags: ["ireland"],
  name: "Applegreen",
  subtitle: "Fuel & Motorway Services — Ireland & USA",
  corporate: {
    parent: { name: "Blackstone", note: "US private equity firm. Took Applegreen private in 2021 in a deal valuing the company at approximately €718 million.", compliance: "concern", link: "https://www.blackstone.com" },
    subsidiaries: [],
    shareholders: []
  },
  products: [],
  categories: [
    { label: "Labour & Human Rights", badgeClass: "badge-labour", findings: [
      { text: "The state of Connecticut sued Applegreen for more than $6 million in 2023, alleging the company was paying Dunkin' workers at highway service plazas $14–$15 per hour instead of the legally mandated standard wage of at least $18.21. The state accused Applegreen of lack of engagement with the union representing affected workers.", source: "Irish Times, March 2023", url: "https://www.irishtimes.com/business/2023/03/20/applegreen-accused-of-lack-of-engagement-with-union-in-us-pay-dispute/" },
      { text: "A WRC hearing in 2024 heard that an Applegreen manager at Ashbourne, Co Meath failed to register a Polish worker for payroll for 16 weeks, meaning she received no wages for that period. The manager had effectively inflated profits and secured himself an increased bonus as a result.", source: "Irish Times, April 2024", url: "https://www.irishtimes.com/business/2024/04/08/applegreen-manager-sacked-after-probe-found-worker-got-no-wages-for-16-weeks/" }
    ]}
  ],
  alternatives: []
},

"top-oil": {
  type: "company",
  tags: ["ireland"],
  name: "Top Oil / Irving Oil",
  subtitle: "Fuel Distribution & Refining — Ireland",
  corporate: {
    parent: { name: "Irving Oil", note: "Canadian oil company, acquired Top Oil in 2018. Also operates Ireland's only oil refinery at Whitegate, Cork Harbour.", compliance: "concern", link: "https://www.irvingoil.com" },
    subsidiaries: [],
    shareholders: []
  },
  products: [],
  categories: [
    { label: "Environment", badgeClass: "badge-env", findings: [
      { text: "Irving Oil, operator of Ireland's only oil refinery at Whitegate in Cork Harbour, was prosecuted by the EPA following a spill of 14,200 litres of gas oil into Cork Harbour on 22 January 2024. The EPA expressed concern about Polycyclic Aromatic Hydrocarbons (PAHs), described as 'acutely toxic and long lasting', in the spill. Irving Oil avoided conviction after a judge ordered a €2,500 donation to the RNLI.", source: "RTÉ News, February 2025", url: "https://www.rte.ie/news/munster/2025/0221/1498054-irving-oil-whitegate-court/" },
      { text: "The EPA initiated a formal Compliance Investigation into the January 2024 Whitegate spill to establish root causes and direct Irving Oil to eliminate the risk of a similar incident. Residual oil contamination remained on the Cork Harbour shoreline for weeks after the spill.", source: "EPA Ireland — Spill Incident at Irving Oil Whitegate Refinery", url: "https://www.epa.ie/our-services/compliance--enforcement/whats-happening/incidents-at-epa-regulated-sites/notifications-of-recent-incidents/spill-incident-at-irving-oil-whitegate-refinery/" }
    ]}
  ],
  alternatives: []
},

"rte": {
  type: "company",
  tags: ["ireland"],
  name: "RTÉ",
  subtitle: "Public Broadcaster — Dublin, Ireland",
  corporate: {
    parent: null,
    subsidiaries: [
      { name: "GAAGO", note: "Subscription Gaelic games channel, co-established by former DG Dee Forbes", compliance: "unclear" },
      { name: "RTÉ Commercial Enterprises", note: "Manages barter accounts implicated in pay scandal", compliance: "concern" }
    ],
    shareholders: [
      { name: "Irish State", note: "Funded via TV licence and Exchequer; Public Accounts Committee oversight", compliance: "ok" }
    ]
  },
  products: [
    { name: "RTÉ One / Two", flags: ["governance"] },
    { name: "RTÉ Radio 1", flags: ["governance"] },
    { name: "RTÉ Player", flags: [] }
  ],
  categories: [
    {
      label: "Governance & Financial Misconduct",
      badgeClass: "badge-political",
      findings: [
        {
          text: "RTÉ admitted in June 2023 that it had underdeclared presenter Ryan Tubridy's pay by €345,000 over six years (2017–2022), deliberately understating his annual earnings to keep them below the €500,000 public disclosure threshold. Payments were routed through a UK-based barter agency, Astus, outside normal finance controls.",
          source: "Oireachtas Public Accounts Committee / RTÉ Board statement",
          url: "https://www.oireachtas.ie/en/press-centre/press-releases/20230710-committee-of-public-accounts-to-meet-with-ryan-tubridy-and-noel-kelly-regarding-payments-by-rte-to-mr-tubridy-10-july-2023/"
        },
        {
          text: "Forensic accountants Mazars found in August 2023 that RTÉ had no formally approved policy for its barter account, through which €1.2 million of €7.4 million in advertising revenue was spent outside standard procurement and approval processes.",
          source: "Mazars Interim Report, August 2023",
          url: "https://en.wikipedia.org/wiki/RT%C3%89_secret_payment_scandal"
        },
        {
          text: "An Oireachtas Media Committee hearing in February 2024 found that former Director General Dee Forbes and former Director of Strategy Rory Coveney 'deliberately circumvented' established oversight in commissioning Toy Show The Musical, which was not brought to the audit and risk committee despite obligations to do so.",
          source: "Oireachtas Joint Committee on Tourism, Culture, Arts, Sport and Media, February 2024",
          url: "https://en.wikipedia.org/wiki/RT%C3%89_secret_payment_scandal"
        },
        {
          text: "The Mazars governance report of May 2024 concluded a 'severe breakdown of communications and trust' between RTÉ executives and the board was the primary cause of the scandal, finding that the board had no formal terms of reference, the Director General was not expressly accountable to the board, and there was no central corporate governance handbook.",
          source: "Mazars Expert Advisory Committee Report, May 2024",
          url: "https://www.thecorporategovernanceinstitute.com/insights/news-analysis/what-happened-with-the-rte-scandal/"
        },
        {
          text: "RTÉ's Chief Financial Officer Richard Collins initially refused to disclose his salary to the Oireachtas Public Accounts Committee, claiming he 'couldn't remember'. It later emerged that former CFO Breda O'Keeffe received a €450,000 exit package despite assurances the board had no role in approving senior executive exit payments.",
          source: "Oireachtas PAC hearings, reported by Irish Examiner, July 2023",
          url: "https://www.irishexaminer.com/news/arid-41207533.html"
        }
      ]
    },
    {
      label: "Labour & Pay Practices",
      badgeClass: "badge-labour",
      findings: [
        {
          text: "Over €2.3 million was paid out to departing senior figures through voluntary exit schemes, with at least one payment reportedly around €400,000, revealed during Oireachtas scrutiny of the broader governance crisis in 2023.",
          source: "RTÉ disclosures to Oireachtas committees, June–July 2023",
          url: "https://en.wikipedia.org/wiki/RT%C3%89_secret_payment_scandal"
        },
        {
          text: "Around 200 RTÉ journalists, reporters and correspondents represented by SIPTU and the NUJ staged a protest at RTÉ headquarters in June 2023, citing hurt and anger at the governance failures revealed by the pay scandal and the preferential treatment given to senior contracted presenters.",
          source: "RTÉ News / NUJ, June 2023",
          url: "https://en.wikipedia.org/wiki/RT%C3%89_secret_payment_scandal"
        }
      ]
    }
  ],
  alternatives: []
},,

"inm": {
  type: "company",
  tags: ["ireland"],
  name: "Independent News & Media (Mediahuis Ireland)",
  subtitle: "News Publisher — Dublin, Ireland",
  corporate: {
    parent: { name: "Mediahuis", note: "Belgian media group; acquired INM in June 2019 following governance scandal under Denis O'Brien's majority shareholding", compliance: "mixed", link: "https://www.mediahuis.com" },
    subsidiaries: [
      { name: "Irish Independent", note: "Ireland's largest-circulation daily newspaper", compliance: "unclear" },
      { name: "Sunday Independent", note: "Ireland's largest-circulation Sunday newspaper", compliance: "unclear" },
      { name: "Herald.ie / Belfast Telegraph", note: "Digital and regional titles under same umbrella", compliance: "unclear" }
    ],
    shareholders: [
      { name: "Mediahuis NV", note: "Full owner since 2019 Euronext de-listing", compliance: "mixed" }
    ]
  },
  products: [
    { name: "Irish Independent", flags: ["editorial independence concerns"] },
    { name: "Sunday Independent", flags: ["editorial independence concerns"] },
    { name: "Sunday World", flags: [] }
  ],
  categories: [
    {
      label: "Data Privacy & Corporate Governance",
      badgeClass: "badge-data",
      findings: [
        {
          text: "In 2014, INM's IT backup tapes were secretly removed and sent to a cybersecurity firm in Wales for 'data interrogation' of 19 named individuals, including journalists, barristers, and former Moriarty Tribunal counsel. The operation was authorised by then-chairman Leslie Buckley and paid for by Denis O'Brien's offshore company Blaydon Ltd (Isle of Man). The High Court in 2018 found the conduct 'suggestive of an unlawful purpose' to benefit O'Brien.",
          source: "High Court of Ireland (Mr Justice Peter Kelly), September 2018; Irish Times investigative reporting",
          url: "https://www.irishtimes.com/crime-law/courts/2024/07/23/denis-obrien-leslie-buckley-and-others-seek-to-be-given-inspectors-report-on-inm-governance-scandal/"
        },
        {
          text: "High Court inspectors appointed in 2018 found, following a six-year investigation, that Leslie Buckley had 'readily acknowledged' passing confidential and 'undoubtedly price-sensitive' information to Denis O'Brien, INM's largest shareholder, in potential breach of market abuse regulations. O'Brien's companies paid for the data analysis and for other costs including a €15,000–€20,000 payment to an O'Brien associate for a trip to Australia linked to the APN share sale.",
          source: "High Court Inspectors' Report (Seán Gillane SC / Richard Fleck), published July 2024; Irish Times",
          url: "https://www.irishtimes.com/crime-law/courts/2024/07/31/inm-controversy-denis-obrien-told-emails-being-searched-in-bid-to-indentify-why-solicitors-contract-renewed/"
        },
        {
          text: "The Office of the Director of Corporate Enforcement (ODCE) concluded that INM's affairs had been conducted in a manner 'unfairly prejudicial' to some of its members, citing multiple instances of O'Brien's interests being prioritised over other shareholders, including blocked acquisition reviews and an attempted purchase of O'Brien's Newstalk radio station at an allegedly inflated price.",
          source: "ODCE affidavit of Director Ian Drennan to High Court, 2018; Irish Times",
          url: "https://www.irishtimes.com/business/media-and-marketing/concern-over-denis-o-brien-s-influence-at-inm-central-to-court-action-1.3559943"
        }
      ]
    },
    {
      label: "Editorial Independence",
      badgeClass: "badge-political",
      findings: [
        {
          text: "In 2014, allegations arose that a group editor at INM ordered amendments to a Sunday Independent column by editor Anne Harris that contained references to Denis O'Brien, INM's dominant shareholder. Harris left her role later that year when her contract was not renewed.",
          source: "Wikipedia / Irish Times reporting on Denis O'Brien and INM",
          url: "https://en.wikipedia.org/wiki/Denis_O'Brien"
        },
        {
          text: "Among the 19 individuals whose data was secretly interrogated were two barristers who worked for the Moriarty Tribunal, which investigated the award of a mobile phone licence to O'Brien's Esat Digifone consortium — establishing a direct link between the data breach and O'Brien's commercial and reputational interests in suppressing Tribunal-related coverage.",
          source: "High Court (Mr Justice Peter Kelly) appointment of inspectors, September 2018; Irish Times",
          url: "https://www.irishtimes.com/ireland/2024/07/13/report-into-governance-scandal-at-independent-news-media-to-be-given-to-high-court-within-days/"
        }
      ]
    }
  ],
  alternatives: []
},,

"newscorp_ireland": {
  type: "company",
  tags: ["ireland"],
  name: "News Corp (Ireland)",
  subtitle: "Media Conglomerate — Irish Operations of News Corp / News UK",
  corporate: {
    parent: { name: "News Corp", note: "Rupert Murdoch-controlled US media conglomerate; Irish operations include The Irish Sun and Wireless Group radio stations (FM104, Q102, 96FM, LMFM, Live95FM)", compliance: "concern", link: "https://newscorp.com" },
    subsidiaries: [
      { name: "News UK and Ireland Trading Ltd", note: "Registered with Irish CRO; provides personnel and admin services to News UK group in ROI", compliance: "concern" },
      { name: "Wireless Group ROI", note: "Owns FM104, Q102, LMFM, 96FM, C103, Live95FM; acquired 2016", compliance: "unclear" },
      { name: "Storyful", note: "Dublin-founded social media intelligence company, acquired by News Corp in 2013 for ~€18m", compliance: "unclear" }
    ],
    shareholders: [
      { name: "Murdoch Family Trust", note: "Controls largest single voting block in News Corp", compliance: "concern" }
    ]
  },
  products: [
    { name: "The Irish Sun", flags: ["phone hacking parent company"] },
    { name: "FM104 / Q102 / Live95FM", flags: [] },
    { name: "Storyful", flags: [] }
  ],
  categories: [
    {
      label: "Phone Hacking & Unlawful Surveillance",
      badgeClass: "badge-data",
      findings: [
        {
          text: "News Corp's UK subsidiary News Group Newspapers (NGN), publisher of The Sun and the now-closed News of the World, was found to have engaged in systematic, illegal voicemail interception targeting celebrities, politicians, murder victims' families (including Milly Dowler), relatives of deceased British soldiers, and 7/7 bombing victims. By 2016 the scandal had cost News Corp over £100 million in legal settlements. The News of the World was shut down in July 2011 after 168 years of publication as a direct consequence.",
          source: "Leveson Inquiry (UK, 2011–2012); UK High Court findings; CNN Fast Facts",
          url: "https://en.wikipedia.org/wiki/News_International_phone_hacking_scandal"
        },
        {
          text: "A May 2012 parliamentary select committee report concluded that Rupert Murdoch 'exhibited wilful blindness to what was going on in his companies and publications.' During his own Leveson Inquiry testimony, Rupert Murdoch admitted a cover-up had taken place within the News of the World to hide the true scale of phone hacking.",
          source: "UK House of Commons Culture, Media and Sport Committee Report, May 2012",
          url: "https://en.wikipedia.org/wiki/News_International_phone_hacking_scandal"
        },
        {
          text: "In 2024, High Court proceedings in London brought by 45 individuals (including the Duke of Sussex) included allegations that NGN 'systematically deleted' millions of emails from 2007 to 2011, and that senior executives including Rupert Murdoch and Rebekah Brooks were 'buying the silence' of those who might reveal the true extent of unlawful activity. Barristers argued Murdoch oversaw a 'culture of impunity' at the publisher.",
          source: "UK High Court, March 2024; The Irish News",
          url: "https://www.irishnews.com/news/uk/rupert-murdoch-turned-a-blind-eye-to-phone-hacking-at-ngn-high-court-told-5GAAY2O3QFJVDEXT5WJ6XG7PJU/"
        },
        {
          text: "News Group Newspapers settled a phone-hacking claim by Irish singer and presenter Ronan Keating in July 2021, covering alleged hacking for articles published between 1996 and 2011.",
          source: "CNN UK Phone Hacking Scandal Fast Facts, July 2021",
          url: "https://www.cnn.com/2013/10/24/world/europe/uk-phone-hacking-scandal-fast-facts"
        }
      ]
    },
    {
      label: "Irish Operations & Influence",
      badgeClass: "badge-political",
      findings: [
        {
          text: "News Corp's acquisition of the Wireless radio group in 2016 gave Rupert Murdoch control over six Irish Republic radio stations (FM104, Q102, LMFM, 96FM, C103, Live95FM) in addition to The Irish Sun print title, representing a significant concentration of Irish media ownership under a foreign proprietor with a documented record of editorial interference in other jurisdictions.",
          source: "The Irish Times, analysis of News Corp Irish operations, September 2023",
          url: "https://www.irishtimes.com/business/2023/09/22/murdochs-irish-business-operations-a-shadow-of-their-former-selves/"
        }
      ]
    }
  ],
  alternatives: []
},,

"reach_plc": {
  type: "company",
  tags: ["ireland"],
  name: "Reach plc (Irish Mirror / Irish Star)",
  subtitle: "News Publisher — UK-listed, Irish operations via Irish Mirror & Irish Star",
  corporate: {
    parent: { name: "Reach plc", note: "UK-listed media group (formerly Trinity Mirror); owns Irish Mirror and 50% stake in Irish Star acquired 2020. HQ: One Canada Square, London.", compliance: "mixed", link: "https://www.reachplc.com" },
    subsidiaries: [
      { name: "Irish Mirror", note: "Full Reach ownership; national Irish daily", compliance: "mixed" },
      { name: "Irish Star", note: "50% stake acquired 2020; integrated with Irish Mirror editorial operations", compliance: "mixed" }
    ],
    shareholders: [
      { name: "Institutional investors (LSE-listed)", note: "Publicly traded on London Stock Exchange", compliance: "unclear" }
    ]
  },
  products: [
    { name: "Irish Mirror", flags: ["mass redundancies 2025", "phone hacking parent"] },
    { name: "Irish Star", flags: ["mass redundancies 2025"] }
  ],
  categories: [
    {
      label: "Phone Hacking (Parent Company)",
      badgeClass: "badge-data",
      findings: [
        {
          text: "In September 2014, Trinity Mirror (now Reach plc) admitted that some of its journalists had been involved in phone hacking and agreed to pay compensation to four individuals who sued, including entertainer Shane Richie, soap actresses Shobna Gulati and Lucy Benjamin, and BBC creative director Alan Yentob.",
          source: "Trinity Mirror admission of liability, September 2014; Reach plc Wikipedia",
          url: "https://en.wikipedia.org/wiki/Reach_plc"
        },
        {
          text: "In January 2011, former MP Paul Marsden announced he was considering legal action against Trinity Mirror over alleged phone hacking, predating the full public exposure of industry-wide practices.",
          source: "Reach plc Wikipedia",
          url: "https://en.wikipedia.org/wiki/Reach_plc"
        }
      ]
    },
    {
      label: "Labour & Redundancies",
      badgeClass: "badge-labour",
      findings: [
        {
          text: "In September 2025, Reach plc announced plans to make 321 editorial staff redundant across its UK and Irish titles, putting 600 roles at risk in total. Around 20 jobs were under threat at the Irish Mirror and Irish Star. The NUJ described the proposals as a 'devastating body blow to staff' and raised concerns that AI was being deployed to replace specialist journalists.",
          source: "Irish Times, September 2025; UK Parliament Early Day Motion, September 2025",
          url: "https://www.irishtimes.com/media/2025/09/08/irish-mirror-and-star-journalists-to-be-hit-by-reach-group-redundancies/"
        },
        {
          text: "The NUJ's national Reach coordinator told Press Gazette that Reach had 'sought to cut around 70 print production staff in the UK nationals and eight print production staff in Ireland — including over 50 sub-editors whose job is to preserve standards of accuracy and clarity', while simultaneously using AI to duplicate content across titles.",
          source: "Press Gazette, November 2025",
          url: "https://pressgazette.co.uk/news/senior-editorial-staff-and-editors-hit-hard-by-reach-cutbacks/"
        }
      ]
    }
  ],
  alternatives: []
},,

"irish_times": {
  type: "company",
  tags: ["ireland"],
  name: "The Irish Times Group",
  subtitle: "News Publisher — Dublin, Ireland",
  corporate: {
    parent: { name: "The Irish Times Trust CLG", note: "Independent charitable trust structure; prevents commercial takeover and mandates editorial independence. Not-for-profit in intent.", compliance: "ok", link: "https://www.irishtimes.com/about-us/the-irish-times-trust/" },
    subsidiaries: [
      { name: "Irish Times Limited", note: "Publishing arm; holds majority stake in Gazette Group Newspapers (West Dublin local titles)", compliance: "ok" },
      { name: "MyHome.ie", note: "Property website acquired for €50m; major commercial revenue stream", compliance: "ok" },
      { name: "The Irish Examiner", note: "Acquired via Landmark Media Investments deal, completed July 2018", compliance: "ok" }
    ],
    shareholders: [
      { name: "Irish Times Trust CLG", note: "Sole shareholder; prohibits share transfer outside trust structure", compliance: "ok" }
    ]
  },
  products: [
    { name: "The Irish Times (print & digital)", flags: [] },
    { name: "The Irish Examiner", flags: [] },
    { name: "MyHome.ie", flags: [] }
  ],
  categories: [
    {
      label: "Editorial Standards",
      badgeClass: "badge-political",
      findings: [
        {
          text: "In July 2010, The Irish Times published an article titled 'The Fighting Irish' about Irish nationals in the British Armed Forces. Current affairs magazine The Phoenix criticised the editor at the time, alleging the article violated the Irish Defence Act, which prohibits military recruitment advertising on behalf of foreign militaries. No regulatory action was taken.",
          source: "The Phoenix magazine, 2010; Wikipedia – The Irish Times",
          url: "https://en.wikipedia.org/wiki/The_Irish_Times"
        }
      ]
    }
  ],
  alternatives: []
},,

"ires_reit": {
  type: "company",
  tags: ["ireland"],
  name: "Ires REIT",
  subtitle: "Institutional Landlord — Dublin, Ireland",
  corporate: {
    parent: { name: "CAPREIT (Canada)", note: "Canadian Apartment Properties REIT founded IRES in 2014; IRES internalised management in January 2022 and is now independently listed on Euronext Dublin", compliance: "concern", link: "https://www.capreit.ca" },
    subsidiaries: [],
    shareholders: [
      { name: "Institutional investors (Euronext Dublin listed)", note: "Publicly traded; Irish Life Assurance and US investment funds among early investors at 2014 IPO", compliance: "unclear" }
    ]
  },
  products: [
    { name: "3,684 rental apartments (Dublin & Cork)", flags: ["evictions", "invalid tenancy notices", "rent increases"] }
  ],
  categories: [
    {
      label: "Housing & Tenants' Rights",
      badgeClass: "badge-housing",
      findings: [
        {
          text: "The Residential Tenancies Board (RTB) found that some notices of termination and rent reviews issued by IRES were invalid. The RTB also ruled specifically against IRES in a case involving Baker's Yard, Dublin, where a parking charge had been unlawfully added to a sitting tenant's rent and counted in arrears calculations.",
          source: "Residential Tenancies Board determination; Dublin Inquirer investigative reporting",
          url: "https://www.dublininquirer.com/why-is-one-of-irelands-biggest-landlords-evicting-so-many-of-its-tenants/"
        },
        {
          text: "Research by the Community Action Tenants Union (CATU) found that IRES had the highest number of evictions approved by the RTB of any landlord in Ireland — 128 since 2015 — covering only those cases where tenants formally contested the eviction, representing a small subset of total terminations.",
          source: "CATU Eviction Nation report / topevictors.ie database",
          url: "https://topevictors.ie/profiles/IRES.html"
        },
        {
          text: "In 2023, IRES issued notices of termination to 5% of its tenants — a significant proportion at a time when the sector-wide average was 8%. Dublin Inquirer analysis of RTB figures showed IRES had the highest absolute count of RTB-approved evictions among all Irish landlords.",
          source: "Dublin Inquirer, November 2024; RTB figures",
          url: "https://www.dublininquirer.com/why-is-one-of-irelands-biggest-landlords-evicting-so-many-of-its-tenants/"
        },
        {
          text: "In March 2025, IRES planned to add a €200 monthly 'common area' fee for new renters at one of its properties — an additional charge layered onto rent, following the RTB's earlier ruling against a similar unlawful parking charge at Baker's Yard.",
          source: "Wikipedia – Irish Residential Properties REIT",
          url: "https://en.wikipedia.org/wiki/Irish_Residential_Properties_REIT"
        },
        {
          text: "In February 2026, IRES told investors that new government rental reforms could yield a 25% increase in its rental income over ten years, noting its portfolio was currently 20% below market rent. Sinn Féin's Mary Lou McDonald told the Dáil this represented 'a bonanza' for property funds worth an extra €21 million annually, at the expense of renters facing an average hike of €5,556 per year.",
          source: "The Journal / RTÉ News, February 2026; Oireachtas Dáil record",
          url: "https://www.thejournal.ie/rental-sector-ireland-6966431-Feb2026/"
        }
      ]
    },
    {
      label: "Tax",
      badgeClass: "badge-tax",
      findings: [
        {
          text: "As a REIT under Irish legislation introduced in 2013, IRES is exempt from corporation tax on rental income and capital gains from its property rental business — a structure that has been the subject of sustained Oireachtas scrutiny. The Commission on Taxation and Welfare recommended a review of the REIT tax regime in its 2022 report, citing concerns about institutional investment and housing policy objectives.",
          source: "Oireachtas Written Answer (Deputy Richard Boyd Barrett), September 2023; Commission on Taxation and Welfare 2022",
          url: "https://www.oireachtas.ie/en/debates/question/2023-09-20/147/"
        }
      ]
    }
  ],
  alternatives: []
},,

"kennedy_wilson": {
  type: "company",
  tags: ["ireland"],
  name: "Kennedy Wilson (Ireland)",
  subtitle: "Institutional Property Fund — Beverly Hills, US / Dublin, Ireland",
  corporate: {
    parent: { name: "Kennedy Wilson Inc.", note: "Beverly Hills, California-based property investment firm; Ireland's second-largest institutional landlord holding ~16% of all institutional residential units", compliance: "concern", link: "https://www.kennedywilson.com" },
    subsidiaries: [
      { name: "Kennedy Wilson QIAIF structures (3 Irish funds)", note: "Irish-registered Qualifying Investor Alternative Investment Funds used to hold Irish property portfolio including Capital Dock, Shelbourne Hotel, Vantage Sandyford", compliance: "concern" }
    ],
    shareholders: [
      { name: "Kennedy Wilson Inc. (NYSE: KW)", note: "US-listed parent", compliance: "unclear" }
    ]
  },
  products: [
    { name: "Residential rental portfolio (Dublin)", flags: ["tax structure", "QIAIF"] },
    { name: "Capital Dock, Dublin Docklands", flags: [] },
    { name: "Shelbourne Hotel, Dublin", flags: [] }
  ],
  categories: [
    {
      label: "Tax",
      badgeClass: "badge-tax",
      findings: [
        {
          text: "Kennedy Wilson holds much of its Irish property portfolio through three Irish Qualifying Investor Alternative Investment Funds (QIAIFs). Its 2020 financial statements noted that 'during the year these funds were exempt from any direct Irish taxation on income and gains.' Revenue Commissioners data showed Irish real estate funds paid an effective tax rate of 17.9% in 2020 — up from just 2.7% in 2019 — following 2016 legislative reforms introduced after significant lobbying.",
          source: "Irish Times, May 2021; Revenue Commissioners data",
          url: "https://www.irishtimes.com/business/commercial-property/tax-take-from-institutional-property-investors-rose-by-171-in-2020-1.4561988"
        },
        {
          text: "Freedom of Information documents obtained by the Irish Times revealed that Kennedy Wilson, alongside Oaktree Capital and CarVal, engaged in an extensive lobbying campaign of the Department of Finance and Revenue Commissioners in 2016 as the government moved to tighten QIAIF tax rules. Kennedy Wilson's top Irish executive Peter Collins wrote directly to the Minister for Finance, arguing the use of QIAIFs was legitimate, after Deloitte had first arranged a meeting between the company and Department officials.",
          source: "Irish Times, January 2017 (FOI documents)",
          url: "https://www.irishtimes.com/news/ireland/irish-news/us-vulture-funds-lobbied-government-over-proposed-tax-changes-1.2945025"
        }
      ]
    },
    {
      label: "Housing & Tenants' Rights",
      badgeClass: "badge-housing",
      findings: [
        {
          text: "Kennedy Wilson is Ireland's second-largest institutional landlord with approximately 16% of all institutional residential units. Dublin Inquirer analysis of RTB data found that Kennedy Wilson did not respond to media queries about its eviction policies or notice figures. In 2023 it issued notices to quit to an estimated 0.5% of its tenants — lower than peers but with uncertainty about whether all Kennedy Wilson evictions were logged under its own name or its letting agent.",
          source: "Dublin Inquirer, November 2024; RTB figures",
          url: "https://www.dublininquirer.com/why-is-one-of-irelands-biggest-landlords-evicting-so-many-of-its-tenants/"
        }
      ]
    }
  ],
  alternatives: []
},,

"iput": {
  type: "company",
  tags: ["ireland"],
  name: "IPUT plc",
  subtitle: "Commercial Property Fund — Dublin, Ireland",
  corporate: {
    parent: null,
    subsidiaries: [],
    shareholders: [
      { name: "Irish pension funds and institutional investors", note: "Ireland's longest-established property fund, founded 1967; ~€2.5bn in assets as of 2020; pension funds and charities are exempt from dividend withholding tax under QIAIF rules", compliance: "unclear" }
    ]
  },
  products: [
    { name: "Commercial property portfolio (offices, logistics, Dublin)", flags: ["tax structure"] },
    { name: "Davy Irish Property Fund (QIAIF)", flags: ["tax exempt"] }
  ],
  categories: [
    {
      label: "Tax",
      badgeClass: "badge-tax",
      findings: [
        {
          text: "IPUT, Ireland's longest-established property fund with €2.5 billion in assets, paid no tax on reported profits of approximately €60 million in 2020. IPUT operates as a Qualifying Investor Alternative Investment Fund (QIAIF), which under Irish law is exempt from corporation tax on income and gains. This structure was confirmed by Revenue Commissioners data reported by the Irish Times.",
          source: "Irish Times, May 2021; Revenue Commissioners data",
          url: "https://www.irishtimes.com/business/commercial-property/tax-take-from-institutional-property-investors-rose-by-171-in-2020-1.4561988"
        }
      ]
    }
  ],
  alternatives: []
},,

"airbnb_ireland": {
  type: "company",
  tags: ["ireland"],
  name: "Airbnb (Ireland)",
  subtitle: "Short-Term Letting Platform — EMEA HQ: Dublin, Ireland",
  corporate: {
    parent: { name: "Airbnb Inc.", note: "US-listed (NASDAQ: ABNB); Irish entity serves as EMEA headquarters and is central to Airbnb's European tax structure", compliance: "mixed", link: "https://www.airbnb.ie" },
    subsidiaries: [
      { name: "Airbnb Ireland UC", note: "Unlimited company registered in Dublin; collects payments from European hosts and guests; subject to Revenue Commissioners income data sharing obligations", compliance: "mixed" }
    ],
    shareholders: [
      { name: "Airbnb Inc. (NASDAQ: ABNB)", note: "US parent", compliance: "mixed" }
    ]
  },
  products: [
    { name: "Short-term letting platform (Ireland)", flags: ["housing market impact", "planning law non-compliance by hosts"] }
  ],
  categories: [
    {
      label: "Housing & Planning",
      badgeClass: "badge-housing",
      findings: [
        {
          text: "Dublin City Council launched enforcement proceedings against 1,600 suspected illegal short-term lets in April 2023, following the introduction of 2019 planning regulations requiring permission for non-primary-residence rentals in Rent Pressure Zones. Fewer than 40 property owners citywide had applied for holiday letting permission under the rules since they came into force, despite Airbnb listings in the thousands.",
          source: "Irish Times, April 2023",
          url: "https://www.irishtimes.com/ireland/housing-planning/2023/04/07/dublin-city-council-investigates-1600-suspected-illegal-short-term-lets/"
        },
        {
          text: "A case reported by the Irish Times showed a Dublin landlord who evicted up to 45 tenants on the basis he was selling, and was subsequently found by Dublin City Council to still be using the building (Reuben House, Dublin 8) for unauthorised holiday letting on Airbnb. Dublin City Council issued enforcement proceedings ordering cessation of the unauthorised use.",
          source: "Irish Times Q&A on short-term rentals, April 2023",
          url: "https://www.irishtimes.com/ireland/housing-planning/2023/04/03/qa-all-you-need-to-know-about-short-term-rentals/"
        },
        {
          text: "A Housing Agency report commissioned by government and presented to Cabinet in June 2026 found 28,903 short-term lets active in Ireland, using Airbnb data as a proxy for the sector. Dublin alone accounted for 9,186 short-term lets — 32% of the national total — at a time of acute housing crisis. The government introduced a Short-Term Letting Bill described by the Minister for Housing as the strongest such legislation in Europe, requiring all hosts to register with Fáilte Ireland from May 2026.",
          source: "RTÉ News, June 2026; Housing Agency report",
          url: "https://www.rte.ie/news/politics/2026/0616/1578639-housing-politics-ireland/"
        }
      ]
    },
    {
      label: "Tax",
      badgeClass: "badge-tax",
      findings: [
        {
          text: "Airbnb is legally required under the Taxes Consolidation Act to share Irish host income data annually with the Revenue Commissioners. The Irish entity, Airbnb Ireland UC, operates as an unlimited company — a structure that historically carried reduced public financial disclosure obligations, though EU directive changes have increased reporting requirements for such entities.",
          source: "Revenue Commissioners / Airbnb Ireland UC; Irish regulations",
          url: "https://www.hostaway.com/blog/airbnb-rules-in-ireland/"
        }
      ]
    }
  ],
  alternatives: []
},,

"dalata": {
  type: "company",
  tags: ["ireland"],
  name: "Dalata Hotel Group",
  subtitle: "Hotel Operator — Dublin, Ireland (acquired by Pandox/Eiendomsspar, November 2025)",
  corporate: {
    parent: { name: "Pandox AB / Eiendomsspar AS", note: "Scandinavian consortium completed €1.4bn acquisition of Dalata in November 2025; Scandic Hotels Group assumed operational responsibility. Previously independently listed on Euronext Dublin and LSE.", compliance: "unclear", link: "https://dalatahotelgroup.com" },
    subsidiaries: [
      { name: "Clayton Hotels", note: "27 hotels Ireland/UK/Europe", compliance: "ok" },
      { name: "Maldron Hotels", note: "23 hotels Ireland/UK", compliance: "ok" },
      { name: "DHGL Limited", note: "Subsidiary used for proposed acquisition of CG Hotels (Radisson Blu Dublin Airport), subject to CCPC Phase 2 investigation", compliance: "mixed" }
    ],
    shareholders: [
      { name: "Pandox AB (Sweden)", note: "Majority owner post-November 2025 acquisition", compliance: "unclear" },
      { name: "Eiendomsspar AS (Norway)", note: "Co-owner in acquisition consortium", compliance: "unclear" }
    ]
  },
  products: [
    { name: "Clayton Hotels", flags: [] },
    { name: "Maldron Hotels", flags: [] }
  ],
  categories: [
    {
      label: "Competition",
      badgeClass: "badge-political",
      findings: [
        {
          text: "The Competition and Consumer Protection Commission (CCPC) initiated a full Phase 2 investigation in April 2025 into Dalata's proposed €83 million acquisition of CG Hotels Limited, owner of the Radisson Blu Hotel at Dublin Airport. The CCPC determined a detailed investigation was required to assess whether the transaction would result in a substantial lessening of competition in the Irish hotel market. Dalata already operated the Maldron Hotel and Clayton Hotel (one of the largest in the country) at Dublin Airport.",
          source: "CCPC / Concurrences, April 2025",
          url: "https://www.concurrences.com/en/bulletin/news-issues/april-2025/the-irish-competition-authority-launches-a-phase-ii-investigation-into-a-hotel"
        },
        {
          text: "The CCPC cleared the proposed Dalata acquisition of CG Hotels, subject to legally binding commitments, following its Phase 2 investigation.",
          source: "CCPC decision (post-Phase 2), 2025",
          url: "https://www.concurrences.com/en/bulletin/news-issues/april-2025/the-irish-competition-authority-launches-a-phase-ii-investigation-into-a-hotel"
        }
      ]
    },
    {
      label: "Labour",
      badgeClass: "badge-labour",
      findings: [
        {
          text: "The Workplace Relations Commission (WRC) awarded €50,000 against Dalata Hotel Group in June 2022 for the unfair dismissal of Fergal Ryan, the former general manager of the Clayton Hotel Sligo. The WRC found that Dalata's internal disciplinary investigation failed to consider a 'threatening and patronising' letter Ryan had sent to his line manager seeking a larger settlement, and that the petty cash policy breaches — involving payments of €70–€100 to hotel workers — did not constitute a dismissible offence.",
          source: "Workplace Relations Commission determination; Irish Times, June 2022",
          url: "https://www.irishtimes.com/business/2022/06/30/dalata-ordered-to-pay-50000-for-dismissal-of-sligo-hotel-manager/"
        }
      ]
    }
  ],
  alternatives: []
},,

"abp_food_group": {
  type: "company",
  tags: ["ireland"],
  name: "ABP Food Group",
  subtitle: "Beef Processor — Ardee, Co. Louth (registered: Jersey)",
  corporate: {
    parent: { name: "Goodman family / Williamstown (Jersey)", note: "Privately held; ABP Group itself registered in Jersey. Ownership chain runs through Luxembourg-based Kilbroney Investments, linked to Jersey-based Williamstown, whose directors include Larry Goodman. Larry Goodman stepped down in 2023; family retains control.", compliance: "concern", link: "https://abpfoodgroup.com" },
    subsidiaries: [
      { name: "Anglo Beef Processors Ireland UC", note: "Main Irish trading company; unlimited company with historically limited public disclosure obligations", compliance: "mixed" },
      { name: "Silvercrest Foods", note: "Co. Monaghan burger plant; sold to Kepak in April 2013 following horsemeat scandal", compliance: "concern" },
      { name: "Trojaan Investering BV", note: "Dutch shell company with no employees; received €700m in zero-interest loans from Jersey/Ireland entities and re-loaned at 4–5% interest to ABP subsidiaries to reduce taxable profits in UK and Ireland", compliance: "concern" },
      { name: "C&D Petfoods", note: "Pet food subsidiary; sought injunctions against protesting farmers in 2019 beef crisis", compliance: "mixed" }
    ],
    shareholders: [
      { name: "Goodman family", note: "Larry Goodman founded company 1954; family estimated net worth €2.46bn (2020); retains control through Jersey-registered holding structures", compliance: "concern" }
    ]
  },
  products: [
    { name: "Fresh & frozen beef", flags: ["food safety — horsemeat scandal"] },
    { name: "Burgers & processed meat", flags: ["food safety — horsemeat scandal"] },
    { name: "Pet food (C&D Foods)", flags: [] }
  ],
  categories: [
    {
      label: "Food Safety",
      badgeClass: "badge-supply",
      findings: [
        {
          text: "In January 2013, the Food Safety Authority of Ireland (FSAI) found that Tesco Everyday Value Beef Burgers contained 29.1% horse DNA. The burgers were produced by Silvercrest Foods in Co. Monaghan, a subsidiary of ABP Food Group. A second ABP subsidiary, Dalepak Hambleton in Yorkshire, was also implicated. Tesco dropped Silvercrest as a supplier. Burger King removed Silvercrest from its supply chain entirely. The Department of Agriculture's investigation concluded there was no evidence Silvercrest knowingly purchased horsemeat; ABP attributed the contamination to continental suppliers in the Netherlands and Poland.",
          source: "Food Safety Authority of Ireland (FSAI), January 2013; Irish Times / Wikipedia",
          url: "https://en.wikipedia.org/wiki/2013_horse_meat_scandal"
        },
        {
          text: "Four ABP Food Group subsidiaries were accused of supplying adulterated meat during the 2013 scandal: Silvercrest Foods (Co. Monaghan), Dalepak (North Yorkshire), Freshlink (Glasgow) and ABP Nenagh (Co. Tipperary).",
          source: "Wikipedia – 2013 horse meat scandal",
          url: "https://en.wikipedia.org/wiki/2013_horse_meat_scandal"
        }
      ]
    },
    {
      label: "Tax",
      badgeClass: "badge-tax",
      findings: [
        {
          text: "A 2019 investigation by the Irish Farmers Journal found ABP at the centre of a complex structure of private companies with no employees, based in tax havens across Europe, whose purpose was to provide intercompany loans to ABP subsidiaries. ABP Group is itself registered in Jersey. The IFJ estimated ABP's effective tax rate at approximately 0.3% at the time, compared to Ireland's nominal 12.5% corporate rate.",
          source: "Irish Farmers Journal investigative report, 2019",
          url: "https://www.wsws.org/en/articles/2026/02/06/omdl-f06.html"
        },
        {
          text: "A joint investigation by The Guardian and Lighthouse Reports / Follow The Money found that ABP's Dutch entity Trojaan Investering BV — which had no employees — held around €420 million in assets and made €161 million in profits between 2013 and 2017, paying an effective tax rate of 0.93%. Trojaan received more than €700 million in zero-interest loans from group companies in Ireland and Jersey and re-loaned to ABP UK at 5% interest, enabling Irish and UK subsidiaries to deduct interest payments from their taxable profits. University of Michigan law professor Reuven Avi-Yonah, a former OECD consultant, described the structure as 'aggressive tax avoidance'. ABP stated it 'remained tax compliant in all jurisdictions'.",
          source: "The Guardian / Lighthouse Reports / Follow The Money, September 2022",
          url: "https://www.lighthousereports.com/investigation/big-meat-fat-subsidies-thin-taxes/"
        }
      ]
    },
    {
      label: "Governance & Tribunal Findings",
      badgeClass: "badge-political",
      findings: [
        {
          text: "The 1994 Beef Tribunal (chaired by High Court President Liam Hamilton) found that 'widespread tax evasion was practiced in all plants investigated with the knowledge of management in the Goodman group.' The Tribunal also found irregularities and malpractices but stopped short of finding that all conduct was carried out with the direct personal knowledge of Larry Goodman.",
          source: "Hamilton Beef Tribunal Report, 1994; Irish Examiner",
          url: "https://www.irishexaminer.com/business/arid-20220037.html"
        },
        {
          text: "During the 2019 beef farmers' blockade, ABP's subsidiary C&D Petfoods obtained court injunctions against protesting farmers. Multiple TDs in the Dáil accused ABP Food Group of 'holding the whole industry to ransom' by refusing to lift injunctions and thereby stalling the beef taskforce. Independent TD Denis Naughten told the Dáil it was 'unacceptable' that one organisation was blocking the taskforce process.",
          source: "Irish Times, November 2019; Oireachtas Dáil record",
          url: "https://www.irishtimes.com/news/politics/larry-goodman-firm-accused-of-holding-beef-industry-to-ransom-1.4097092"
        }
      ]
    }
  ],
  alternatives: []
},,

"ornua": {
  type: "company",
  tags: ["ireland"],
  name: "Ornua (Irish Dairy Board)",
  subtitle: "Dairy Co-operative — Dublin, Ireland",
  corporate: {
    parent: null,
    subsidiaries: [
      { name: "Kerrygold (brand)", note: "Ireland's most recognised dairy export brand; sold in 110+ countries", compliance: "mixed" },
      { name: "Ornua Foods", note: "Consumer brands division including Kerrygold butter and cheese", compliance: "mixed" },
      { name: "Ornua Ingredients", note: "B2B dairy ingredients, including fat-filled milk powder for African markets", compliance: "concern" }
    ],
    shareholders: [
      { name: "Irish dairy co-operatives (members)", note: "Farmer-owned co-operative structure established by Oireachtas Act (Dairy Produce Marketing Act 1961)", compliance: "ok" }
    ]
  },
  products: [
    { name: "Kerrygold Butter", flags: [] },
    { name: "Kerrygold Avantage (fat-filled milk powder)", flags: ["labelling concerns — Global South markets"] },
    { name: "Dubliner / Pilgrim's Choice cheese", flags: [] }
  ],
  categories: [
    {
      label: "Supply Chain & Market Conduct",
      badgeClass: "badge-supply",
      findings: [
        {
          text: "A joint investigation by Noteworthy and Nigerian outlet Premium Times, published in 2024, found that Ornua's Kerrygold Avantage — a fat-filled milk powder (FFMP) product made from vegetable fats and skimmed milk powder rather than whole milk — was being marketed in West Africa alongside full-cream milk products in ways NGOs described as insufficiently transparent. Experts told the investigation that large volumes of cheap EU FFMP exports into West Africa have undercut local dairy farmers, driving many Nigerian dairy farmers out of business. Ornua did not respond to media queries about the advertising of the product at a 'World Milk Day' event in Lagos in June 2024.",
          source: "Noteworthy / The Journal / Premium Times investigative report, 2024",
          url: "https://www.thejournal.ie/creamed-off-dairy-exports-6461193-Aug2024/"
        }
      ]
    },
    {
      label: "Competition",
      badgeClass: "badge-political",
      findings: [
        {
          text: "Glanbia (formerly Avonmore/Waterford Group, an Ornua member co-op) and Sligo Dairies settled High Court proceedings with the Irish Competition Authority in 2003 over alleged price-fixing of liquid milk between 1995 and 1998. Both companies gave undertakings in the High Court to comply with the Competition Act 2002 and not engage in concerted practices to fix retail milk prices. RTÉ's Prime Time had alleged consumers were being overcharged by millions of euro by an illegal cartel in the liquid-milk industry, singling out Glanbia as the driving force. While Ornua itself was not a named defendant, its key member co-ops were central to the proceedings.",
          source: "Irish Times, July 2003; Competition Authority High Court proceedings",
          url: "https://www.irishtimes.com/news/glanbia-reaches-settlement-in-price-fixing-row-1.490484"
        }
      ]
    }
  ],
  alternatives: []
},,

"glanbia": {
  type: "company",
  tags: ["ireland"],
  name: "Glanbia plc",
  subtitle: "Dairy & Nutrition Group — Kilkenny, Ireland (NYSE/Euronext listed)",
  corporate: {
    parent: null,
    subsidiaries: [
      { name: "Glanbia Nutritionals", note: "Largest revenue division; B2B nutrition ingredients", compliance: "ok" },
      { name: "Glanbia Performance Nutrition", note: "Optimum Nutrition, BSN, Isopure brands", compliance: "ok" },
      { name: "Glanbia Ingredients Ireland", note: "Dairy ingredients processing; subject to CCPC merger inquiry re Wexford Creamery", compliance: "mixed" },
      { name: "Wexford Creamery (70% stake)", note: "Acquired following CCPC Phase 2 investigation; cleared without conditions", compliance: "mixed" }
    ],
    shareholders: [
      { name: "Glanbia Co-operative Society", note: "Farmer-owned co-op; largest single shareholder in listed Glanbia plc", compliance: "ok" },
      { name: "Institutional investors (NYSE/Euronext)", note: "Publicly listed", compliance: "unclear" }
    ]
  },
  products: [
    { name: "Optimum Nutrition (protein supplements)", flags: [] },
    { name: "Dairy ingredients (cheese, whey)", flags: [] },
    { name: "Avonmore milk brand", flags: [] }
  ],
  categories: [
    {
      label: "Competition",
      badgeClass: "badge-political",
      findings: [
        {
          text: "Glanbia (then trading as the Avonmore/Waterford Group) and Sligo Dairies settled High Court proceedings with the Irish Competition Authority in July 2003 over alleged price-fixing of liquid milk between 1995 and 1998. Both companies gave undertakings in the High Court to comply with the Competition Act 2002 and not engage in concerted practices to fix retail milk prices. RTÉ Prime Time had alleged consumers were being ripped off by millions of euro by an illegal milk cartel, with Glanbia identified as the driving force.",
          source: "Irish Times, July 2003; Irish Competition Authority proceedings",
          url: "https://www.irishtimes.com/news/glanbia-reaches-settlement-in-price-fixing-row-1.490484"
        },
        {
          text: "The Competition Authority (now CCPC) launched a full Phase 2 investigation into Glanbia Ingredients Ireland's proposed acquisition of 70% of Wexford Creamery in 2014, stating it was 'unable to conclude that the acquisition will not substantially lessen competition' in Irish dairy markets. The deal was ultimately cleared without conditions following the investigation.",
          source: "Irish Times, 2014; Competition Authority",
          url: "https://www.irishtimes.com/business/agribusiness-and-food/competition-authority-to-launch-full-investigation-into-glanbia-s-purchase-of-wexford-creamery-1.1717085"
        }
      ]
    }
  ],
  alternatives: []
},,

"bord_na_mona": {
  type: "company",
  tags: ["ireland"],
  name: "Bord na Móna",
  subtitle: "Semi-State Energy & Land Company — Newbridge, Co. Kildare",
  corporate: {
    parent: { name: "Irish State (via ESRI holdings)", note: "Semi-state company; majority government-owned. Formerly Ireland's dominant peat extractor; ceased all commercial peat harvesting in 2020 and is transitioning to renewables and land rehabilitation.", compliance: "mixed", link: "https://www.bordnamona.ie" },
    subsidiaries: [
      { name: "Bord na Móna Renewables", note: "Wind, solar and biomass energy; core of post-peat transition", compliance: "ok" },
      { name: "Bord na Móna Horticulture", note: "Sold to Westland Horticulture in 2019", compliance: "unclear" }
    ],
    shareholders: [
      { name: "Irish State", note: "Majority owner via government equity; ESB holds minority stake", compliance: "mixed" }
    ]
  },
  products: [
    { name: "Wind & solar energy", flags: [] },
    { name: "Peat briquettes (production ceased 2020)", flags: ["historical — unassessed extraction"] },
    { name: "Peatland rehabilitation (active)", flags: [] }
  ],
  categories: [
    {
      label: "Environment",
      badgeClass: "badge-env",
      findings: [
        {
          text: "The European Commission acknowledged in its June 2026 referral of Ireland to the European Court of Justice (ECJ) that Bord na Móna had, prior to 2020, conducted industrial peat extraction on sites 'without an environmental impact assessment' — in breach of EU EIA Directive requirements. The Commission noted that rehabilitation of Bord na Móna lands is now underway, 'largely funded by the EU through its Recovery and Resilience Facility.'",
          source: "European Commission / RTÉ News, June 2026; European Court of Justice referral",
          url: "https://www.rte.ie/news/europe/2026/0604/1576743-eu-ireland/"
        },
        {
          text: "Friends of the Irish Environment (FIE) documented that Bord na Móna continued extracting peat from its 80,000-hectare landbank after a 2019 High Court ruling required planning permission for such extraction, leading FIE to accuse the semi-state of taking an 'enforcement holiday'. The group described Bord na Móna as having 'declared Brexit for its 80,000 hectares' in defiance of the court order, while simultaneously restricting individual turbary rights holders from cutting on Bord na Móna bogs.",
          source: "Friends of the Irish Environment statement / High Court proceedings, 2019–2020",
          url: "https://friendsoftheirishenvironment.org/bord-na-mona-enforcement-holiday-flies-in-the-face-of-a-high-court-judgment"
        },
        {
          text: "The EPA's 2025 report on large-scale illegal peat extraction noted that Bord na Móna operated nine peatland complexes under EPA licence until ceasing operations in 2020, and that almost 19,000 hectares (57% of licensed peatlands) had been rehabilitated by end of 2024, with 14,139 hectares still to be rehabilitated. The EPA cited Bord na Móna as a positive example of post-extraction rehabilitation, contrasting it with 38 wholly illegal private operations.",
          source: "EPA Report: Large Scale Illegal Peat Extraction in Ireland, June 2025",
          url: "https://www.epa.ie/news-releases/news-releases-2025/operators-engaged-in-large-scale-unauthorised-peat-harvesting-activities-are-in-flagrant-violation-of-environmental-law.php"
        }
      ]
    }
  ],
  alternatives: []
},,

"dawn_meats": {
  type: "company",
  tags: ["ireland"],
  name: "Dawn Meats",
  subtitle: "Meat Processor — Waterford, Ireland",
  corporate: {
    parent: { name: "Dawn Meats Group", note: "Privately held; one of Europe's largest beef and lamb processors with operations in Ireland, UK and continental Europe. CEO: Niall Browne.", compliance: "mixed", link: "https://www.dawnmeats.com" },
    subsidiaries: [
      { name: "Dawn Meats (Ireland)", note: "Multiple plants including Waterford (Grannagh) and others", compliance: "mixed" },
      { name: "Dawn Meats (UK)", note: "UK processing operations", compliance: "mixed" }
    ],
    shareholders: [
      { name: "Private family / management ownership", note: "Privately held; no public shareholding", compliance: "unclear" }
    ]
  },
  products: [
    { name: "Fresh beef & lamb", flags: [] },
    { name: "Processed/packaged meat", flags: ["WRC findings re plant conditions"] }
  ],
  categories: [
    {
      label: "Labour & Workers' Rights",
      badgeClass: "badge-labour",
      findings: [
        {
          text: "The Workplace Relations Commission (WRC) ruled against Dawn Meats in July 2024, awarding €15,000 to former Waterford plant worker Abdullah Aljaber after finding the company discriminated against him under the Employment Equality Act 1998 on grounds of disability. The WRC found Dawn Meats failed to provide reasonable accommodation after he suffered a back injury sustained while carrying 25kg bags of meat in subzero conditions on a production line. His employment was terminated while he was on medical leave and awaiting surgery.",
          source: "WRC determination; RTÉ News, July 2024",
          url: "https://www.rte.ie/news/business/2024/0722/1461230-dawn-meats-ordered-to-pay-worker-15k-for-discrimination/"
        },
        {
          text: "At WRC hearings in 2022 and 2023 relating to the same worker, Dawn Meats twice sought press reporting restrictions — both refused by the WRC adjudicator, who said she had 'no power' to restrict press reporting. The worker had alleged that during the Covid-19 period, production pressure led to burgers being picked up from the floor and returned to packaging lines. The company's former health and safety officer denied this under oath. The worker also made a protected disclosure to the WRC; Dawn Meats' IBEC representative described the disclosure as 'an attempt to defame and embarrass the respondent'.",
          source: "Irish Times / RTÉ News, December 2022 and November 2023",
          url: "https://www.irishtimes.com/crime-law/courts/2022/12/01/worker-alleges-fallen-burgers-put-back-on-the-line-at-dawn-meats-as-press-gagging-order-refused/"
        },
        {
          text: "The WRC awarded €12,566 to former Dawn Meats Grannagh plant worker Aeron James in May 2022, finding his dismissal 'both substantively and procedurally unfair'. The WRC found that Dawn Meats had hired a private investigator to conduct covert surveillance of the worker at his family farm while he was on certified sick leave, and that the company had failed to properly inform him of the nature of the gross misconduct allegations before suspending him — in breach of its own disciplinary policy. SIPTU called the outcome a vindication of workers' privacy rights.",
          source: "Irish Farmers Journal / WRC determination, May 2022",
          url: "https://www.farmersjournal.ie/news/news/dawn-meats-ordered-to-pay-farmer-ex-worker-over-12-550-695736"
        }
      ]
    }
  ],
  alternatives: []
},,

"axa_ireland": {
  type: "company",
  tags: ["ireland"],
  name: "AXA Ireland",
  subtitle: "Insurance Group — Dublin, Ireland",
  corporate: {
    parent: { name: "AXA SA", note: "French multinational insurer; AXA Ireland comprises AXA Insurance DAC (non-life, motor, home) and AXA Life Europe DAC (life/pensions/cross-border). AXA is the second-largest non-life insurer in Ireland.", compliance: "mixed", link: "https://www.axa.ie" },
    subsidiaries: [
      { name: "AXA Insurance DAC", note: "Non-life insurance (motor, home, commercial); authorised by Central Bank of Ireland", compliance: "mixed" },
      { name: "AXA Life Europe DAC", note: "Dublin-based life insurer operating cross-border into Europe; fined €3.64m in 2022", compliance: "concern" }
    ],
    shareholders: [
      { name: "AXA SA (Paris)", note: "Publicly listed on Euronext Paris", compliance: "mixed" }
    ]
  },
  products: [
    { name: "Motor insurance", flags: ["CCPC price-signalling investigation"] },
    { name: "Home insurance", flags: [] },
    { name: "Life & pensions (cross-border)", flags: ["Central Bank fine 2022"] }
  ],
  categories: [
    {
      label: "Regulatory Fines — Central Bank",
      badgeClass: "badge-political",
      findings: [
        {
          text: "The Central Bank of Ireland fined AXA Insurance Limited €675,000 and reprimanded it in July 2016 for breaches of Minimum Competency Requirements and the Consumer Protection Code 2012. The breaches occurred between January 2008 and April 2012, during which more than 58,000 insurance claims were handled by staff not supervised by appropriately accredited individuals and who failed to refer customer requests to qualified staff. A further breach occurred between January and June 2014, when AXA failed to acknowledge, update, or resolve customer complaints within the required timeframes. The €675,000 was the maximum fine the Central Bank could impose at the time.",
          source: "Central Bank of Ireland Settlement Agreement; Irish Times / The Journal, July 2016",
          url: "https://www.centralbank.ie/news/article/settlement-agreement-AXA-insurance-limited"
        },
        {
          text: "The Central Bank of Ireland fined AXA Life Europe DAC (ALE) €3,640,000 and reprimanded it in December 2022 for three admitted breaches covering the period 2006–2019: failure to identify and manage risks arising from approximately 30,000 policies sold through its German branch (TwinStar product); failure to establish effective conflict of interest policies and procedures; and failure to conduct an adequate conflict of interest assessment in 2018. The original fine was €5.2 million, reduced by 30% under the early settlement discount scheme.",
          source: "Central Bank of Ireland enforcement action, December 2022; Irish Times",
          url: "https://www.centralbank.ie/news/article/enforcement-action-axa-life-europe-dac-fined-3-640-000-and-reprimanded-by-the-central-bank-of-ireland-for-failures-in-corporate-governance-and-risk-management-and-handling-of-conflicts-of-interest-9-december-2022"
        }
      ]
    },
    {
      label: "Competition",
      badgeClass: "badge-political",
      findings: [
        {
          text: "The Competition and Consumer Protection Commission (CCPC) issued preliminary findings in September 2020 to AXA Insurance DAC and five other insurers (AIG, Allianz, Aviva, FBD, AA Ireland) stating it had 'reasonable grounds to suspect' they engaged in anti-competitive price-signalling in the private motor insurance market between January 2015 and September 2016. In August 2021, AXA entered into a legally binding agreement with the CCPC to reform its internal competition law compliance programme, including mandatory annual reporting, independent expert auditing, and compulsory training. The CCPC explicitly stated it was 'not giving the industry a clean bill of health' and wrote to the Central Bank of Ireland raising concerns about 'broader cultural concerns' in the sector.",
          source: "CCPC enforcement action and final report, August 2021; RTÉ News / Irish Times",
          url: "https://www.ccpc.ie/business/enforcement/civil-competition-enforcement/closed-investigations/private-motor-insurance/"
        }
      ]
    }
  ],
  alternatives: []
},,

"aviva_ireland": {
  type: "company",
  tags: ["ireland"],
  name: "Aviva Ireland",
  subtitle: "Insurance Group — Dublin, Ireland",
  corporate: {
    parent: { name: "Aviva plc", note: "UK-listed insurer; Irish operations include Aviva Insurance Ireland DAC (non-life) and Aviva Life and Pensions Ireland DAC", compliance: "mixed", link: "https://www.aviva.ie" },
    subsidiaries: [
      { name: "Aviva Insurance Ireland DAC", note: "Non-life; motor, home, commercial", compliance: "mixed" },
      { name: "Aviva Life and Pensions Ireland DAC", note: "Life, pensions and investment products", compliance: "mixed" }
    ],
    shareholders: [
      { name: "Aviva plc (LSE: AV.)", note: "Publicly listed on London Stock Exchange", compliance: "mixed" }
    ]
  },
  products: [
    { name: "Motor insurance", flags: ["CCPC price-signalling investigation"] },
    { name: "Home insurance", flags: [] },
    { name: "Life & pensions", flags: ["Central Bank fine 2012"] }
  ],
  categories: [
    {
      label: "Regulatory Fines — Central Bank",
      badgeClass: "badge-political",
      findings: [
        {
          text: "The Central Bank of Ireland fined Aviva Life and Pensions Ireland Limited €2.45 million in 2012 for breaches of investment regulations relating to its securities lending programme. The Central Bank found that Aviva had outsourced investment activity to its group without maintaining adequate investment policies, procedures or quantitative parameters to manage that activity in a way appropriate to the firm's balance sheet, and without sufficient information to properly monitor and control the outsourced activity. The Central Bank stated: 'It is inadequate and unacceptable for firms to rely on group controls or group limits.' Aviva accepted the findings and stated none of the breaches had affected clients.",
          source: "Central Bank of Ireland settlement; Securities Finance Times, December 2012",
          url: "https://www.securitiesfinancetimes.com/securitieslendingnews/regulationarticle.php?article_id=218477"
        }
      ]
    },
    {
      label: "Competition",
      badgeClass: "badge-political",
      findings: [
        {
          text: "The CCPC issued preliminary findings in September 2020 to Aviva Insurance Ireland DAC and five other insurers stating it had reasonable grounds to suspect anti-competitive price-signalling in the private motor insurance market between January 2015 and September 2016. Aviva entered into legally binding commitments with the CCPC in August 2021 to reform its competition law compliance programme. The CCPC wrote to the Central Bank of Ireland outlining concerns about wider 'cultural' issues in the insurance sector following the investigation.",
          source: "CCPC enforcement action, August 2021; CCPC final report",
          url: "https://www.ccpc.ie/business/enforcement/civil-competition-enforcement/closed-investigations/private-motor-insurance/"
        }
      ]
    }
  ],
  alternatives: []
},,

"fbd_insurance": {
  type: "company",
  tags: ["ireland"],
  name: "FBD Insurance",
  subtitle: "Insurance — Dublin, Ireland (Irish-owned)",
  corporate: {
    parent: null,
    subsidiaries: [
      { name: "FBD Insurance plc", note: "Non-life insurer; publicly listed on Euronext Dublin. Originally farmer-owned; now has institutional shareholders.", compliance: "mixed" }
    ],
    shareholders: [
      { name: "FBD Holdings plc (Euronext Dublin: FBD)", note: "Parent holding company; institutional and retail shareholders", compliance: "mixed" }
    ]
  },
  products: [
    { name: "Motor insurance", flags: ["CCPC price-signalling investigation"] },
    { name: "Farm & agricultural insurance", flags: [] },
    { name: "Home & commercial insurance", flags: [] }
  ],
  categories: [
    {
      label: "Competition",
      badgeClass: "badge-political",
      findings: [
        {
          text: "The CCPC issued preliminary findings in September 2020 to FBD Insurance plc and five other insurers (AIG, Allianz, AXA, Aviva, AA Ireland) stating it had 'reasonable grounds to suspect' anti-competitive price-signalling in the private motor insurance market between January 2015 and September 2016. The CCPC's investigation found that the parties made public statements that appeared to forecast, with confidence, that motor insurance premiums would rise — conduct that can reduce competition by signalling to rivals that price increases will not be undercut. Motor insurance premiums rose more than 70% over three years before peaking in 2016 according to CSO data. FBD declined to comment when the preliminary findings were issued. FBD entered into legally binding commitments with the CCPC in August 2021 to reform its internal competition law compliance programme. All parties denied breaching competition law and there was no finding of liability.",
          source: "CCPC enforcement action and final report, August 2021; Irish Examiner / Irish Times",
          url: "https://www.ccpc.ie/business/enforcement/civil-competition-enforcement/closed-investigations/private-motor-insurance/"
        }
      ]
    }
  ],
  alternatives: []
},,

"irish_life": {
  type: "company",
  tags: ["ireland"],
  name: "Irish Life",
  subtitle: "Life & Pensions — Dublin, Ireland",
  corporate: {
    parent: { name: "Great-West Lifeco Inc.", note: "Canadian financial services group (TSX: GWO); acquired Irish Life from the Irish State in 2013 for €1.3 billion. Irish Life is Ireland's largest life and pensions provider.", compliance: "mixed", link: "https://www.irishlife.ie" },
    subsidiaries: [
      { name: "Irish Life Assurance plc", note: "Core life, pensions and investment entity; over 1.3 million customers", compliance: "mixed" },
      { name: "Irish Life Health dac", note: "Private health insurance; approximately 21% market share in Ireland", compliance: "mixed" },
      { name: "Irish Life Investment Managers (ILIM)", note: "Asset management; €70bn+ assets under management", compliance: "ok" }
    ],
    shareholders: [
      { name: "Great-West Lifeco Inc. (TSX: GWO)", note: "Canadian parent; acquired Irish Life from Irish State in 2013", compliance: "mixed" }
    ]
  },
  products: [
    { name: "Life insurance & mortgage protection", flags: [] },
    { name: "Pension schemes", flags: [] },
    { name: "Irish Life Health (health insurance)", flags: [] },
    { name: "Investment products", flags: [] }
  ],
  categories: [
    {
      label: "Regulatory Findings",
      badgeClass: "badge-political",
      findings: [
        {
          text: "Irish Life & Permanent plc (the then-parent of Irish Life Assurance) was fined by the Financial Regulator (predecessor to the Central Bank) for reporting breaches. Irish Life Assurance has historically topped the Financial Services and Pensions Ombudsman's complaints table, with Irish Life listed as the insurer with the highest number of complaints upheld against it in multiple years — indicating a pattern of consumer grievances requiring independent adjudication.",
          source: "Financial Services and Pensions Ombudsman annual reports; Reuters reporting on Irish Life & Permanent fine",
          url: "https://grokipedia.com/page/Irish_Life"
        }
      ]
    }
  ],
  alternatives: []
},,

"zurich_ireland": {
  type: "company",
  tags: ["ireland"],
  name: "Zurich Ireland",
  subtitle: "Insurance & Life Assurance — Dublin, Ireland",
  corporate: {
    parent: { name: "Zurich Insurance Group AG", note: "Swiss multinational insurer (SIX: ZURN); Irish operations include Zurich Insurance Europe AG (ZIE, formerly Zurich Insurance plc) and Zurich Life Assurance plc. ZIE is Zurich's EU insurance hub post-Brexit.", compliance: "mixed", link: "https://www.zurich.ie" },
    subsidiaries: [
      { name: "Zurich Insurance Europe AG (ZIE)", note: "Non-life insurer; EU hub; renamed from Zurich Insurance plc on 1 January 2024. Authorised by Central Bank of Ireland.", compliance: "mixed" },
      { name: "Zurich Life Assurance plc", note: "Life, pensions and investments; regulated by Central Bank of Ireland", compliance: "mixed" }
    ],
    shareholders: [
      { name: "Zurich Insurance Group AG (SIX: ZURN)", note: "Swiss-listed global insurer", compliance: "mixed" }
    ]
  },
  products: [
    { name: "Motor & home insurance", flags: [] },
    { name: "Life & pensions", flags: [] },
    { name: "Business insurance", flags: [] }
  ],
  categories: [
    {
      label: "Competition",
      badgeClass: "badge-political",
      findings: [
        {
          text: "Zurich Insurance Group, the parent of Zurich Ireland, was among the insurers implicated in the wider Irish motor insurance sector CCPC investigation that resulted in binding commitments from AXA, Aviva, FBD, AIG, Allianz and AA Ireland in 2021 relating to suspected price-signalling between 2015 and 2016. Zurich Ireland's non-life operations were not among the six directly named entities who entered commitments — however the CCPC noted broader 'cultural concerns' in the sector and wrote to the Central Bank of Ireland following the investigation.",
          source: "CCPC final report on private motor insurance sector, August 2021; Irish Times",
          url: "https://www.ccpc.ie/business/enforcement/civil-competition-enforcement/closed-investigations/private-motor-insurance/"
        }
      ]
    },
    {
      label: "Consumer Protection",
      badgeClass: "badge-data",
      findings: [
        {
          text: "The Central Bank of Ireland published a warning notice in September 2023 alerting the public that a fraudulent entity calling itself 'Zurich Ireland Plc' was operating as an investment firm without authorisation, cloning the identity of the legitimate Zurich Insurance plc. The Central Bank directed consumers to verify that any firm they deal with is properly authorised, following discovery of the clone firm's activity.",
          source: "Central Bank of Ireland Warning Notice, September 2023",
          url: "https://www.centralbank.ie/news/article/warning-notice-central-bank-of-ireland-issues-warning-on-unauthorised-firm-----fraudulent-entity-(zurich-ireland-plc)-clones-authorised-firm-zurich-insurance-plc-21-sep-2023"
        }
      ]
    }
  ],
  alternatives: []
},,

"an_post": {
  type: "company",
  tags: ["ireland"],
  name: "An Post",
  subtitle: "Postal & Logistics Services — Dublin, Ireland (Semi-State)",
  corporate: {
    parent: { name: "Irish State", note: "100% state-owned commercial semi-state company; regulated by ComReg (communications) and the Commission for Communications Regulation for postal services", compliance: "mixed", link: "https://www.anpost.com" },
    subsidiaries: [
      { name: "An Post Commerce", note: "Parcel and e-commerce logistics; competing with private courier market", compliance: "ok" },
      { name: "One4all (gift cards)", note: "Gift card and payments subsidiary", compliance: "ok" },
      { name: "An Post Money", note: "Financial services via post office network", compliance: "ok" }
    ],
    shareholders: [
      { name: "Irish State (Minister for Environment)", note: "100% state-owned", compliance: "ok" }
    ]
  },
  products: [
    { name: "Postal delivery (letters/parcels)", flags: [] },
    { name: "An Post Commerce (logistics)", flags: [] },
    { name: "An Post Money (financial services)", flags: [] }
  ],
  categories: [
    {
      label: "Labour & Industrial Relations",
      badgeClass: "badge-labour",
      findings: [
        {
          text: "An Post has faced recurring industrial disputes over pay and conditions, including threatened strike action by postal workers represented by the Communications Workers Union (CWU). In 2019, a major restructuring agreement — involving approximately 2,000 redundancies — was agreed under Labour Court oversight following sustained industrial unrest, as the company sought to address losses driven by declining letter volumes and competition in the parcels market.",
          source: "Irish Times / RTÉ reporting on An Post restructuring, 2019",
          url: "https://www.rte.ie/news/business/2019/0306/1034268-an-post/"
        }
      ]
    },
    {
      label: "Postal Service Regulation",
      badgeClass: "badge-political",
      findings: [
        {
          text: "ComReg, the Irish communications regulator, monitors An Post's compliance with universal service obligations (USO) — including delivery targets, pricing and accessibility — as Ireland's designated universal postal service provider. An Post has faced criticism from ComReg and the public accounts process over declining delivery standards and post office closures, particularly in rural areas, as the company restructures around parcel volumes.",
          source: "ComReg Annual Reports; Public Accounts Committee hearings on An Post",
          url: "https://www.comreg.ie/"
        }
      ]
    }
  ],
  alternatives: []
},,

"dhl_ireland": {
  type: "company",
  tags: ["ireland"],
  name: "DHL Ireland",
  subtitle: "Logistics & Courier — Dublin, Ireland",
  corporate: {
    parent: { name: "Deutsche Post DHL Group", note: "German multinational (XETRA: DPW); one of the world's largest logistics companies. Irish operations include DHL Express Ireland and DHL Supply Chain Ireland.", compliance: "mixed", link: "https://www.dhl.com/ie-en" },
    subsidiaries: [
      { name: "DHL Express Ireland", note: "International courier and express services", compliance: "mixed" },
      { name: "DHL Supply Chain Ireland", note: "Warehousing, fulfilment, and contract logistics", compliance: "mixed" }
    ],
    shareholders: [
      { name: "Deutsche Post AG (XETRA: DPW)", note: "German state-backed and publicly listed", compliance: "mixed" }
    ]
  },
  products: [
    { name: "International express delivery", flags: [] },
    { name: "Supply chain & warehousing", flags: [] },
    { name: "E-commerce fulfilment", flags: [] }
  ],
  categories: [
    {
      label: "Labour (Parent Company — Global)",
      badgeClass: "badge-labour",
      findings: [
        {
          text: "Deutsche Post DHL Group's German operations have faced significant industrial action. The union Ver.di has called repeated strikes at DHL's German parcel sorting centres over pay disputes, including a major round of strike action in 2023 demanding an 15% wage increase as workers faced declining real wages due to inflation. The labour disputes affected parcel delivery across Germany and drew attention to conditions across the DHL Group's logistics workforce more broadly.",
          source: "Reuters / BBC reporting on DHL Germany strikes, 2023",
          url: "https://www.reuters.com/business/dhl-workers-strike-germany-pay-talks-2023-03-27/"
        }
      ]
    }
  ],
  alternatives: []
},,

"deliveroo_ireland": {
  type: "company",
  tags: ["ireland"],
  name: "Deliveroo Ireland",
  subtitle: "Food Delivery Platform — Dublin, Ireland",
  corporate: {
    parent: { name: "Deliveroo plc", note: "UK-listed (LSE: ROO); food delivery platform operating in Ireland and multiple European and Middle Eastern markets.", compliance: "concern", link: "https://www.deliveroo.ie" },
    subsidiaries: [
      { name: "Roofoods Ireland Limited", note: "Irish registered entity operating the Deliveroo platform in Ireland", compliance: "concern" }
    ],
    shareholders: [
      { name: "Amazon.com Inc.", note: "Holds significant stake in Deliveroo plc; invested alongside 2021 IPO", compliance: "mixed" },
      { name: "Public institutional investors (LSE: ROO)", note: "Publicly listed since April 2021", compliance: "unclear" }
    ]
  },
  products: [
    { name: "Food delivery platform (Ireland)", flags: ["gig worker misclassification concerns"] },
    { name: "Deliveroo Plus (subscription)", flags: [] }
  ],
  categories: [
    {
      label: "Labour & Workers' Rights",
      badgeClass: "badge-labour",
      findings: [
        {
          text: "In November 2023, the UK Supreme Court upheld seven years of Deliveroo's classification of its riders as self-employed independent contractors, not workers (IWGB v CAC [2023] UKSC 43). The court found riders were not 'in an employment relationship' due to an unlimited right of substitution — a contractual clause introduced by Deliveroo shortly before the original Central Arbitration Committee hearing. Academic and union critics noted the substitution clause was inserted specifically to defeat the workers' claim. The ruling denied riders trade union collective bargaining rights under Article 11 of the European Convention on Human Rights. Deliveroo riders in Ireland operate under the same self-employed model and are subject to the same limitations on union recognition, sick pay, minimum wage protections, and collective bargaining.",
          source: "UK Supreme Court, IWGB v CAC [2023] UKSC 43, November 2023; The Conversation / Dublin Inquirer",
          url: "https://en.wikipedia.org/wiki/IWGB_v_CAC"
        },
        {
          text: "An Oireachtas Committee on Enterprise, Trade and Employment heard in March 2024 that gig economy delivery workers in Ireland — including those on platforms like Deliveroo — face conditions including no access to bathroom facilities, earnings uncertainty, and being denied future work assignments for taking a day off. SIPTU described the spread of the platform economy as 'an excuse to step back' from workers' rights, and called for wages to be based on hourly rates rather than by task, noting workers spend substantial time waiting for orders without pay.",
          source: "Oireachtas Committee on Enterprise, Trade and Employment; The Journal, March 2024",
          url: "https://www.thejournal.ie/gig-platform-workers-oireachtas-committee-6318262-Mar2024/"
        }
      ]
    }
  ],
  alternatives: []
},,

"gls_ireland": {
  type: "company",
  tags: ["ireland"],
  name: "GLS Ireland",
  subtitle: "Parcel Delivery — Dublin, Ireland",
  corporate: {
    parent: { name: "General Logistics Systems B.V. (GLS)", note: "Dutch-registered subsidiary of Royal Mail Group Ltd (UK). GLS operates pan-European parcel network; Irish operations handle domestic and cross-border parcels.", compliance: "mixed", link: "https://gls-ireland.com" },
    subsidiaries: [],
    shareholders: [
      { name: "Royal Mail Group Ltd (UK)", note: "UK-listed postal and logistics company; owns GLS European parcel network", compliance: "mixed" }
    ]
  },
  products: [
    { name: "Domestic parcel delivery (Ireland)", flags: [] },
    { name: "Cross-border / European parcel network", flags: [] }
  ],
  categories: [
    {
      label: "Labour (Parent Company — UK)",
      badgeClass: "badge-labour",
      findings: [
        {
          text: "GLS Ireland's parent Royal Mail Group has faced sustained industrial disputes in the UK. Between 2022 and 2023, postal workers represented by the Communication Workers Union (CWU) took 18 days of strike action at Royal Mail over pay, job security and working conditions — among the most significant UK postal strikes in decades. The dispute was resolved in July 2023 when members voted to accept a three-year pay deal. GLS's European operations are separate from the Royal Mail domestic network but share ultimate ownership.",
          source: "Wikipedia – 2022–2023 United Kingdom postal workers' strikes; BBC",
          url: "https://en.wikipedia.org/wiki/2022%E2%80%932023_United_Kingdom_postal_workers'_strikes"
        }
      ]
    }
  ],
  alternatives: []
},,

"fastway_couriers": {
  type: "company",
  tags: ["ireland"],
  name: "Fastway Couriers Ireland",
  subtitle: "Courier / Parcel Delivery — Rathcoole, Co. Dublin (in receivership from October 2025)",
  corporate: {
    parent: { name: "Nuvion Group (in receivership)", note: "Parent company Nuvion Group — which also owned Parcel Connect and Nügo — entered receivership on 28 October 2025. Mark Degnan and Brendan O'Reilly of Interpath Advisory appointed as receivers. Nuvion acquired Fastway in 2022.", compliance: "concern", link: null },
    subsidiaries: [
      { name: "Parcel Connect", note: "Sister brand; also in receivership from October 2025", compliance: "concern" }
    ],
    shareholders: [
      { name: "Nuvion Group (receivers: Interpath Advisory)", note: "In receivership as of October 2025", compliance: "concern" }
    ]
  },
  products: [
    { name: "Domestic parcel delivery (Ireland)", flags: ["receivership", "franchise payment failures"] },
    { name: "Parcel Connect (drop-off/collection)", flags: ["receivership"] }
  ],
  categories: [
    {
      label: "Labour & Corporate Governance",
      badgeClass: "badge-labour",
      findings: [
        {
          text: "Nuvion Group, parent of Fastway Couriers and Parcel Connect, entered receivership on 28 October 2025, leaving approximately 300 directly employed workers and 700+ franchisee and subcontractor couriers without wages from October onwards and in limbo with no ability to claim social welfare until a 30-day notification period expired. The company cited sustained inflation, rising operating costs and price pressures across the parcels market. Some franchisees had purchased delivery routes and stood to lose their entire investment.",
          source: "RTÉ News / Irish Examiner, October–November 2025",
          url: "https://www.rte.ie/news/ireland/2025/1103/1541873-fastway-couriers-protest/"
        },
        {
          text: "Fianna Fáil TD Tony McCormack told the Dáil in November 2025 that franchise operators described invoices going missing, payments being delayed or held back, and commissions not being paid at all in the lead-up to the collapse. Operators also described being required to submit to polygraph (lie detector) tests and make large cash payments as part of franchise purchase processes. McCormack questioned whether 'fraud or serious mismanagement' was involved and whether Nuvion's 2022 acquisition of Fastway was 'a case of vulture capitalism'. Tánaiste Simon Harris said the situation was 'extremely concerning' and committed to raising it with the Enterprise Minister.",
          source: "Dáil record / Irish Examiner, November 2025",
          url: "https://www.irishexaminer.com/news/politics/arid-41738289.html"
        }
      ]
    }
  ],
  alternatives: []
},,

"palantir": {
  type: "company",
  name: "Palantir Technologies",
  subtitle: "Data Analytics & Defence AI — Denver, Colorado / Dublin (EMEA)",
  corporate: {
    parent: null,
    subsidiaries: [
      { name: "Palantir Ireland (EMEA hub)", note: "Irish-registered entity; Palantir has used Ireland as part of its European operations structure", compliance: "concern" }
    ],
    shareholders: [
      { name: "Peter Thiel / Founders", note: "Co-founded by Peter Thiel (PayPal, Founders Fund); Thiel is a prominent Republican donor and Trump ally. CIA's venture arm In-Q-Tel was an early investor.", compliance: "concern" },
      { name: "Public institutional investors (NYSE: PLTR)", note: "Listed on NYSE", compliance: "unclear" }
    ]
  },
  products: [
    { name: "Palantir Gotham (military/intelligence targeting)", flags: ["Gaza targeting", "ICE immigration enforcement"] },
    { name: "Palantir Foundry (data integration platform)", flags: ["NHS data concerns"] },
    { name: "ImmigrationOS (US deportation tracking)", flags: ["human rights concerns"] }
  ],
  categories: [
    {
      label: "Military Targeting & Human Rights",
      badgeClass: "badge-political",
      findings: [
        {
          text: "Palantir's AI tools have reportedly been used by the Israeli Defence Forces (IDF) to identify lists of targets for drone and air strikes in Gaza. In October 2024, Storebrand Asset Management — one of the largest Nordic investors — sold its Palantir holdings over concerns that the company's work for the IDF could put the asset manager at risk of violating international law. Ireland's Swiss Defence Assessment: Switzerland's military completed a 20-page risk assessment in December 2024 concluding that data held by Palantir 'cannot be technically prevented' from being accessed by US intelligence services and recommended finding alternatives.",
          source: "Irish Times, December 2024; Swiss military risk assessment reported by The Small Business Cybersecurity Guy / Middle East Eye, 2024–2026",
          url: "https://www.irishtimes.com/business/2024/12/11/palantir-no-stranger-to-controversy-at-home-or-abroad/"
        },
        {
          text: "Palantir signed a deal with Israeli Prime Minister Benjamin Netanyahu's government in early 2024 to provide 'support for war-related missions.' Reports also indicate Palantir technology was used in the 2024 Lebanon pager attacks, which killed dozens and wounded thousands.",
          source: "Middle East Eye / The Lowdown, 2024–2026",
          url: "https://www.middleeasteye.net/news/palantir-why-israel-linked-surveillance-firm-embedded-britains-nhs"
        },
        {
          text: "Palantir was awarded a $30 million contract with US Immigration and Customs Enforcement (ICE) in April 2025 to build 'ImmigrationOS,' a system to track self-deportations, select arrest targets and increase deportation efficiency as part of the Trump administration's mass deportation programme. Palantir's US government contracts grew from $541 million in 2024 to $970 million in 2025.",
          source: "The Hill, 2026",
          url: "https://thehill.com/policy/technology/5667232-palantir-trump-administration-surveillance/"
        }
      ]
    },
    {
      label: "Irish Political Connection",
      badgeClass: "badge-political",
      tags: ["ireland"],
      findings: [
        {
          text: "Dublin Bay South TD Eoin Hayes (Social Democrats) was suspended from his parliamentary party in December 2024 after admitting he had misrepresented the timing of the sale of 7,000 Palantir shares worth €199,000. At a press conference Hayes stated he had sold his shares before entering politics; it emerged he had sold them in July 2024, a month after his election to Dublin City Council. Hayes had previously worked for Palantir from 2015 to 2017. The Social Democrats said the matter was 'serious' as media and the public must be able to rely on information from elected representatives.",
          source: "Irish Times / Irish Examiner, December 2024",
          url: "https://www.irishtimes.com/politics/2024/12/10/social-democrats-td-sold-shares-in-us-supplier-to-israeli-military-a-month-after-taking-council-seat/"
        }
      ]
    },
    {
      label: "Data Privacy & NHS",
      badgeClass: "badge-data",
      findings: [
        {
          text: "Palantir was awarded a £330 million contract in November 2023 to build and operate the NHS England Federated Data Platform (FDP), connecting data from up to 240 NHS organisations. The contract was heavily redacted — 259 of 272 pages in Part 2 were blacked out. Palantir's Gotham (military targeting) and Foundry (civilian data) platforms share cross-application interoperability, raising concerns among medical professionals about the potential for NHS data to flow through the same infrastructure used for military targeting. In early 2024, NHS England investigated Palantir for a potential breach of contract after it ran a covert influencer campaign against a prominent critic of the FDP.",
          source: "NHS England contract award; Middle East Eye; Medact briefing, 2024–2026",
          url: "https://www.medact.org/2026/resources/briefings/briefing-palantir-fdp/"
        }
      ]
    }
  ],
  alternatives: []
},,,

"raytheon": {
  type: "company",
  name: "Raytheon / RTX Corporation",
  subtitle: "Defence Contractor — Arlington, Virginia, USA",
  corporate: {
    parent: { name: "RTX Corporation (formerly Raytheon Technologies)", note: "NYSE: RTX; formed by 2020 merger of Raytheon Company and United Technologies Corp. Raytheon Company remains a subsidiary of RTX. RTX has significant Irish operations — its Pratt & Whitney engine division and Collins Aerospace division both operate in Ireland.", compliance: "concern", link: "https://www.rtx.com" },
    subsidiaries: [
      { name: "Pratt & Whitney (Ireland)", note: "Engine overhaul operations at Shannon and Dublin; major Irish employer", compliance: "mixed" },
      { name: "Collins Aerospace (Ireland)", note: "Aerospace systems manufacturing; Irish operations", compliance: "mixed" }
    ],
    shareholders: [
      { name: "Institutional investors (NYSE: RTX)", note: "Publicly listed; major US defence stock", compliance: "unclear" }
    ]
  },
  products: [
    { name: "Patriot missile systems", flags: ["FCPA — inflated pricing to US DoD"] },
    { name: "Radar systems", flags: ["FCPA — inflated pricing to US DoD"] },
    { name: "Missile defence & guided weapons", flags: [] }
  ],
  categories: [
    {
      label: "Bribery, Fraud & Export Violations",
      badgeClass: "badge-political",
      findings: [
        {
          text: "In October 2024, Raytheon Company (RTX subsidiary) agreed to pay over $950 million to resolve allegations of FCPA bribery violations, defective pricing fraud against the US Department of Defense, and Arms Export Control Act violations. The DOJ found that Raytheon paid nearly $2 million in bribes to Qatari military officials via sham subcontracts with a supplier between 2011 and 2017 to obtain Qatari military defence contracts. Additionally, Raytheon paid more than $30 million to a Qatari agent who was a relative of the Qatari Emir and who had no prior background in military defence products. Raytheon entered two three-year Deferred Prosecution Agreements and was required to appoint an independent compliance monitor.",
          source: "SEC enforcement action; DOJ Deferred Prosecution Agreement, October 2024; Venable LLP analysis",
          url: "https://www.sec.gov/newsroom/press-releases/2024-171"
        },
        {
          text: "In the same October 2024 settlement, Raytheon admitted making false statements to the US Department of Defense about the cost of producing PATRIOT missile systems and a radar system during contract negotiations between approximately 2012 and 2017, netting more than $111 million in inflated contract prices. This formed the basis for the second-largest recorded False Claims Act settlement ($428 million). A whistleblower qui tam plaintiff received $4.2 million.",
          source: "DOJ Deferred Prosecution Agreement; Venable LLP, October 2024",
          url: "https://www.venable.com/insights/publications/2025/01/defense-contractor-resolves-doj-and-sec-fcpa"
        }
      ]
    }
  ],
  alternatives: []
},,,

"bae_systems": {
  type: "company",
  name: "BAE Systems",
  subtitle: "Defence & Aerospace Contractor — London, UK",
  corporate: {
    parent: null,
    subsidiaries: [
      { name: "BAE Systems Applied Intelligence (Ireland)", note: "Cyber intelligence and analytics operations in Dublin", compliance: "mixed" },
      { name: "BAE Systems (multiple UK/global)", note: "Largest UK defence contractor; significant Irish supplier relationships and Shannon layover operations", compliance: "mixed" }
    ],
    shareholders: [
      { name: "Institutional investors (LSE: BA.)", note: "Publicly listed on London Stock Exchange", compliance: "unclear" }
    ]
  },
  products: [
    { name: "Combat aircraft (Eurofighter Typhoon, F-35 components)", flags: [] },
    { name: "Naval vessels & armour", flags: [] },
    { name: "Cyber intelligence", flags: ["Ireland operations"] },
    { name: "Electronic warfare systems", flags: [] }
  ],
  categories: [
    {
      label: "Bribery & Anti-Corruption",
      badgeClass: "badge-political",
      findings: [
        {
          text: "BAE Systems pleaded guilty in February 2010 to a US Department of Justice charge of conspiracy to make false statements to the US Department of Defense in a written commitment to maintain an adequate anti-corruption compliance programme, and to omit material facts from export licence applications by failing to identify commissions paid to third parties. The DOJ imposed a $400 million criminal fine — one of the largest anti-corruption penalties at the time. BAE was also fined a separate £30 million by the UK Serious Fraud Office (SFO). The total combined penalty exceeded $445 million. The DOJ established that BAE had made payments through shell companies and third-party intermediaries including in Saudi Arabia, gaining more than $200 million through the false statements and disclosure failures.",
          source: "US Department of Justice, February 2010; SFO settlement",
          url: "https://www.justice.gov/archives/opa/pr/bae-systems-plc-pleads-guilty-and-ordered-pay-400-million-criminal-fine"
        }
      ]
    }
  ],
  alternatives: []
},,,

"lockheed_martin": {
  type: "company",
  name: "Lockheed Martin",
  subtitle: "Defence Contractor — Bethesda, Maryland, USA",
  corporate: {
    parent: null,
    subsidiaries: [
      { name: "Lockheed Martin Ireland", note: "Irish-registered entity; Lockheed Martin has had supply chain and Shannon fuel stop relationships with Ireland", compliance: "mixed" }
    ],
    shareholders: [
      { name: "Institutional investors (NYSE: LMT)", note: "Publicly listed; major US defence stock", compliance: "unclear" }
    ]
  },
  products: [
    { name: "F-35 Lightning II fighter jet", flags: [] },
    { name: "C-130 Hercules transport", flags: [] },
    { name: "Missile defence systems", flags: [] },
    { name: "Satellites & space systems", flags: [] }
  ],
  categories: [
    {
      label: "Bribery & Anti-Corruption",
      badgeClass: "badge-political",
      findings: [
        {
          text: "Lockheed Corporation (predecessor to Lockheed Martin) pleaded guilty in January 1995 to conspiracy to violate the anti-bribery and books-and-records provisions of the Foreign Corrupt Practices Act (FCPA), paying a criminal fine of $21.8 million and a civil fine of $3 million for bribing an Egyptian government official to secure a military aircraft sale. This was one of the first major corporate FCPA prosecutions after the statute was strengthened in 1988.",
          source: "US Department of Justice / FCPA Stanford Database, January 1995",
          url: "https://fcpa.stanford.edu/enforcement-action.html?id=24"
        },
        {
          text: "Lockheed Martin has faced multiple False Claims Act settlements with the US Department of Defense, including a $19.5 million investor misleading settlement in 2013 and a 2004 settlement for overcharging the government on defence contracts. The company has been one of the most persistent recipients of government fraud and ethics investigations among major defence contractors, according to Good Jobs First Violation Tracker data.",
          source: "Whistleblower attorneys analysis; Good Jobs First Violation Tracker",
          url: "https://www.whistleblowerattorneys.com/blog/lockheed-martin-settlement-unlikely-last"
        }
      ]
    }
  ],
  alternatives: []
},,,

"l3harris": {
  type: "company",
  name: "L3Harris Technologies",
  subtitle: "Defence & Intelligence Contractor — Melbourne, Florida, USA",
  corporate: {
    parent: null,
    subsidiaries: [
      { name: "L3Harris Ireland / WESCAM (Ireland-linked operations)", note: "L3Harris has electro-optical and signals intelligence products used by Irish Defence Forces and in European markets; sells tactical communications equipment to Irish military", compliance: "mixed" }
    ],
    shareholders: [
      { name: "Institutional investors (NYSE: LHX)", note: "Publicly listed; major US defence stock", compliance: "unclear" }
    ]
  },
  products: [
    { name: "Tactical radios & communications", flags: ["ITAR violations"] },
    { name: "Night vision & electro-optical systems", flags: [] },
    { name: "Electronic warfare systems", flags: [] },
    { name: "ISR (intelligence, surveillance, reconnaissance)", flags: [] }
  ],
  categories: [
    {
      label: "Export Control Violations",
      badgeClass: "badge-political",
      findings: [
        {
          text: "In September 2019, the US Department of State concluded a $13 million civil settlement with L3Harris Technologies for 131 alleged violations of the Arms Export Control Act (AECA) and International Traffic in Arms Regulations (ITAR) committed by Harris Corporation before its 2019 merger with L3 Technologies. Violations included: unauthorised exports of tactical radios, night vision equipment software, and a remote-controlled vehicle to Canada, Thailand, Singapore and Germany; providing a false Part 130 statement on a Technical Assistance Agreement; and violating the terms and conditions of export authorisations. The DoD had first notified Harris Corp of violations in 2015 but the company failed to stop repeat breaches. L3Harris was required to appoint an external Special Compliance Officer and undergo two external ITAR compliance audits.",
          source: "US Department of State / Directorate of Defense Trade Controls consent agreement, September 2019; FreightWaves",
          url: "https://2017-2021.state.gov/u-s-department-of-state-concludes-13-million-settlement-of-alleged-export-violations-by-l3harris-technologies-inc/"
        },
        {
          text: "In 2008, 72 Iraqi civilians filed a civil lawsuit against L3 Services (predecessor company) and CACI alleging torture, cruel and inhuman treatment, war crimes, sexual assault and battery, and intentional infliction of emotional distress linked to their activities at Abu Ghraib prison in Iraq. A settlement was reached in October 2012 — the first positive resolution of a US civil case challenging detainee treatment outside the United States in the broader post-9/11 context.",
          source: "L3Harris Wikipedia; litigation records, 2012",
          url: "https://en.wikipedia.org/wiki/L3Harris"
        }
      ]
    }
  ],
  alternatives: []
},,,

};
