import React, { useMemo, useState } from 'react'
import { globalStats } from '../data/jobData'
import './ScenarioLab.css'

function ScenarioLab() {
  const [disruptionMultiplier, setDisruptionMultiplier] = useState(1.7)
  const [reskillingBuffer, setReskillingBuffer] = useState(28)

  const scenario = useMemo(() => {
    const baselineDisplacedPerYear = globalStats.jobsDisplacedBy2030 / 5
    const baselineCreatedPerYear = globalStats.jobsCreatedBy2030 / 5

    const displacedAnnual = baselineDisplacedPerYear * disruptionMultiplier * (1 - reskillingBuffer / 100)
    const createdAnnual = baselineCreatedPerYear * (0.72 + reskillingBuffer / 100)

    const yearsTo2040 = 10
    const displacedTo2040 = Math.round(displacedAnnual * yearsTo2040)
    const createdTo2040 = Math.round(createdAnnual * yearsTo2040)
    const netTo2040 = createdTo2040 - displacedTo2040

    return {
      displacedTo2040,
      createdTo2040,
      netTo2040,
    }
  }, [disruptionMultiplier, reskillingBuffer])

  const fmt = (n) => `${(n / 1_000_000).toFixed(1)}M`

  return (
    <section className="scenario-panel">
      <div className="scenario-head">
        <h2>Scenario Lab (Speculative)</h2>
        <span>Anchored to WEF 2025 baseline, extended to 2040</span>
      </div>

      <p className="scenario-note">
        This is a speculative extension, not a factual forecast: it starts from WEF 2025 displacement/creation
        figures and stress-tests higher disruption vs stronger reskilling outcomes.
      </p>

      <div className="scenario-controls">
        <label>
          Disruption Multiplier: <strong>{disruptionMultiplier.toFixed(1)}x</strong>
          <input
            type="range"
            min="1"
            max="3"
            step="0.1"
            value={disruptionMultiplier}
            onChange={(e) => setDisruptionMultiplier(Number(e.target.value))}
          />
        </label>

        <label>
          Reskilling Buffer: <strong>{reskillingBuffer}%</strong>
          <input
            type="range"
            min="5"
            max="60"
            step="1"
            value={reskillingBuffer}
            onChange={(e) => setReskillingBuffer(Number(e.target.value))}
          />
        </label>
      </div>

      <div className="scenario-grid">
        <article>
          <h3>Displaced (2030-2040)</h3>
          <strong>{fmt(scenario.displacedTo2040)}</strong>
        </article>
        <article>
          <h3>Created (2030-2040)</h3>
          <strong>{fmt(scenario.createdTo2040)}</strong>
        </article>
        <article>
          <h3>Net Impact</h3>
          <strong className={scenario.netTo2040 >= 0 ? 'up' : 'down'}>{fmt(scenario.netTo2040)}</strong>
        </article>
      </div>
    </section>
  )
}

export default ScenarioLab
