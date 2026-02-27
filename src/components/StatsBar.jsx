import React from 'react'
import { globalStats } from '../data/jobData'
import LiveCounter from './LiveCounter'
import './StatsBar.css'

function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="stats-container">
        <div className="stat-item">
          <div className="stat-value">
            <LiveCounter target={globalStats.totalJobsAtRisk} duration={3000} suffix="+" />
          </div>
          <div className="stat-label">Jobs at Risk Globally</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">
            <LiveCounter target={globalStats.currentAutomationRate} duration={2000} suffix="%" />
          </div>
          <div className="stat-label">Current Automation Rate</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">
            <LiveCounter target={globalStats.projectedAutomation2040} duration={2500} suffix="%" />
          </div>
          <div className="stat-label">Projected by 2040</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">
            <LiveCounter target={globalStats.activeThreats} duration={1500} />
          </div>
          <div className="stat-label">Job Categories at Risk</div>
        </div>
      </div>
    </div>
  )
}

export default StatsBar
