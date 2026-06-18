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

};