import React from 'react'
import { evidenceStats } from '../data/jobData'
import './ImpactMetrics.css'

function ImpactMetrics() {
  return (
    <section className="metrics-panel">
      <div className="metrics-panel-head">
        <h2>Evidence Snapshot</h2>
        <span>Report-backed metrics</span>
      </div>

      <div className="metrics-evidence-list">
        {evidenceStats.map((item) => (
          <article key={item.id} className="metrics-evidence-item">
            <div className="metrics-evidence-top">
              <strong>{item.value}</strong>
              <span>{item.source}</span>
            </div>
            <h3>{item.metric}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ImpactMetrics
