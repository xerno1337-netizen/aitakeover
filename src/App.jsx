import React, { useState } from 'react'
import Header from './components/Header'
import RadarView from './components/RadarView'
import TimelineChart from './components/TimelineChart'
import WorldMap from './components/WorldMap'
import JobList from './components/JobList'
import './App.css'

function App() {
  const [activeView, setActiveView] = useState('radar')

  return (
    <div className="app">
      <Header />
      <nav className="view-nav">
        <button 
          className={activeView === 'radar' ? 'active' : ''}
          onClick={() => setActiveView('radar')}
        >
          Threat Radar
        </button>
        <button 
          className={activeView === 'timeline' ? 'active' : ''}
          onClick={() => setActiveView('timeline')}
        >
          Timeline
        </button>
        <button 
          className={activeView === 'world' ? 'active' : ''}
          onClick={() => setActiveView('world')}
        >
          Global Spread
        </button>
        <button 
          className={activeView === 'jobs' ? 'active' : ''}
          onClick={() => setActiveView('jobs')}
        >
          Job Analysis
        </button>
      </nav>
      
      <main className="main-content">
        {activeView === 'radar' && <RadarView />}
        {activeView === 'timeline' && <TimelineChart />}
        {activeView === 'world' && <WorldMap />}
        {activeView === 'jobs' && <JobList />}
      </main>
    </div>
  )
}

export default App
