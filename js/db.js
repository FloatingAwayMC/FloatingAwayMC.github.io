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

};
