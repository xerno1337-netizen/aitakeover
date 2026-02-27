import React, { useState } from 'react'
import { jobs } from '../data/jobData'
import './JobThreats.css'

function JobThreats() {
  const [sortBy, setSortBy] = useState('threat')

  const sortedJobs = [...jobs].sort((a, b) => {
    if (sortBy === 'threat') return b.threatLevel - a.threatLevel
    if (sortBy === 'time') return a.yearsToAutomation - b.yearsToAutomation
    return 0
  })

  const getThreatColor = (threatLevel) => {
    if (threatLevel >= 80) return '#ff0066'
    if (threatLevel >= 60) return '#ffa500'
    return '#00ff00'
  }

  const getTimeColor = (years) => {
    if (years <= 2) return '#ff0066'
    if (years <= 5) return '#ffa500'
    return '#00ff00'
  }

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M'
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K'
    return num.toString()
  }

  return (
    <div className="job-threats-section">
      <div className="section-header">
        <h2>JOB THREAT ANALYSIS</h2>
        <p>Detailed breakdown of AI automation timelines by profession</p>
      </div>

      <div className="sort-controls">
        <button 
          className={sortBy === 'threat' ? 'active' : ''}
          onClick={() => setSortBy('threat')}
        >
          Sort by Threat Level
        </button>
        <button 
          className={sortBy === 'time' ? 'active' : ''}
          onClick={() => setSortBy('time')}
        >
          Sort by Time to Automation
        </button>
      </div>

      <div className="jobs-grid">
        {sortedJobs.map((job) => (
          <div key={job.id} className="job-card">
            <div className="job-header">
              <div className="job-icon">{job.icon}</div>
              <div className="job-title-section">
                <h3>{job.name}</h3>
                <span className="job-category">{job.category}</span>
              </div>
              <div 
                className="threat-badge"
                style={{ 
                  backgroundColor: getThreatColor(job.threatLevel),
                  boxShadow: `0 0 20px ${getThreatColor(job.threatLevel)}`
                }}
              >
                {job.threatLevel}%
              </div>
            </div>

            <p className="job-description">{job.description}</p>

            <div className="job-metrics">
              <div className="metric">
                <div className="metric-label">Time to Automation</div>
                <div 
                  className="metric-value"
                  style={{ color: getTimeColor(job.yearsToAutomation) }}
                >
                  {job.yearsToAutomation === 0.5 ? '6 months' : 
                   job.yearsToAutomation === 1 ? '1 year' :
                   job.yearsToAutomation === 1.5 ? '1.5 years' :
                   `${job.yearsToAutomation} years`}
                </div>
              </div>
              <div className="metric">
                <div className="metric-label">Current Automation</div>
                <div className="metric-value">{job.currentAutomation}%</div>
              </div>
              <div className="metric">
                <div className="metric-label">Jobs Affected</div>
                <div className="metric-value">{formatNumber(job.jobsAffected)}</div>
              </div>
            </div>

            <div className="automation-bar-container">
              <div className="automation-bar">
                <div 
                  className="automation-fill"
                  style={{ 
                    width: `${job.currentAutomation}%`,
                    backgroundColor: getThreatColor(job.threatLevel),
                    boxShadow: `0 0 15px ${getThreatColor(job.threatLevel)}`
                  }}
                ></div>
              </div>
              <div className="automation-label">
                <span>Current: {job.currentAutomation}%</span>
                <span>Target: {job.threatLevel}%</span>
              </div>
            </div>

            <div className="job-timeline">
              <div className="timeline-item">
                <div className="timeline-dot current"></div>
                <div className="timeline-content">
                  <strong>2024</strong>
                  <span>{job.currentAutomation}% automated</span>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot future"></div>
                <div className="timeline-content">
                  <strong>{2024 + Math.ceil(job.yearsToAutomation)}</strong>
                  <span>Full automation expected</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default JobThreats
