import React from 'react'
import { globalStats } from '../data/jobData'
import './StatsBar.css'

function StatsBar() {
  const formatNumber = (num) => {
    if (num >= 1000000000) return (num / 1000000000).toFixed(1) + 'B'
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M'
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K'
    return num.toString()
  }

  return (
    <div className="stats-bar">
      <div className="stats-container">
        <div className="stat-item">
          <div className="stat-label">JOBS AT RISK</div>
          <div className="stat-value">{formatNumber(globalStats.totalJobsAtRisk)}</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-label">CURRENT AUTOMATION</div>
          <div className="stat-value">{globalStats.currentAutomationRate}%</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-label">PROJECTED 2040</div>
          <div className="stat-value danger">{globalStats.projectedAutomation2040}%</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-label">ACTIVE THREATS</div>
          <div className="stat-value">{globalStats.activeThreats}</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-label">COUNTRIES MONITORED</div>
          <div className="stat-value">{globalStats.countriesMonitored}</div>
        </div>
      </div>
    </div>
  )
}

export default StatsBar
