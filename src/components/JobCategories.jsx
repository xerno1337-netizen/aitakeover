import React, { useState } from 'react'
import { jobSignals } from '../data/jobData'
import './JobCategories.css'

function JobCategories() {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? jobSignals : jobSignals.slice(0, 5)

  return (
    <section className="jobs-panel">
      <div className="jobs-panel-head">
        <h2>Occupation Signals</h2>
        <span>From public labor reports</span>
      </div>

      <div className="jobs-list">
        {visible.map((job) => (
          <article key={job.id} className="jobs-row">
            <div className="jobs-row-left">
              <div>
                <h3>{job.role}</h3>
                <p>{job.category}</p>
              </div>
            </div>
            <div className="jobs-row-mid">{job.signal}</div>
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
