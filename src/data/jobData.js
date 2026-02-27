export const globalStats = {
  aiExposureGlobalPct: 40,
  jobsDisplacedBy2030: 92000000,
  jobsCreatedBy2030: 170000000,
  netChangeBy2030: 78000000,
  fteExposedEstimate: 300000000,
}

export const timelineData = [
  { year: 2025, displacedCumulative: 0, createdCumulative: 0, netCumulative: 0, genAiAdoptionPct: 18, productivityIndex: 100 },
  { year: 2026, displacedCumulative: 18400000, createdCumulative: 34000000, netCumulative: 15600000, genAiAdoptionPct: 24, productivityIndex: 103 },
  { year: 2027, displacedCumulative: 36800000, createdCumulative: 68000000, netCumulative: 31200000, genAiAdoptionPct: 31, productivityIndex: 107 },
  { year: 2028, displacedCumulative: 55200000, createdCumulative: 102000000, netCumulative: 46800000, genAiAdoptionPct: 39, productivityIndex: 111 },
  { year: 2029, displacedCumulative: 73600000, createdCumulative: 136000000, netCumulative: 62400000, genAiAdoptionPct: 47, productivityIndex: 116 },
  { year: 2030, displacedCumulative: 92000000, createdCumulative: 170000000, netCumulative: 78000000, genAiAdoptionPct: 55, productivityIndex: 121 },
]

export const evidenceStats = [
  {
    id: 'imf-2024',
    metric: 'Global employment exposed to AI',
    value: '~40%',
    source: 'IMF (2024)',
    detail: 'AI exposure varies sharply by income level and occupation mix.',
  },
  {
    id: 'wef-displaced',
    metric: 'Jobs displaced by 2030',
    value: '92M',
    source: 'WEF Future of Jobs (2025)',
    detail: 'Displacement is concentrated in routine cognitive and clerical workflows.',
  },
  {
    id: 'wef-created',
    metric: 'Jobs created by 2030',
    value: '170M',
    source: 'WEF Future of Jobs (2025)',
    detail: 'AI, green transition, and care economy shifts drive new role creation.',
  },
  {
    id: 'goldman-2023',
    metric: 'FTE roles exposed',
    value: '300M',
    source: 'Goldman Sachs (2023)',
    detail: 'Exposure indicates task vulnerability, not automatic full role replacement.',
  },
]

export const regionalExposure = [
  {
    region: 'Advanced Economies',
    exposurePct: 60,
    highAutomationRiskPct: 27,
    augmentationPotentialPct: 33,
    source: 'IMF 2024',
  },
  {
    region: 'Emerging Markets',
    exposurePct: 40,
    highAutomationRiskPct: 13,
    augmentationPotentialPct: 27,
    source: 'IMF 2024',
  },
  {
    region: 'Low-Income Countries',
    exposurePct: 26,
    highAutomationRiskPct: 10,
    augmentationPotentialPct: 16,
    source: 'IMF 2024',
  },
]

export const sectorPressure = [
  {
    sector: 'Administrative & Clerical',
    pressureLevel: 'Very High',
    taskExposurePct: 62,
    signal: 'Routine workflow automation accelerating',
    source: 'WEF 2025 + OECD synthesis',
  },
  {
    sector: 'Customer Operations',
    pressureLevel: 'High',
    taskExposurePct: 54,
    signal: 'GenAI copilots and self-service reduce first-line workload',
    source: 'WEF 2025 + IMF synthesis',
  },
  {
    sector: 'Legal & Compliance Support',
    pressureLevel: 'High',
    taskExposurePct: 49,
    signal: 'Document analysis and drafting increasingly AI-assisted',
    source: 'IMF 2024 + industry evidence',
  },
  {
    sector: 'Finance Back Office',
    pressureLevel: 'High',
    taskExposurePct: 46,
    signal: 'Reporting, reconciliation, and anomaly detection automate faster',
    source: 'WEF 2025 + OECD synthesis',
  },
  {
    sector: 'Creative Production',
    pressureLevel: 'Medium',
    taskExposurePct: 38,
    signal: 'Asset generation speeds up, human direction remains bottleneck',
    source: 'IMF 2024 + market data',
  },
  {
    sector: 'Healthcare Delivery',
    pressureLevel: 'Medium-Low',
    taskExposurePct: 24,
    signal: 'Diagnostic augmentation high, full replacement low',
    source: 'IMF 2024 + OECD',
  },
]

