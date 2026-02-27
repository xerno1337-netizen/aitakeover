import React, { useState } from 'react'
import { jobs } from '../data/jobData'
import './JobCategories.css'

function JobCategories() {
  const [sortBy, setSortBy] = useState('threat')
  const [expanded, setExpanded] = useState(false)

  const sortedJobs = [...jobs].sort((a, b) => {
    if (sortBy === 'threat') return b.threatLevel - a.threatLevel
    if (sortBy === 'time') return a.yearsToAutomation - b.yearsToAutomation
    return 0
  })

  const visibleJobs = expanded ? sortedJobs : sortedJobs.slice(0, 6)

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
    <section className="jobs-panel">
      <div className="jobs-panel-head">
        <h2>Jobs At Risk</h2>
        <div className="jobs-sort-controls">
          <button className={sortBy === 'threat' ? 'active' : ''} onClick={() => setSortBy('threat')}>Threat</button>
          <button className={sortBy === 'time' ? 'active' : ''} onClick={() => setSortBy('time')}>Timeline</button>
        </div>
      </div>

      <div className="jobs-list">
        {visibleJobs.map((job) => (
          <article key={job.id} className="jobs-row">
            <div className="jobs-row-left">
              <span className="jobs-icon">{job.icon}</span>
              <div>
                <h3>{job.name}</h3>
                <p>{job.category}</p>
              </div>
            </div>
            <div className="jobs-row-mid">{job.yearsToAutomation}y</div>
            <div className="jobs-row-mid">{formatNumber(job.jobsAffected)}</div>
            <div className="jobs-row-threat" style={{ color: getThreatColor(job.threatLevel) }}>{job.threatLevel}%</div>
          </article>
        ))}
      </div>

      <button className="jobs-expand-btn" onClick={() => setExpanded((v) => !v)}>
        {expanded ? 'Show less' : 'Show all jobs'}
      </button>
    </section>
  )
}

export default JobCategories
