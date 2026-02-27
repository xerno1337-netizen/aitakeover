export const jobs = [
  {
    id: 'lawyer',
    name: 'Lawyer',
    category: 'Legal',
    threatLevel: 95,
    yearsToAutomation: 3,
    currentAutomation: 15,
    description: 'Legal research and document review increasingly automated',
    icon: '⚖️'
  },
  {
    id: 'accountant',
    name: 'Accountant',
    category: 'Finance',
    threatLevel: 90,
    yearsToAutomation: 2,
    currentAutomation: 25,
    description: 'Automated bookkeeping and tax preparation',
    icon: '📊'
  },
  {
    id: 'translator',
    name: 'Translator',
    category: 'Language',
    threatLevel: 98,
    yearsToAutomation: 1,
    currentAutomation: 40,
    description: 'Real-time AI translation replacing human translators',
    icon: '🌐'
  },
  {
    id: 'data-entry',
    name: 'Data Entry Clerk',
    category: 'Administrative',
    threatLevel: 99,
    yearsToAutomation: 0.5,
    currentAutomation: 60,
    description: 'OCR and AI extraction eliminating manual entry',
    icon: '⌨️'
  },
  {
    id: 'customer-service',
    name: 'Customer Service',
    category: 'Service',
    threatLevel: 85,
    yearsToAutomation: 2,
    currentAutomation: 30,
    description: 'AI chatbots handling majority of inquiries',
    icon: '💬'
  },
  {
    id: 'writer',
    name: 'Content Writer',
    category: 'Creative',
    threatLevel: 80,
    yearsToAutomation: 4,
    currentAutomation: 20,
    description: 'AI writing tools generating articles and content',
    icon: '✍️'
  },
  {
    id: 'doctor',
    name: 'Doctor',
    category: 'Healthcare',
    threatLevel: 40,
    yearsToAutomation: 10,
    currentAutomation: 5,
    description: 'AI-assisted diagnosis, but human oversight remains critical',
    icon: '👨‍⚕️'
  },
  {
    id: 'teacher',
    name: 'Teacher',
    category: 'Education',
    threatLevel: 35,
    yearsToAutomation: 12,
    currentAutomation: 8,
    description: 'AI tutors supplementing, not replacing human educators',
    icon: '👨‍🏫'
  },
  {
    id: 'truck-driver',
    name: 'Truck Driver',
    category: 'Transportation',
    threatLevel: 92,
    yearsToAutomation: 5,
    currentAutomation: 10,
    description: 'Autonomous vehicles gradually replacing drivers',
    icon: '🚚'
  },
  {
    id: 'cashier',
    name: 'Cashier',
    category: 'Retail',
    threatLevel: 97,
    yearsToAutomation: 1.5,
    currentAutomation: 45,
    description: 'Self-checkout and automated payment systems',
    icon: '🛒'
  },
  {
    id: 'analyst',
    name: 'Data Analyst',
    category: 'Tech',
    threatLevel: 70,
    yearsToAutomation: 6,
    currentAutomation: 15,
    description: 'AI tools automating data processing and insights',
    icon: '📈'
  },
  {
    id: 'designer',
    name: 'Graphic Designer',
    category: 'Creative',
    threatLevel: 65,
    yearsToAutomation: 7,
    currentAutomation: 12,
    description: 'AI design tools generating visuals and layouts',
    icon: '🎨'
  }
]

export const timelineData = Array.from({ length: 21 }, (_, i) => {
  const year = 2024 + i
  const baseAutomation = 8 + (i * 3.5) + Math.sin(i * 0.3) * 2
  return {
    year,
    automation: Math.min(95, Math.round(baseAutomation + Math.random() * 3 - 1.5)),
    jobsDisplaced: Math.round((baseAutomation / 100) * 800 + i * 50),
    newJobsCreated: Math.round((baseAutomation / 100) * 200 + i * 15)
  }
})

export const countryData = [
  { name: 'United States', code: 'US', threatLevel: 85, adoptionRate: 78, jobsAtRisk: 45000000, coordinates: [-95.7129, 37.0902] },
  { name: 'China', code: 'CN', threatLevel: 88, adoptionRate: 82, jobsAtRisk: 52000000, coordinates: [104.1954, 35.8617] },
  { name: 'Japan', code: 'JP', threatLevel: 90, adoptionRate: 85, jobsAtRisk: 12000000, coordinates: [138.2529, 36.2048] },
  { name: 'Germany', code: 'DE', threatLevel: 82, adoptionRate: 75, jobsAtRisk: 18000000, coordinates: [10.4515, 51.1657] },
  { name: 'United Kingdom', code: 'GB', threatLevel: 83, adoptionRate: 76, jobsAtRisk: 15000000, coordinates: [-3.4360, 55.3781] },
  { name: 'South Korea', code: 'KR', threatLevel: 89, adoptionRate: 84, jobsAtRisk: 8000000, coordinates: [127.7669, 35.9078] },
  { name: 'India', code: 'IN', threatLevel: 75, adoptionRate: 65, jobsAtRisk: 68000000, coordinates: [78.9629, 20.5937] },
  { name: 'France', code: 'FR', threatLevel: 80, adoptionRate: 72, jobsAtRisk: 14000000, coordinates: [2.2137, 46.2276] },
  { name: 'Canada', code: 'CA', threatLevel: 81, adoptionRate: 74, jobsAtRisk: 9000000, coordinates: [-106.3468, 56.1304] },
  { name: 'Australia', code: 'AU', threatLevel: 79, adoptionRate: 71, jobsAtRisk: 7000000, coordinates: [133.7751, -25.2744] },
  { name: 'Brazil', code: 'BR', threatLevel: 72, adoptionRate: 62, jobsAtRisk: 35000000, coordinates: [-51.9253, -14.2350] },
  { name: 'Russia', code: 'RU', threatLevel: 70, adoptionRate: 58, jobsAtRisk: 25000000, coordinates: [105.3188, 61.5240] },
  { name: 'Italy', code: 'IT', threatLevel: 78, adoptionRate: 70, jobsAtRisk: 12000000, coordinates: [12.5674, 41.8719] },
  { name: 'Spain', code: 'ES', threatLevel: 76, adoptionRate: 68, jobsAtRisk: 10000000, coordinates: [-3.7492, 40.4637] },
  { name: 'Mexico', code: 'MX', threatLevel: 74, adoptionRate: 64, jobsAtRisk: 18000000, coordinates: [-102.5528, 23.6345] }
]
