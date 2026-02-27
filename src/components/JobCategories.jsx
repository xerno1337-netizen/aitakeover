import React, { useState } from 'react'
import { jobSignals } from '../data/jobData'
import './JobCategories.css'

function JobCategories() {
  const [expanded, setExpanded] = useState(false)
  const [mode, setMode] = useState('decline')
  const [query, setQuery] = useState('')
  const [confidence, setConfidence] = useState('all')
  const [selectedId, setSelectedId] = useState(jobSignals[0]?.id)

  const filtered = jobSignals.filter((item) => {
    const modeMatch = mode === 'all' ? true : mode === 'growth' ? item.signal.toLowerCase().includes('growth') : !item.signal.toLowerCase().includes('growth')
    const confidenceMatch = confidence === 'all' ? true : item.confidence.toLowerCase().includes(confidence)
    const queryMatch = query.trim().length === 0
      ? true
      : `${item.role} ${item.category} ${item.signal}`.toLowerCase().includes(query.toLowerCase())
    return modeMatch && confidenceMatch && queryMatch
  })

  const visible = expanded ? filtered : filtered.slice(0, 6)
  const growthCount = jobSignals.filter((item) => item.signal.toLowerCase().includes('growth')).length
  const declineCount = jobSignals.length - growthCount
  const selected = jobSignals.find((item) => item.id === selectedId)

  return (
    <section className="jobs-panel">
      <div className="jobs-panel-head">
        <h2>Occupation Signals</h2>
        <span>{filtered.length} active • {declineCount} decline • {growthCount} growth</span>
      </div>

      <div className="jobs-filters">
        <button className={mode === 'decline' ? 'active' : ''} onClick={() => setMode('decline')}>Decline</button>
        <button className={mode === 'growth' ? 'active' : ''} onClick={() => setMode('growth')}>Growth</button>
        <button className={mode === 'all' ? 'active' : ''} onClick={() => setMode('all')}>All</button>
      </div>

      <div className="jobs-tools">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search role, category, signal..."
        />
        <select value={confidence} onChange={(e) => setConfidence(e.target.value)}>
          <option value="all">All confidence</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
        </select>
      </div>

      <div className="jobs-list">
        {visible.map((job) => (
          <article
            key={job.id}
            className={job.id === selectedId ? 'jobs-row active' : 'jobs-row'}
            onClick={() => setSelectedId(job.id)}
          >
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

      {selected && (
        <div className="jobs-detail-box">
          <strong>{selected.role}</strong>
          <p>{selected.note}</p>
          <small>{selected.source} • Confidence: {selected.confidence}</small>
        </div>
      )}

      <button className="jobs-expand-btn" onClick={() => setExpanded((v) => !v)}>
        {expanded ? 'Show fewer roles' : 'Show more roles'}
      </button>
    </section>
  )
}

export default JobCategories
