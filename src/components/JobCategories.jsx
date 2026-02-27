import React, { useState } from 'react'
import { jobSignals } from '../data/jobData'
import './JobCategories.css'

function JobCategories() {
  const [expanded, setExpanded] = useState(false)
  const [mode, setMode] = useState('decline')

  const filtered = jobSignals.filter((item) =>
    mode === 'all' ? true : mode === 'growth' ? item.signal.toLowerCase().includes('growth') : !item.signal.toLowerCase().includes('growth')
  )

  const visible = expanded ? filtered : filtered.slice(0, 6)

  return (
    <section className="jobs-panel">
      <div className="jobs-panel-head">
        <h2>Occupation Signals</h2>
        <span>Decline + growth watchlist</span>
      </div>

      <div className="jobs-filters">
        <button className={mode === 'decline' ? 'active' : ''} onClick={() => setMode('decline')}>Decline</button>
        <button className={mode === 'growth' ? 'active' : ''} onClick={() => setMode('growth')}>Growth</button>
        <button className={mode === 'all' ? 'active' : ''} onClick={() => setMode('all')}>All</button>
      </div>

      <div className="jobs-list">
        {visible.map((job) => (
          <article key={job.id} className="jobs-row">
            <div className="jobs-row-left">
              <h3>{job.role}</h3>
              <p>{job.category}</p>
            </div>
            <div className="jobs-row-mid">{job.signal}</div>
            <div className="jobs-row-mid confidence">{job.confidence}</div>
            <div className="jobs-row-source">{job.source}</div>
          </article>
        ))}
      </div>

      <button className="jobs-expand-btn" onClick={() => setExpanded((v) => !v)}>
        {expanded ? 'Show fewer roles' : 'Show more roles'}
      </button>
    </section>
  )
}

export default JobCategories
