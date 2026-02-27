import React, { useState } from 'react'
import { evidenceStats, sourceLinks, regionalExposure } from '../data/jobData'
import './GlobalImpact.css'

function GlobalImpact() {
  const [selectedId, setSelectedId] = useState(evidenceStats[0]?.id)
  const selected = evidenceStats.find((s) => s.id === selectedId)

  return (
    <section className="map-panel">
      <div className="map-panel-head">
        <h2>Methodology & Sources</h2>
        <span>Transparent assumptions</span>
      </div>

      <div className="map-panel-body">
        <div className="map-panel-canvas sources-list-card">
          <h3>Primary Findings</h3>
          <div className="sources-signals">
            {evidenceStats.map((item) => (
              <button
                key={item.id}
                className={item.id === selectedId ? 'source-signal active' : 'source-signal'}
                onClick={() => setSelectedId(item.id)}
              >
                <strong>{item.value}</strong>
                <span>{item.metric}</span>
              </button>
            ))}
          </div>
          {selected && (
            <div className="source-detail">
              <h4>{selected.metric}</h4>
              <p>{selected.detail}</p>
              <small>{selected.source}</small>
            </div>
          )}

          <h3 className="sources-subtitle">Regional IMF split</h3>
          <div className="sources-mini-table">
            {regionalExposure.map((row) => (
              <div key={row.region} className="sources-mini-row">
                <span>{row.region}</span>
                <strong>{row.exposurePct}%</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="map-panel-side">
          <h3>References</h3>
          <div className="map-country-list">
            {sourceLinks.map((source) => (
              <a key={source.url} className="map-country-item" href={source.url} target="_blank" rel="noreferrer">
                <span>{source.title}</span>
              </a>
            ))}
          </div>
          <div className="method-note">
            <h4>Interpretation note</h4>
            <p>
              Exposure metrics describe task-level susceptibility. They do not imply full occupation elimination.
              Displacement and creation figures are scenario-based labor-market restructuring estimates.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GlobalImpact