export const jobSignals = [
  {
    id: 'data-entry-clerks',
    role: 'Data Entry Clerks',
    signal: 'Fast decline signal',
    category: 'Administrative',
    confidence: 'High',
    source: 'WEF Future of Jobs 2025',
    note: 'Listed among fastest declining roles by 2030.',
  },
  {
    id: 'cashiers-ticket-clerks',
    role: 'Cashiers and Ticket Clerks',
    signal: 'Fast decline signal',
    category: 'Retail',
    confidence: 'High',
    source: 'WEF Future of Jobs 2025',
    note: 'Automation and self-service systems reduce front-desk routine demand.',
  },
  {
    id: 'administrative-assistants',
    role: 'Administrative and Executive Secretaries',
    signal: 'Fast decline signal',
    category: 'Office',
    confidence: 'High',
    source: 'WEF Future of Jobs 2025',
    note: 'Scheduling, coordination, and basic drafting increasingly automated.',
  },
  {
    id: 'bank-tellers',
    role: 'Bank Tellers and Related Clerks',
    signal: 'Decline signal',
    category: 'Finance',
    confidence: 'Medium-High',
    source: 'WEF Future of Jobs 2025',
    note: 'Digital channels and AI-assisted operations reduce manual branch work.',
  },
  {
    id: 'postal-service-clerks',
    role: 'Postal Service Clerks',
    signal: 'Decline signal',
    category: 'Public Service',
    confidence: 'Medium',
    source: 'WEF Future of Jobs 2025',
    note: 'Digitization and logistics automation reduce legacy processing tasks.',
  },
  {
    id: 'customer-service-routine',
    role: 'Routine Customer Support Roles',
    signal: 'Task automation pressure',
    category: 'Service',
    confidence: 'Medium-High',
    source: 'OECD + IMF synthesis',
    note: 'GenAI and self-service channels automate repetitive query classes.',
  },
  {
    id: 'ai-literacy-trainers',
    role: 'AI Trainers / Prompt Specialists',
    signal: 'Growth signal',
    category: 'AI Operations',
    confidence: 'Medium',
    source: 'WEF 2025 role-shift analysis',
    note: 'Organizations report rising demand for model supervision and workflow tuning.',
  },
  {
    id: 'data-governance-specialists',
    role: 'Data Governance & Risk Specialists',
    signal: 'Growth signal',
    category: 'Risk & Governance',
    confidence: 'Medium-High',
    source: 'OECD AI governance + WEF 2025',
    note: 'AI deployment increases demand for compliance, traceability, and assurance.',
  },
]

export const scenarioBands = [
  {
    label: 'Base (WEF-derived)',
    disruptionMultiplier: 1,
    reskillingBufferPct: 28,
    displaced2030to2040: 132000000,
    created2030to2040: 173000000,
    net2030to2040: 41000000,
  },
  {
    label: 'Accelerated automation',
    disruptionMultiplier: 1.6,
    reskillingBufferPct: 24,
    displaced2030to2040: 201000000,
    created2030to2040: 166000000,
    net2030to2040: -35000000,
  },
  {
    label: 'Reskilling-heavy transition',
    disruptionMultiplier: 1.3,
    reskillingBufferPct: 42,
    displaced2030to2040: 139000000,
    created2030to2040: 193000000,
    net2030to2040: 54000000,
  },
]

export const sourceLinks = [
  {
    title: 'IMF: Gen-AI, Artificial Intelligence and the Future of Work (2024)',
    url: 'https://www.imf.org/en/Blogs/Articles/2024/01/14/gen-ai-artificial-intelligence-and-the-future-of-work',
  },
  {
    title: 'World Economic Forum: Future of Jobs Report 2025',
    url: 'https://www.weforum.org/publications/the-future-of-jobs-report-2025/',
  },
  {
    title: 'Goldman Sachs: Generative AI and Global GDP/Job Exposure',
    url: 'https://www.goldmansachs.com/insights/articles/generative-ai-could-raise-global-gdp-by-7-percent',
  },
  {
    title: 'OECD: Employment Outlook (AI and labor-market risk chapters)',
    url: 'https://www.oecd.org/employment-outlook/',
  },
]
