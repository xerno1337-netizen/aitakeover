import React from 'react'
import { globalStats } from '../data/jobData'
import './Hero.css'

function Hero() {
  return (
    <section className="hero-shell">
      <div className="hero-shell-left">
        <div className="hero-kicker">AI Job Risk Index</div>
        <h1>{globalStats.totalJobsAtRisk.toLocaleString()} jobs exposed by 2040</h1>
        <p>
          A compact intelligence view of where automation pressure is rising fastest,
          which job categories are exposed, and how quickly displacement compounds.
        </p>
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
