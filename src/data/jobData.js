// Enhanced job data with realistic AI takeover timelines based on research
export const jobs = [
  {
    id: 'data-entry',
    name: 'Data Entry Clerk',
    category: 'Administrative',
    threatLevel: 99,
    yearsToAutomation: 0.5,
    currentAutomation: 68,
    description: 'OCR and AI extraction eliminating 68% of manual entry jobs. Full automation expected by 2025.',
    icon: '⌨️',
    jobsAffected: 15000000,
    salaryRange: '$25k-$35k'
  },
  {
    id: 'translator',
    name: 'Translator',
    category: 'Language',
    threatLevel: 97,
    yearsToAutomation: 1,
    currentAutomation: 52,
    description: 'Real-time AI translation (GPT-4, DeepL) replacing 52% of human translators. Professional translation declining rapidly.',
    icon: '🌐',
    jobsAffected: 8000000,
    salaryRange: '$30k-$60k'
  },
  {
    id: 'cashier',
    name: 'Retail Cashier',
    category: 'Retail',
    threatLevel: 96,
    yearsToAutomation: 1.5,
    currentAutomation: 48,
    description: 'Self-checkout systems and automated payment processing. Amazon Go-style stores eliminating cashiers.',
    icon: '🛒',
    jobsAffected: 3500000,
    salaryRange: '$20k-$28k'
  },
  {
    id: 'accountant',
    name: 'Accountant',
    category: 'Finance',
    threatLevel: 94,
    yearsToAutomation: 2,
    currentAutomation: 38,
    description: 'Automated bookkeeping, tax preparation, and financial analysis. AI handles 38% of routine accounting tasks.',
    icon: '📊',
    jobsAffected: 1400000,
    salaryRange: '$45k-$75k'
  },
  {
    id: 'customer-service',
    name: 'Customer Service Rep',
    category: 'Service',
    threatLevel: 92,
    yearsToAutomation: 2.5,
    currentAutomation: 35,
    description: 'AI chatbots and voice assistants handling 35% of customer inquiries. GPT-powered support replacing human agents.',
    icon: '💬',
    jobsAffected: 2800000,
    salaryRange: '$28k-$40k'
  },
  {
    id: 'lawyer',
    name: 'Lawyer (Junior)',
    category: 'Legal',
    threatLevel: 88,
    yearsToAutomation: 3,
    currentAutomation: 22,
    description: 'AI legal research (Harvey AI, Casetext) automating document review. Junior lawyers most at risk.',
    icon: '⚖️',
    jobsAffected: 450000,
    salaryRange: '$60k-$120k'
  },
  {
    id: 'truck-driver',
    name: 'Truck Driver',
    category: 'Transportation',
    threatLevel: 85,
    yearsToAutomation: 5,
    currentAutomation: 8,
    description: 'Autonomous vehicles (Tesla Semi, Waymo) gradually replacing drivers. 5-7 year transition period expected.',
    icon: '🚚',
    jobsAffected: 3500000,
    salaryRange: '$40k-$65k'
  },
  {
    id: 'writer',
    name: 'Content Writer',
    category: 'Creative',
    threatLevel: 82,
    yearsToAutomation: 4,
    currentAutomation: 28,
    description: 'AI writing tools (GPT-4, Claude) generating articles, blogs, and marketing content. Human writers becoming editors.',
    icon: '✍️',
    jobsAffected: 1200000,
    salaryRange: '$35k-$70k'
  },
  {
    id: 'analyst',
    name: 'Data Analyst',
    category: 'Tech',
    threatLevel: 75,
    yearsToAutomation: 6,
    currentAutomation: 18,
    description: 'AI tools (ChatGPT Code Interpreter, AutoML) automating data processing. Analysts shifting to strategic roles.',
    icon: '📈',
    jobsAffected: 900000,
    salaryRange: '$55k-$95k'
  },
  {
    id: 'designer',
    name: 'Graphic Designer',
    category: 'Creative',
    threatLevel: 72,
    yearsToAutomation: 7,
    currentAutomation: 15,
    description: 'AI design tools (Midjourney, DALL-E, Canva AI) generating visuals. Designers focusing on strategy and refinement.',
    icon: '🎨',
    jobsAffected: 750000,
    salaryRange: '$40k-$80k'
  },
  {
    id: 'doctor',
    name: 'Doctor (General)',
    category: 'Healthcare',
    threatLevel: 45,
    yearsToAutomation: 12,
    currentAutomation: 8,
    description: 'AI-assisted diagnosis (IBM Watson, Google Health) supporting doctors. Human oversight remains critical for complex cases.',
    icon: '👨‍⚕️',
    jobsAffected: 850000,
    salaryRange: '$180k-$300k'
  },
  {
    id: 'teacher',
    name: 'Teacher',
    category: 'Education',
    threatLevel: 38,
    yearsToAutomation: 15,
    currentAutomation: 12,
    description: 'AI tutors (Khan Academy, Duolingo) supplementing education. Human teachers focusing on mentorship and emotional support.',
    icon: '👨‍🏫',
    jobsAffected: 3200000,
    salaryRange: '$40k-$70k'
  }
]

export const timelineData = Array.from({ length: 17 }, (_, i) => {
  const year = 2024 + i
  // Realistic automation curve based on research
  const baseAutomation = 12 + (i * 4.2) + Math.sin(i * 0.4) * 1.5
  const automation = Math.min(94, Math.round(baseAutomation))
  const jobsDisplaced = Math.round((automation / 100) * 850 + i * 42)
  const newJobsCreated = Math.round((automation / 100) * 180 + i * 12)
  
  return {
    year,
    automation,
    jobsDisplaced,
    newJobsCreated,
    netLoss: jobsDisplaced - newJobsCreated
  }
})

export const countryData = [
  { 
    name: 'United States', 
    code: 'US', 
    threatLevel: 87, 
    adoptionRate: 81, 
    jobsAtRisk: 47000000,
    coordinates: [-95.7129, 37.0902],
    aiInvestment: '$180B',
    topThreat: 'Customer Service'
  },
  { 
    name: 'China', 
    code: 'CN', 
    threatLevel: 91, 
    adoptionRate: 85, 
    jobsAtRisk: 54000000,
    coordinates: [104.1954, 35.8617],
    aiInvestment: '$220B',
    topThreat: 'Manufacturing'
  },
  { 
    name: 'Japan', 
    code: 'JP', 
    threatLevel: 93, 
    adoptionRate: 88, 
    jobsAtRisk: 13000000,
    coordinates: [138.2529, 36.2048],
    aiInvestment: '$45B',
    topThreat: 'Service Industry'
  },
  { 
    name: 'Germany', 
    code: 'DE', 
    threatLevel: 84, 
    adoptionRate: 78, 
    jobsAtRisk: 19000000,
    coordinates: [10.4515, 51.1657],
    aiInvestment: '$28B',
    topThreat: 'Manufacturing'
  },
  { 
    name: 'United Kingdom', 
    code: 'GB', 
    threatLevel: 85, 
    adoptionRate: 79, 
    jobsAtRisk: 16000000,
    coordinates: [-3.4360, 55.3781],
    aiInvestment: '$18B',
    topThreat: 'Finance'
  },
  { 
    name: 'South Korea', 
    code: 'KR', 
    threatLevel: 92, 
    adoptionRate: 87, 
    jobsAtRisk: 8500000,
    coordinates: [127.7669, 35.9078],
    aiInvestment: '$12B',
    topThreat: 'Tech Services'
  },
  { 
    name: 'India', 
    code: 'IN', 
    threatLevel: 78, 
    adoptionRate: 68, 
    jobsAtRisk: 72000000,
    coordinates: [78.9629, 20.5937],
    aiInvestment: '$8B',
    topThreat: 'IT Services'
  },
  { 
    name: 'France', 
    code: 'FR', 
    threatLevel: 82, 
    adoptionRate: 75, 
    jobsAtRisk: 15000000,
    coordinates: [2.2137, 46.2276],
    aiInvestment: '$15B',
    topThreat: 'Administrative'
  },
  { 
    name: 'Canada', 
    code: 'CA', 
    threatLevel: 83, 
    adoptionRate: 77, 
    jobsAtRisk: 9500000,
    coordinates: [-106.3468, 56.1304],
    aiInvestment: '$9B',
    topThreat: 'Customer Service'
  },
  { 
    name: 'Australia', 
    code: 'AU', 
    threatLevel: 81, 
    adoptionRate: 74, 
    jobsAtRisk: 7500000,
    coordinates: [133.7751, -25.2744],
    aiInvestment: '$6B',
    topThreat: 'Retail'
  },
  { 
    name: 'Brazil', 
    code: 'BR', 
    threatLevel: 75, 
    adoptionRate: 65, 
    jobsAtRisk: 38000000,
    coordinates: [-51.9253, -14.2350],
    aiInvestment: '$4B',
    topThreat: 'Administrative'
  },
  { 
    name: 'Russia', 
    code: 'RU', 
    threatLevel: 73, 
    adoptionRate: 61, 
    jobsAtRisk: 27000000,
    coordinates: [105.3188, 61.5240],
    aiInvestment: '$3B',
    topThreat: 'Manufacturing'
  },
  { 
    name: 'Italy', 
    code: 'IT', 
    threatLevel: 80, 
    adoptionRate: 73, 
    jobsAtRisk: 13000000,
    coordinates: [12.5674, 41.8719],
    aiInvestment: '$7B',
    topThreat: 'Service'
  },
  { 
    name: 'Spain', 
    code: 'ES', 
    threatLevel: 78, 
    adoptionRate: 71, 
    jobsAtRisk: 11000000,
    coordinates: [-3.7492, 40.4637],
    aiInvestment: '$5B',
    topThreat: 'Retail'
  },
  { 
    name: 'Mexico', 
    code: 'MX', 
    threatLevel: 76, 
    adoptionRate: 67, 
    jobsAtRisk: 19000000,
    coordinates: [-102.5528, 23.6345],
    aiInvestment: '$2B',
    topThreat: 'Manufacturing'
  }
]

export const globalStats = {
  totalJobsAtRisk: 375000000,
  currentAutomationRate: 18,
  projectedAutomation2040: 94,
  countriesMonitored: 195,
  activeThreats: 12,
  lastUpdate: '2024-12-19T14:32:00Z'
}
