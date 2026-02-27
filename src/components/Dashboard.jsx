import React, { useState } from 'react'
import Hero from './Hero'
import ImpactMetrics from './ImpactMetrics'
import JobCategories from './JobCategories'
import GlobalImpact from './GlobalImpact'
import Timeline from './Timeline'
import ScenarioLab from './ScenarioLab'
import './Dashboard.css'

function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  const renderTabContent = () => {
    if (activeTab === 'overview') {
      return (
        <main className="dashboard-main-grid">
          <section className="dashboard-panel"><ImpactMetrics /></section>
          <section className="dashboard-panel"><GlobalImpact /></section>
          <section className="dashboard-panel"><JobCategories /></section>
          <section className="dashboard-panel"><Timeline /></section>
        </main>
      )
    }

    if (activeTab === 'evidence') {
      return <div className="dashboard-single"><ImpactMetrics /></div>
    }

    if (activeTab === 'signals') {
      return <div className="dashboard-single"><JobCategories /></div>
    }

    if (activeTab === 'timeline') {
      return <div className="dashboard-single"><Timeline /></div>
    }

    if (activeTab === 'scenario') {
      return <div className="dashboard-single"><ScenarioLab /></div>
    }

    return <div className="dashboard-single"><GlobalImpact /></div>
  }

  return (
    <div className="dashboard">
      <header className="dashboard-topbar">
        <div className="topbar-brand">AIScope</div>
        <nav className="topbar-nav">
          <button type="button" className={activeTab === 'overview' ? 'topbar-link active' : 'topbar-link'} onClick={() => setActiveTab('overview')}>Overview</button>
          <button type="button" className={activeTab === 'evidence' ? 'topbar-link active' : 'topbar-link'} onClick={() => setActiveTab('evidence')}>Evidence</button>
          <button type="button" className={activeTab === 'signals' ? 'topbar-link active' : 'topbar-link'} onClick={() => setActiveTab('signals')}>Signals</button>
          <button type="button" className={activeTab === 'timeline' ? 'topbar-link active' : 'topbar-link'} onClick={() => setActiveTab('timeline')}>Timeline</button>
          <button type="button" className={activeTab === 'scenario' ? 'topbar-link active' : 'topbar-link'} onClick={() => setActiveTab('scenario')}>Scenario Lab</button>
          <button type="button" className={activeTab === 'sources' ? 'topbar-link active' : 'topbar-link'} onClick={() => setActiveTab('sources')}>Sources</button>
        </nav>
        <div className="topbar-actions">
          <button type="button">Data Notes</button>
        </div>
      </header>

      <Hero />
      {renderTabContent()}
    </div>
  )
}

export default Dashboard
