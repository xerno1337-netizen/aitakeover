import React, { useState } from 'react'
import Hero from './Hero'
import ImpactMetrics from './ImpactMetrics'
import JobCategories from './JobCategories'
import GlobalImpact from './GlobalImpact'
import Timeline from './Timeline'
import './Dashboard.css'

function Dashboard() {
  const [activeTab, setActiveTab] = useState('analysis')

  const handleNavClick = (tab, targetId) => {
    setActiveTab(tab)
    const target = document.getElementById(targetId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="dashboard">
      <header className="dashboard-topbar">
        <div className="topbar-brand">AIScope</div>
        <nav className="topbar-nav">
          <button
            type="button"
            className={activeTab === 'map' ? 'topbar-link active' : 'topbar-link'}
            onClick={() => handleNavClick('map', 'panel-map')}
          >
            Map
          </button>
          <button
            type="button"
            className={activeTab === 'database' ? 'topbar-link active' : 'topbar-link'}
            onClick={() => handleNavClick('database', 'panel-jobs')}
          >
            Database
          </button>
          <button
            type="button"
            className={activeTab === 'analysis' ? 'topbar-link active' : 'topbar-link'}
            onClick={() => handleNavClick('analysis', 'panel-metrics')}
          >
            Analysis
          </button>
          <button
            type="button"
            className={activeTab === 'briefing' ? 'topbar-link active' : 'topbar-link'}
            onClick={() => handleNavClick('briefing', 'panel-timeline')}
          >
            Briefing
          </button>
        </nav>
        <div className="topbar-actions">
          <button type="button">Subscribe</button>
        </div>
      </header>

      <Hero />

      <main className="dashboard-main-grid">
        <section id="panel-metrics" className="dashboard-panel panel-metrics"><ImpactMetrics /></section>
        <section id="panel-map" className="dashboard-panel panel-map"><GlobalImpact /></section>
        <section id="panel-jobs" className="dashboard-panel panel-jobs"><JobCategories /></section>
        <section id="panel-timeline" className="dashboard-panel panel-timeline"><Timeline /></section>
      </main>
    </div>
  )
}

export default Dashboard
