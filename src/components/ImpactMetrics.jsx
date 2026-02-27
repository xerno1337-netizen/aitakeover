import React from 'react'
import { evidenceStats, regionalExposure, sectorPressure } from '../data/jobData'
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

      <div className="metrics-section-label">Regional exposure split</div>
      <div className="metrics-table-wrap">
        <table className="metrics-table">
          <thead>
            <tr>
              <th>Region</th>
              <th>Exposure</th>
              <th>High risk</th>
              <th>Augmentation</th>
            </tr>
          </thead>
          <tbody>
            {regionalExposure.map((row) => (
              <tr key={row.region}>
                <td>{row.region}</td>
                <td>{row.exposurePct}%</td>
                <td>{row.highAutomationRiskPct}%</td>
                <td>{row.augmentationPotentialPct}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="metrics-section-label">Sector pressure monitor</div>
      <div className="metrics-sector-grid">
        {sectorPressure.map((item) => (
          <article key={item.sector} className="metrics-sector-item">
            <div className="metrics-sector-top">
              <strong>{item.sector}</strong>
              <span>{item.pressureLevel}</span>
            </div>
            <p>{item.signal}</p>
            <small>{item.taskExposurePct}% task exposure • {item.source}</small>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ImpactMetrics
