import React, { useState } from 'react'
import ScannerHeader from './ScannerHeader'
import ThreatRadar from './ThreatRadar'
import GlobalMap from './GlobalMap'
import TimelineSection from './TimelineSection'
import JobThreats from './JobThreats'
import './ScannerDashboard.css'

function ScannerDashboard() {
  const [selectedJob, setSelectedJob] = useState(null)

  return (
    <div className="scanner-dashboard">
      <ScannerHeader />
      
      <div className="dashboard-content">
        <div className="hero-radar-section">
          <ThreatRadar selectedJob={selectedJob} setSelectedJob={setSelectedJob} />
        </div>
        
        {selectedJob && (
          <div className="job-detail-overlay">
            <div className="job-detail-card">
              <button className="close-btn" onClick={() => setSelectedJob(null)}>×</button>
              <div className="job-detail-content">
                <h3>{selectedJob.name}</h3>
                <p className="job-category">{selectedJob.category}</p>
                <div className="job-stats">
                  <div className="stat">
                    <span className="stat-label">Threat Level</span>
                    <span className="stat-value">{selectedJob.threatLevel}%</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Time to Automation</span>
                    <span className="stat-value">
                      {selectedJob.yearsToAutomation === 0.5 ? '6 months' : 
                       selectedJob.yearsToAutomation === 1 ? '1 year' :
                       selectedJob.yearsToAutomation === 1.5 ? '1.5 years' :
                       `${selectedJob.yearsToAutomation} years`}
                    </span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Current Automation</span>
                    <span className="stat-value">{selectedJob.currentAutomation}%</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Jobs Affected</span>
                    <span className="stat-value">
                      {selectedJob.jobsAffected >= 1000000 
                        ? (selectedJob.jobsAffected / 1000000).toFixed(1) + 'M'
                        : (selectedJob.jobsAffected / 1000).toFixed(1) + 'K'}
                    </span>
                  </div>
                </div>
                <p className="job-description">{selectedJob.description}</p>
              </div>
            </div>
          </div>
        )}
        
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
