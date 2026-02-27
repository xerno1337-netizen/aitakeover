import React, { useMemo, useState, useEffect } from 'react'
import { globalStats } from '../data/jobData'
import './Hero.css'

function Hero() {
  const [now, setNow] = useState(Date.now())

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(Date.now())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const displacementModel = useMemo(() => {
    const start = new Date('2024-01-01T00:00:00Z').getTime()
    const end = new Date('2040-01-01T00:00:00Z').getTime()
    const totalWindowHours = Math.max(1, (end - start) / 3_600_000)
    const jobsPerHour = globalStats.totalJobsAtRisk / totalWindowHours

    const hourStart = new Date(now)
    hourStart.setMinutes(0, 0, 0)
    const elapsedHourMs = now - hourStart.getTime()
    const elapsedHourRatio = Math.max(0, Math.min(1, elapsedHourMs / 3_600_000))
    const estimatedThisHour = Math.round(jobsPerHour * elapsedHourRatio)

    return {
      jobsPerHour: Math.round(jobsPerHour),
      estimatedThisHour,
    }
  }, [now])

  return (
    <section className="hero-shell">
      <div className="hero-shell-left">
        <div className="hero-kicker">AI Job Risk Index</div>
        <h1>{globalStats.totalJobsAtRisk.toLocaleString()} jobs exposed by 2040</h1>
        <p>
          A compact intelligence view of where automation pressure is rising fastest,
          which job categories are exposed, and how quickly displacement compounds.
        </p>
        <div className="hero-live-box">
          <div className="hero-live-title">Estimated displacement (model)</div>
          <div className="hero-live-value">
            {displacementModel.estimatedThisHour.toLocaleString()} jobs this hour
          </div>
          <div className="hero-live-sub">
            ~{displacementModel.jobsPerHour.toLocaleString()} jobs/hour global average
          </div>
        </div>
      </div>
      <div className="hero-shell-right">
        <div className="hero-chip"><strong>{globalStats.currentAutomationRate}%</strong><span>Current Automation</span></div>
        <div className="hero-chip"><strong>{globalStats.projectedAutomation2040}%</strong><span>Projected 2040</span></div>
        <div className="hero-chip"><strong>{globalStats.countriesMonitored}</strong><span>Countries Tracked</span></div>
        <div className="hero-chip"><strong>{globalStats.activeThreats}</strong><span>Job Categories</span></div>
      </div>
    </section>
  )
}

export default Hero
