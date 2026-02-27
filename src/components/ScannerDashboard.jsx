import React from 'react'
import ScannerHeader from './ScannerHeader'
import ThreatRadar from './ThreatRadar'
import GlobalMap from './GlobalMap'
import TimelineSection from './TimelineSection'
import JobThreats from './JobThreats'
import StatsBar from './StatsBar'
import './ScannerDashboard.css'

function ScannerDashboard() {
  return (
    <div className="scanner-dashboard">
      <ScannerHeader />
      
      <div className="dashboard-content">
        <div className="hero-section">
          <ThreatRadar />
        </div>
        
        <StatsBar />
        
        <div className="content-sections">
          <div className="map-section">
            <GlobalMap />
          </div>
          
          <div className="timeline-section">
            <TimelineSection />
          </div>
          
          <div className="jobs-section">
            <JobThreats />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScannerDashboard
