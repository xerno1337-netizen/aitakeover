import React from 'react'
import { jobs } from '../data/jobData'
import './JobList.css'

function JobList() {
  const sortedJobs = [...jobs].sort((a, b) => a.yearsToAutomation - b.yearsToAutomation)

  const getThreatColor = (threatLevel) => {
    if (threatLevel >= 80) return '#dc2626'
    if (threatLevel >= 60) return '#f59e0b'
    return '#10b981'
  }

  const getTimeColor = (years) => {
    if (years <= 2) return '#dc2626'
    if (years <= 5) return '#f59e0b'
    return '#10b981'
  }

  return (
    <div className="job-list">
      <div className="job-list-header">
        <h2>Job Displacement Analysis</h2>
        <p>Detailed breakdown of AI automation timelines by profession</p>
      </div>

      <div className="jobs-grid">
        {sortedJobs.map((job) => (
          <div key={job.id} className="job-card">
            <div className="job-header">
              <div className="job-icon">{job.icon}</div>
              <div className="job-title">
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
              <div className="metric">
                <div className="metric-label">Time to Automation</div>
                <div 
                  className="metric-value time-value"
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
            </div>

            <div className="automation-bar">
              <div 
                className="automation-fill"
                style={{ 
                  width: `${job.currentAutomation}%`,
                  backgroundColor: getThreatColor(job.threatLevel)
                }}
              ></div>
            </div>

            <div className="job-timeline">
              <div className="timeline-item">
                <div className="timeline-dot current"></div>
                <div className="timeline-content">
                  <strong>Now</strong>
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

      <div className="job-summary">
        <h3>Summary Statistics</h3>
        <div className="summary-grid">
          <div className="summary-card">
            <div className="summary-value">{sortedJobs.filter(j => j.yearsToAutomation <= 2).length}</div>
            <div className="summary-label">Jobs at risk by 2026</div>
          </div>
          <div className="summary-card">
            <div className="summary-value">{sortedJobs.filter(j => j.yearsToAutomation <= 5).length}</div>
            <div className="summary-label">Jobs at risk by 2029</div>
          </div>
          <div className="summary-card">
            <div className="summary-value">{Math.round(sortedJobs.reduce((acc, j) => acc + j.currentAutomation, 0) / sortedJobs.length)}%</div>
            <div className="summary-label">Average current automation</div>
          </div>
          <div className="summary-card">
            <div className="summary-value">{Math.round(sortedJobs.reduce((acc, j) => acc + j.threatLevel, 0) / sortedJobs.length)}%</div>
            <div className="summary-label">Average threat level</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobList
