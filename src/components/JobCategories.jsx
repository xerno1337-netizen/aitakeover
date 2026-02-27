import React, { useState } from 'react'
import { jobs } from '../data/jobData'
import './JobCategories.css'

function JobCategories() {
  const [sortBy, setSortBy] = useState('threat')

  const sortedJobs = [...jobs].sort((a, b) => {
    if (sortBy === 'threat') return b.threatLevel - a.threatLevel
    if (sortBy === 'time') return a.yearsToAutomation - b.yearsToAutomation
    return 0
  })

  const getThreatColor = (threatLevel) => {
    if (threatLevel >= 80) return '#dc2626'
    if (threatLevel >= 60) return '#f59e0b'
    return '#10b981'
  }

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M'
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K'
    return num.toString()
  }

  return (
    <section className="job-categories">
      <div className="section-container">
        <div className="section-header">
          <h2>Job Categories at Risk</h2>
          <p>Detailed analysis of automation timelines by profession</p>
        </div>

        <div className="sort-controls">
          <button 
            className={sortBy === 'threat' ? 'active' : ''}
            onClick={() => setSortBy('threat')}
          >
            Highest Threat
          </button>
          <button 
            className={sortBy === 'time' ? 'active' : ''}
            onClick={() => setSortBy('time')}
          >
            Soonest to Automate
          </button>
        </div>

        <div className="jobs-grid">
          {sortedJobs.map((job) => (
            <div key={job.id} className="job-card">
              <div className="job-header">
                <div className="job-icon">{job.icon}</div>
                <div className="job-info">
                  <h3>{job.name}</h3>
                  <span className="job-category">{job.category}</span>
                </div>
                <div 
                  className="threat-indicator"
                  style={{ backgroundColor: getThreatColor(job.threatLevel) }}
                >
                  {job.threatLevel}%
                </div>
              </div>

              <p className="job-description">{job.description}</p>

              <div className="job-metrics">
                <div className="metric-row">
                  <span className="metric-label">Time to Automation</span>
                  <span className="metric-value">
                    {job.yearsToAutomation === 0.5 ? '6 months' : 
                     job.yearsToAutomation === 1 ? '1 year' :
                     job.yearsToAutomation === 1.5 ? '1.5 years' :
                     `${job.yearsToAutomation} years`}
                  </span>
                </div>
                <div className="metric-row">
                  <span className="metric-label">Current Automation</span>
                  <span className="metric-value">{job.currentAutomation}%</span>
                </div>
                <div className="metric-row">
                  <span className="metric-label">Jobs Affected</span>
                  <span className="metric-value">{formatNumber(job.jobsAffected)}</span>
                </div>
              </div>

              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  style={{ 
                    width: `${job.currentAutomation}%`,
                    backgroundColor: getThreatColor(job.threatLevel)
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default JobCategories
