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

};