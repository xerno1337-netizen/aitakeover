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
      <div className="dashboard-grid">
        <div className="dashboard-left">
          <ImpactMetrics />
          <JobCategories />
        </div>
        <div className="dashboard-right">
          <GlobalImpact />
          <Timeline />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
