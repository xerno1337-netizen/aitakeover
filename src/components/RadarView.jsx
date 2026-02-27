import React, { useRef, useEffect } from 'react'
import { jobs } from '../data/jobData'
import './RadarView.css'

function RadarView() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const resizeCanvas = () => {
      const container = canvas.parentElement
      const size = Math.min(container?.clientWidth || 800, 800)
      canvas.width = size
      canvas.height = size
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const ctx = canvas.getContext('2d')

    // Draw scanning line animation
    let scanAngle = 0
    const animate = () => {
      // Recalculate dimensions in case of resize
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const maxRadius = Math.min(centerX, centerY) - 40

      scanAngle += 0.02
      if (scanAngle > Math.PI * 2) scanAngle = 0

      // Redraw everything
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Redraw circles and lines
      for (let i = 1; i <= 5; i++) {
        ctx.strokeStyle = '#e5e5e5'
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.arc(centerX, centerY, (maxRadius / 5) * i, 0, Math.PI * 2)
        ctx.stroke()
      }

      for (let i = 0; i < 8; i++) {
        const angle = (Math.PI * 2 * i) / 8 - Math.PI / 2
        ctx.strokeStyle = '#e5e5e5'
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(
          centerX + Math.cos(angle) * maxRadius,
          centerY + Math.sin(angle) * maxRadius
        )
        ctx.stroke()
      }

      // Redraw jobs
      jobs.forEach((job, index) => {
        const angle = (Math.PI * 2 * index) / jobs.length - Math.PI / 2
        const radius = (maxRadius * job.threatLevel) / 100
        const x = centerX + Math.cos(angle) * radius
        const y = centerY + Math.sin(angle) * radius

        ctx.strokeStyle = `rgba(220, 38, 38, ${0.3 + job.threatLevel / 200})`
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(x, y)
        ctx.stroke()

        ctx.fillStyle = job.threatLevel > 80 ? '#dc2626' : job.threatLevel > 60 ? '#f59e0b' : '#10b981'
        ctx.beginPath()
        ctx.arc(x, y, 6, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = '#1a1a1a'
        ctx.font = '12px Inter'
        ctx.textAlign = 'center'
        const labelX = centerX + Math.cos(angle) * (maxRadius + 25)
        const labelY = centerY + Math.sin(angle) * (maxRadius + 25)
        ctx.fillText(job.name, labelX, labelY)
      })

      // Draw scanning line
      const gradient = ctx.createLinearGradient(centerX, centerY, 
        centerX + Math.cos(scanAngle) * maxRadius, 
        centerY + Math.sin(scanAngle) * maxRadius)
      gradient.addColorStop(0, 'rgba(220, 38, 38, 0.3)')
      gradient.addColorStop(1, 'rgba(220, 38, 38, 0)')
      ctx.strokeStyle = gradient
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(
        centerX + Math.cos(scanAngle) * maxRadius,
        centerY + Math.sin(scanAngle) * maxRadius
      )
      ctx.stroke()
    }

    const interval = setInterval(animate, 50)
    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <div className="radar-view">
      <div className="radar-header">
        <h2>Threat Radar</h2>
        <p>Real-time monitoring of AI job displacement risk levels</p>
      </div>
      <div className="radar-container">
        <div className="radar-canvas-wrapper">
          <canvas
            ref={canvasRef}
            className="radar-canvas"
          />
        </div>
        <div className="radar-legend">
          <div className="legend-item">
            <span className="legend-dot high"></span>
            <span>High Threat (80%+)</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot medium"></span>
            <span>Medium Threat (60-80%)</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot low"></span>
            <span>Low Threat (&lt;60%)</span>
          </div>
        </div>
      </div>
      <div className="threat-stats">
        <div className="stat-card">
          <div className="stat-value">{jobs.filter(j => j.threatLevel >= 80).length}</div>
          <div className="stat-label">High Risk Jobs</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{Math.round(jobs.reduce((acc, j) => acc + j.threatLevel, 0) / jobs.length)}%</div>
          <div className="stat-label">Average Threat Level</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{jobs.filter(j => j.yearsToAutomation <= 2).length}</div>
          <div className="stat-label">Jobs at Risk by 2026</div>
        </div>
      </div>
    </div>
  )
}

export default RadarView
