import React from 'react'
import { globalStats } from '../data/jobData'
import './Hero.css'

function Hero() {
  return (
    <section className="hero-shell">
      <div className="hero-shell-left">
        <div className="hero-kicker">Evidence-Based AI Work Monitor</div>
        <h1>{globalStats.aiExposureGlobalPct}% of global employment is exposed to AI tasks</h1>
        <p>
          This dashboard is built from public reports (IMF, WEF, Goldman Sachs, OECD).
          Metrics below are sourced estimates, not random generated alerts.
        </p>
        <div className="hero-live-box">
          <div className="hero-live-title">Estimated displacement pace (WEF 2025 baseline)</div>
          <div className="hero-live-value">~1,750 jobs/hour displaced (2025-2030 avg)</div>
          <div className="hero-live-sub">Derived from 92M displaced jobs over 5 years (WEF Future of Jobs 2025)</div>
        </div>
      </div>
      <div className="hero-shell-right">
        <div className="hero-chip"><strong>92M</strong><span>Displaced by 2030</span></div>
        <div className="hero-chip"><strong>170M</strong><span>Created by 2030</span></div>
        <div className="hero-chip"><strong>+78M</strong><span>Net by 2030</span></div>
        <div className="hero-chip"><strong>300M</strong><span>FTE Exposed Estimate</span></div>
      </div>
    </section>
  )
}

export default Hero
