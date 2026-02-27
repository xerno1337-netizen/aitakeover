import React, { useState, useEffect } from 'react'
import ScannerHeader from './ScannerHeader'
import ThreatRadar from './ThreatRadar'
import GlobalMap from './GlobalMap'
import TimelineSection from './TimelineSection'
import JobThreats from './JobThreats'
import StatsBar from './StatsBar'
import './ScannerDashboard.css'

function ScannerDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="scanner-dashboard">
      <div className="scan-grid">
        <div className="scan-lines"></div>
        <div className="scan-overlay"></div>
      </div>
      
      <ScannerHeader currentTime={currentTime} />
      
      <StatsBar />
      
      <div className="dashboard-content">
        <div className="main-scanner-section">
          <ThreatRadar />
        </div>
        
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
  )
}

export default ScannerDashboard
