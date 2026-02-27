import React from 'react'
import './ScannerHeader.css'

function ScannerHeader({ currentTime }) {
  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
  }

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <header className="scanner-header">
      <div className="header-content">
        <div className="logo-section">
          <div className="logo-icon">
            <div className="icon-pulse"></div>
            <span>⚡</span>
          </div>
          <div className="logo-text">
            <h1>AIScope</h1>
            <p className="tagline">AI Job Displacement Monitoring System</p>
          </div>
        </div>
        
        <div className="header-info">
          <div className="status-indicator">
            <span className="status-dot"></span>
            <span>SYSTEM ACTIVE</span>
          </div>
          <div className="time-display">
            <div className="time">{formatTime(currentTime)}</div>
            <div className="date">{formatDate(currentTime)}</div>
          </div>
        </div>
      </div>
      
      <div className="header-accent"></div>
    </header>
  )
}

export default ScannerHeader
