import React, { useMemo, useState } from 'react'
import { globalStats, scenarioBands } from '../data/jobData'
import './ScenarioLab.css'

function ScenarioLab() {
  const [disruptionMultiplier, setDisruptionMultiplier] = useState(1.7)
  const [reskillingBuffer, setReskillingBuffer] = useState(28)
  const [selectedBand, setSelectedBand] = useState(scenarioBands[0]?.label ?? '')

  const scenario = useMemo(() => {
    const baselineDisplacedPerYear = globalStats.jobsDisplacedBy2030 / 5
    const baselineCreatedPerYear = globalStats.jobsCreatedBy2030 / 5

    const displacedAnnual = baselineDisplacedPerYear * disruptionMultiplier * (1 - reskillingBuffer / 100)
    const createdAnnual = baselineCreatedPerYear * (0.72 + reskillingBuffer / 100)

    const yearsTo2040 = 10
    const displacedTo2040 = Math.round(displacedAnnual * yearsTo2040)
    const createdTo2040 = Math.round(createdAnnual * yearsTo2040)
    const netTo2040 = createdTo2040 - displacedTo2040

    return { displacedTo2040, createdTo2040, netTo2040 }
  }, [disruptionMultiplier, reskillingBuffer])

  const fmt = (n) => `${(n / 1_000_000).toFixed(1)}M`
  const stressScore = Math.max(0, Math.min(100, Math.round((disruptionMultiplier * 35) + (50 - reskillingBuffer))))

  return (
    <section className="scenario-panel">
      <div className="scenario-head">
        <h2>Scenario Lab (Speculative)</h2>
        <span>Anchored to WEF 2025 baseline</span>
      </div>

      <p className="scenario-note">
        Speculation mode: these are stress-test paths, not measured outcomes.
        They extrapolate WEF displacement/creation dynamics with adjustable disruption and reskilling factors.
      </p>

      <div className="scenario-controls">
        <label>
          Disruption Multiplier: <strong>{disruptionMultiplier.toFixed(1)}x</strong>
          <input type="range" min="1" max="3" step="0.1" value={disruptionMultiplier} onChange={(e) => setDisruptionMultiplier(Number(e.target.value))} />
        </label>

        <label>
          Reskilling Buffer: <strong>{reskillingBuffer}%</strong>
          <input type="range" min="5" max="60" step="1" value={reskillingBuffer} onChange={(e) => setReskillingBuffer(Number(e.target.value))} />
        </label>
      </div>

      <div className="scenario-presets">
        {scenarioBands.map((band) => (
          <button
            key={band.label}
            className={selectedBand === band.label ? 'active' : ''}
            onClick={() => {
              setSelectedBand(band.label)
              setDisruptionMultiplier(band.disruptionMultiplier)
              setReskillingBuffer(band.reskillingBufferPct)
            }}
          >
            {band.label}
          </button>
        ))}
      </div>

      <div className="scenario-grid">
        <article><h3>Displaced (2030-2040)</h3><strong>{fmt(scenario.displacedTo2040)}</strong></article>
        <article><h3>Created (2030-2040)</h3><strong>{fmt(scenario.createdTo2040)}</strong></article>
        <article><h3>Net Impact</h3><strong className={scenario.netTo2040 >= 0 ? 'up' : 'down'}>{fmt(scenario.netTo2040)}</strong></article>
      </div>

      <div className="scenario-stress">
        <div>
          <span>Stress Score</span>
          <strong>{stressScore}/100</strong>
        </div>
        <div className="scenario-stress-bar">
          <div style={{ width: `${stressScore}%` }} />
        </div>
      </div>

      <div className="scenario-band-table">
        <h3>Reference Bands</h3>
        {scenarioBands.map((band) => (
          <div key={band.label} className="scenario-band-row">
            <div>
              <strong>{band.label}</strong>
              <span>{band.disruptionMultiplier}x disruption • {band.reskillingBufferPct}% buffer</span>
            </div>
            <div className={band.net2030to2040 >= 0 ? 'up' : 'down'}>{fmt(band.net2030to2040)} net</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ScenarioLab
