import React from 'react'
import { globalStats } from '../data/jobData'
import LiveCounter from './LiveCounter'
import './ImpactMetrics.css'

function ImpactMetrics() {
  const formatNumber = (num) => {
    if (num >= 1000000000) return (num / 1000000000).toFixed(1) + 'B'
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M'
    return num.toString()
  }

  return (
    <section className="impact-metrics">
      <div className="metrics-container">
        <div className="metric-card primary">
          <div className="metric-icon">📊</div>
          <div className="metric-content">
            <div className="metric-value">
              <LiveCounter target={globalStats.totalJobsAtRisk} duration={3000} />
            </div>
            <div className="metric-label">Jobs at Risk Globally</div>
            <div className="metric-description">
              Based on current AI adoption rates and projected growth
            </div>
          </div>
        </div>
        
        <div className="metrics-grid">
          <div className="metric-card">
            <div className="metric-value-small">
              <LiveCounter target={globalStats.currentAutomationRate} duration={2000} suffix="%" />
            </div>
            <div className="metric-label-small">Current Automation</div>
          </div>
          
          <div className="metric-card">
            <div className="metric-value-small">
              <LiveCounter target={globalStats.projectedAutomation2040} duration={2500} suffix="%" />
            </div>
            <div className="metric-label-small">Projected 2040</div>
          </div>
          
          <div className="metric-card">
            <div className="metric-value-small">{globalStats.countriesMonitored}</div>
            <div className="metric-label-small">Countries Monitored</div>
          </div>
          
          <div className="metric-card">
            <div className="metric-value-small">{globalStats.activeThreats}</div>
            <div className="metric-label-small">Job Categories</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImpactMetrics
