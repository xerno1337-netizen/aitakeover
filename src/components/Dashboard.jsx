import React from 'react'
import Hero from './Hero'
import ImpactMetrics from './ImpactMetrics'
import JobCategories from './JobCategories'
import GlobalImpact from './GlobalImpact'
import Timeline from './Timeline'
import './Dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard">
      <Hero />
      <ImpactMetrics />
      <JobCategories />
      <GlobalImpact />
      <Timeline />
    </div>
  )
}

export default Dashboard
