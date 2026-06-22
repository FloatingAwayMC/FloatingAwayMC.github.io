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
}

,

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
}
,

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
}
,

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
}
,

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
}
,

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
}
,

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
}
,

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
}
,

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
}
,

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
}
,

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
}
,

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
}
,

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
}
,

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
}
,

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
}
,

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
}
,

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
}
,

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
}
,

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
}
,

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
}
,

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
}
,

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
}
,

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
}
,

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
}
,

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
}
,

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
}
,

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
}
,

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
}
,

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
},
,

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
},
,

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
},
,

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
},
,

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
},

};