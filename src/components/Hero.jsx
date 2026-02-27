import React from 'react'
import { globalStats } from '../data/jobData'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">AI Displacement Monitor</div>
        <h1 className="hero-title">
          <span className="hero-title-main">375 Million Jobs</span>
          <span className="hero-title-sub">at risk of automation by 2040</span>
        </h1>
        <p className="hero-description">
          Real-time analysis of AI's impact on global employment. 
          Track which jobs are disappearing, where, and how fast.
        </p>
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-value">{globalStats.currentAutomationRate}%</div>
            <div className="hero-stat-label">Currently Automated</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">{globalStats.projectedAutomation2040}%</div>
            <div className="hero-stat-label">Projected by 2040</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">{globalStats.activeThreats}</div>
            <div className="hero-stat-label">Job Categories at Risk</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
