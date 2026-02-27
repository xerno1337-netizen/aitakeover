import React from 'react'
import { globalStats } from '../data/jobData'
import LiveCounter from './LiveCounter'
import './ImpactMetrics.css'

function ImpactMetrics() {
  return (
    <section className="metrics-panel">
      <div className="metrics-panel-head">
        <h2>Core Metrics</h2>
        <span>Updated every build</span>
      </div>

      <div className="metrics-primary-card">
        <div className="metrics-primary-title">Estimated jobs exposed globally</div>
        <div className="metrics-primary-value"><LiveCounter target={globalStats.totalJobsAtRisk} duration={2200} /></div>
      </div>

      <div className="metrics-mini-grid">
        <article className="metrics-mini-card"><strong><LiveCounter target={globalStats.currentAutomationRate} suffix="%" /></strong><span>Current</span></article>
        <article className="metrics-mini-card"><strong><LiveCounter target={globalStats.projectedAutomation2040} suffix="%" /></strong><span>2040</span></article>
        <article className="metrics-mini-card"><strong>{globalStats.countriesMonitored}</strong><span>Countries</span></article>
        <article className="metrics-mini-card"><strong>{globalStats.activeThreats}</strong><span>Categories</span></article>
      </div>
    </section>
  )
}

export default ImpactMetrics
