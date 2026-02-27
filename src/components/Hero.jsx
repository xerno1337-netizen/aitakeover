import React, { useMemo, useState, useEffect } from 'react'
import { globalStats } from '../data/jobData'
import LiveCounter from './LiveCounter'
import './Hero.css'

function Hero() {
  const [now, setNow] = useState(Date.now())

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(t)
  }, [])

  const pace = useMemo(() => {
    const perHour = globalStats.jobsDisplacedBy2030 / (5 * 365 * 24)
    const hourStart = new Date(now)
    hourStart.setMinutes(0, 0, 0)
    const elapsedMs = now - hourStart.getTime()
    const thisHour = Math.round((elapsedMs / 3_600_000) * perHour)

    return {
      perHour: Math.round(perHour),
      perMinute: Math.round(perHour / 60),
      thisHour,
    }
  }, [now])

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
          <div className="hero-live-value">
            <LiveCounter target={pace.thisHour} duration={850} /> jobs displaced this hour
          </div>
          <div className="hero-live-sub">
            <span>~{pace.perHour.toLocaleString()}/hour</span>
            <span>~{pace.perMinute.toLocaleString()}/min</span>
            <span>Derived from WEF 2025 (92M over 5y)</span>
          </div>
        </div>
      </div>
      <div className="hero-shell-right">
        <div className="hero-chip"><strong><LiveCounter target={92} duration={1200} suffix="M" /></strong><span>Displaced by 2030</span></div>
        <div className="hero-chip"><strong><LiveCounter target={170} duration={1200} suffix="M" /></strong><span>Created by 2030</span></div>
        <div className="hero-chip"><strong><LiveCounter target={78} duration={1200} prefix="+" suffix="M" /></strong><span>Net by 2030</span></div>
        <div className="hero-chip"><strong><LiveCounter target={300} duration={1200} suffix="M" /></strong><span>FTE Exposed Estimate</span></div>
      </div>
    </section>
  )
}

export default Hero
