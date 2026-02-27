import React from 'react'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <span className="logo-icon">⚡</span>
          <h1>AIScope</h1>
        </div>
        <p className="tagline">Real-time AI job displacement monitoring</p>
        <div className="status-indicator">
          <span className="status-dot"></span>
          <span>Live tracking active</span>
        </div>
      </div>
    </header>
  )
}

export default Header
