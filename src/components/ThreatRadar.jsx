import React, { useRef, useEffect, useState } from 'react'
import { jobs } from '../data/jobData'
import './ThreatRadar.css'

function ThreatRadar() {
  const canvasRef = useRef(null)
  const [selectedJob, setSelectedJob] = useState(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const resizeCanvas = () => {
      const container = canvas.parentElement
      const size = Math.min(container?.clientWidth || 1000, 1000)
      canvas.width = size
      canvas.height = size
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const ctx = canvas.getContext('2d')
    let scanAngle = 0
    let animationFrame

    const draw = () => {
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const maxRadius = Math.min(centerX, centerY) - 100

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw radar circles with labels
      for (let i = 1; i <= 5; i++) {
        const radius = (maxRadius / 5) * i
        ctx.strokeStyle = '#e0e0e0'
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
        ctx.stroke()
        
        // Draw threat level labels
        ctx.fillStyle = '#999'
        ctx.font = '400 11px -apple-system, BlinkMacSystemFont, sans-serif'
        ctx.textAlign = 'left'
        ctx.fillText(`${i * 20}%`, centerX + radius + 8, centerY)
      }

      // Draw radar lines
      for (let i = 0; i < 12; i++) {
        const angle = (Math.PI * 2 * i) / 12 - Math.PI / 2
        ctx.strokeStyle = '#e0e0e0'
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(
          centerX + Math.cos(angle) * maxRadius,
          centerY + Math.sin(angle) * maxRadius
        )
        ctx.stroke()
      }

      // Draw threat levels
      jobs.forEach((job, index) => {
        const angle = (Math.PI * 2 * index) / jobs.length - Math.PI / 2
        const radius = (maxRadius * job.threatLevel) / 100
        const x = centerX + Math.cos(angle) * radius
        const y = centerY + Math.sin(angle) * radius

        // Draw line to job
        ctx.strokeStyle = job.threatLevel > 80 
          ? '#dc2626'
          : job.threatLevel > 60 
          ? '#f59e0b'
          : '#10b981'
        ctx.lineWidth = 1.5
        ctx.globalAlpha = 0.2
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(x, y)
        ctx.stroke()
        ctx.globalAlpha = 1

        // Draw job point with ring
        const pointColor = job.threatLevel > 80 
          ? '#dc2626'
          : job.threatLevel > 60 
          ? '#f59e0b'
          : '#10b981'
        
        // Outer ring
        ctx.strokeStyle = pointColor
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(x, y, 10, 0, Math.PI * 2)
        ctx.stroke()
        
        // Inner point
        ctx.fillStyle = pointColor
        ctx.beginPath()
        ctx.arc(x, y, 6, 0, Math.PI * 2)
        ctx.fill()

        // Draw job label
        ctx.fillStyle = '#1a1a1a'
        ctx.font = '500 12px -apple-system, BlinkMacSystemFont, sans-serif'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        const labelX = centerX + Math.cos(angle) * (maxRadius + 50)
        const labelY = centerY + Math.sin(angle) * (maxRadius + 50)
        ctx.fillText(job.name, labelX, labelY)
        
        // Draw threat percentage
        ctx.fillStyle = '#666'
        ctx.font = '400 10px -apple-system, BlinkMacSystemFont, sans-serif'
        ctx.fillText(`${job.threatLevel}%`, labelX, labelY + 16)
      })

      // Draw scanning line
      scanAngle += 0.008
      if (scanAngle > Math.PI * 2) scanAngle = 0

      ctx.strokeStyle = '#3b82f6'
      ctx.lineWidth = 2
      ctx.globalAlpha = 0.3
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(
        centerX + Math.cos(scanAngle) * maxRadius,
        centerY + Math.sin(scanAngle) * maxRadius
      )
      ctx.stroke()
      ctx.globalAlpha = 1

      // Draw center point
      ctx.fillStyle = '#3b82f6'
      ctx.beginPath()
      ctx.arc(centerX, centerY, 4, 0, Math.PI * 2)
      ctx.fill()
    }

    const animate = () => {
      draw()
      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <div className="threat-radar-section">
      <div className="section-header">
        <h2>Threat Analysis</h2>
        <p>Job displacement risk by profession</p>
      </div>
      
      <div className="radar-container">
        <div className="radar-wrapper">
          <canvas ref={canvasRef} className="radar-canvas" />
        </div>
        
        <div className="radar-legend">
          <div className="legend-item">
            <div className="legend-dot critical"></div>
            <span>Critical (80%+)</span>
          </div>
          <div className="legend-item">
            <div className="legend-dot high"></div>
            <span>High (60-80%)</span>
          </div>
          <div className="legend-item">
            <div className="legend-dot moderate"></div>
            <span>Moderate (&lt;60%)</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThreatRadar
