import React, { useMemo, useState } from 'react'
import { checkpoint2026, evidenceStats, regionalExposure, sectorPressure } from '../data/jobData'
import './ImpactMetrics.css'

function ImpactMetrics() {
  const [sortKey, setSortKey] = useState('exposurePct')
  const [selectedSector, setSelectedSector] = useState(sectorPressure[0]?.sector)

  const sortedRegions = useMemo(() => {
    return [...regionalExposure].sort((a, b) => b[sortKey] - a[sortKey])
  }, [sortKey])

  const selectedSectorRow = useMemo(
    () => sectorPressure.find((row) => row.sector === selectedSector) ?? sectorPressure[0],
    [selectedSector]
  )

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

      <div className="metrics-section-label">2026 checkpoint (scenario baseline)</div>
      <div className="metrics-2026-grid">
        {checkpoint2026.map((item) => (
          <article key={item.metric} className="metrics-2026-item">
            <strong>{item.value}</strong>
            <h3>{item.metric}</h3>
            <p>{item.detail}</p>
            <small>{item.source}</small>
          </article>
        ))}
      </div>

      <div className="metrics-section-label">Regional exposure split (click headers to sort)</div>
      <div className="metrics-table-wrap">
        <table className="metrics-table">
          <thead>
            <tr>
              <th>Region</th>
              <th>
                <button type="button" onClick={() => setSortKey('exposurePct')}>Exposure</button>
              </th>
              <th>
                <button type="button" onClick={() => setSortKey('highAutomationRiskPct')}>High risk</button>
              </th>
              <th>
                <button type="button" onClick={() => setSortKey('augmentationPotentialPct')}>Augmentation</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedRegions.map((row) => (
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
          <article
            key={item.sector}
            className={item.sector === selectedSector ? 'metrics-sector-item active' : 'metrics-sector-item'}
            onClick={() => setSelectedSector(item.sector)}
          >
            <div className="metrics-sector-top">
              <strong>{item.sector}</strong>
              <span>{item.pressureLevel}</span>
            </div>
            <p>{item.signal}</p>
            <small>{item.taskExposurePct}% task exposure • {item.source}</small>
          </article>
        ))}
      </div>

      {selectedSectorRow && (
        <div className="metrics-sector-detail">
          <strong>{selectedSectorRow.sector}</strong>
          <p>{selectedSectorRow.signal}</p>
          <small>Exposure: {selectedSectorRow.taskExposurePct}% • {selectedSectorRow.source}</small>
        </div>
      )}
    </section>
  )
}

export default ImpactMetrics
