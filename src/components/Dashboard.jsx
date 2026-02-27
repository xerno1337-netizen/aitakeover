import React from 'react'
import Hero from './Hero'
import ImpactMetrics from './ImpactMetrics'
import JobCategories from './JobCategories'
import GlobalImpact from './GlobalImpact'
import Timeline from './Timeline'
import './Dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard-topbar">
        <div className="topbar-brand">AIScope</div>
        <nav className="topbar-nav">
          <span>Map</span>
          <span>Database</span>
          <span>Analysis</span>
          <span>Briefing</span>
        </nav>
        <div className="topbar-actions">
          <button type="button">Subscribe</button>
        </div>
      </header>

      <Hero />

      <main className="dashboard-main-grid">
        <section className="dashboard-panel panel-metrics"><ImpactMetrics /></section>
        <section className="dashboard-panel panel-map"><GlobalImpact /></section>
        <section className="dashboard-panel panel-jobs"><JobCategories /></section>
        <section className="dashboard-panel panel-timeline"><Timeline /></section>
      </main>
    </div>
  )
}

export default Dashboard
