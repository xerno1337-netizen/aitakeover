export const globalStats = {
  aiExposureGlobalPct: 40,
  jobsDisplacedBy2030: 92000000,
  jobsCreatedBy2030: 170000000,
  netChangeBy2030: 78000000,
  fteExposedEstimate: 300000000,
}

export const timelineData = [
  { year: 2025, displacedCumulative: 0, createdCumulative: 0, netCumulative: 0 },
  { year: 2026, displacedCumulative: 18400000, createdCumulative: 34000000, netCumulative: 15600000 },
  { year: 2027, displacedCumulative: 36800000, createdCumulative: 68000000, netCumulative: 31200000 },
  { year: 2028, displacedCumulative: 55200000, createdCumulative: 102000000, netCumulative: 46800000 },
  { year: 2029, displacedCumulative: 73600000, createdCumulative: 136000000, netCumulative: 62400000 },
  { year: 2030, displacedCumulative: 92000000, createdCumulative: 170000000, netCumulative: 78000000 },
]

export const evidenceStats = [
  {
    id: 'imf-2024',
    metric: 'Global employment exposed to AI',
    value: '~40%',
    source: 'IMF (2024)',
    detail: 'Advanced economies face higher exposure than low-income economies.',
  },
  {
    id: 'wef-displaced',
    metric: 'Jobs displaced by 2030',
    value: '92M',
    source: 'WEF Future of Jobs (2025)',
    detail: 'Part of broader labor market restructuring over 2025-2030.',
  },
  {
    id: 'wef-created',
    metric: 'Jobs created by 2030',
    value: '170M',
    source: 'WEF Future of Jobs (2025)',
    detail: 'Net impact in the report is +78M jobs globally.',
  },
  {
    id: 'goldman-2023',
    metric: 'Full-time equivalent roles exposed',
    value: '300M',
    source: 'Goldman Sachs (2023)',
    detail: 'Exposure does not mean full automation for every role.',
  },
]

export const jobSignals = [
  {
    id: 'data-entry-clerks',
    role: 'Data Entry Clerks',
    signal: 'Fast decline signal',
    category: 'Administrative',
    source: 'WEF Future of Jobs 2025',
    note: 'Listed among fastest declining roles by 2030.',
  },
  {
    id: 'cashiers-ticket-clerks',
    role: 'Cashiers and Ticket Clerks',
    signal: 'Fast decline signal',
    category: 'Retail',
    source: 'WEF Future of Jobs 2025',
    note: 'Automation and self-service systems reduce routine front-desk tasks.',
  },
  {
    id: 'administrative-assistants',
    role: 'Administrative and Executive Secretaries',
    signal: 'Fast decline signal',
    category: 'Office',
    source: 'WEF Future of Jobs 2025',
    note: 'AI assistants and workflow software automate scheduling and documentation.',
  },
  {
    id: 'bank-tellers',
    role: 'Bank Tellers and Related Clerks',
    signal: 'Decline signal',
    category: 'Finance',
    source: 'WEF Future of Jobs 2025',
    note: 'Digital channels and AI-assisted banking reduce branch-based routine tasks.',
  },
  {
    id: 'postal-service-clerks',
    role: 'Postal Service Clerks',
    signal: 'Decline signal',
    category: 'Public Service',
    source: 'WEF Future of Jobs 2025',
    note: 'Digitization and automation continue reducing manual processing demand.',
  },
  {
    id: 'customer-service-routine',
    role: 'Routine Customer Support Roles',
    signal: 'Task automation pressure',
    category: 'Service',
    source: 'OECD + IMF synthesis',
    note: 'Generative AI and self-service tools automate a larger share of repetitive queries.',
  },
]

export const sourceLinks = [
  {
    title: 'IMF: Gen-AI: Artificial Intelligence and the Future of Work',
    url: 'https://www.imf.org/en/Blogs/Articles/2024/01/14/gen-ai-artificial-intelligence-and-the-future-of-work',
  },
  {
    title: 'World Economic Forum: Future of Jobs Report 2025',
    url: 'https://www.weforum.org/publications/the-future-of-jobs-report-2025/',
  },
  {
    title: 'Goldman Sachs: The Potentially Large Effects of Artificial Intelligence on Economic Growth',
    url: 'https://www.goldmansachs.com/insights/articles/generative-ai-could-raise-global-gdp-by-7-percent',
  },
  {
    title: 'OECD: Employment Outlook (AI and labor-market risk chapters)',
    url: 'https://www.oecd.org/employment-outlook/',
  },
]
