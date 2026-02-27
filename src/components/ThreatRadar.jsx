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
      const size = Math.min(container?.clientWidth || 900, 900)
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
      const maxRadius = Math.min(centerX, centerY) - 60

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw outer glow
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius + 20)
      gradient.addColorStop(0, 'rgba(0, 255, 255, 0.1)')
      gradient.addColorStop(1, 'rgba(0, 255, 255, 0)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw radar circles
      for (let i = 1; i <= 5; i++) {
        ctx.strokeStyle = `rgba(0, 255, 255, ${0.2 - i * 0.03})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.arc(centerX, centerY, (maxRadius / 5) * i, 0, Math.PI * 2)
        ctx.stroke()
      }

      // Draw radar lines
      for (let i = 0; i < 12; i++) {
        const angle = (Math.PI * 2 * i) / 12 - Math.PI / 2
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.15)'
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
        const lineAlpha = 0.2 + (job.threatLevel / 100) * 0.3
        ctx.strokeStyle = job.threatLevel > 80 
          ? `rgba(255, 0, 102, ${lineAlpha})`
          : job.threatLevel > 60 
          ? `rgba(255, 165, 0, ${lineAlpha})`
          : `rgba(0, 255, 0, ${lineAlpha})`
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(x, y)
        ctx.stroke()

        // Draw job point with glow
        const pointGradient = ctx.createRadialGradient(x, y, 0, x, y, 12)
        pointGradient.addColorStop(0, job.threatLevel > 80 
          ? 'rgba(255, 0, 102, 1)'
          : job.threatLevel > 60 
          ? 'rgba(255, 165, 0, 1)'
          : 'rgba(0, 255, 0, 1)')
        pointGradient.addColorStop(1, job.threatLevel > 80 
          ? 'rgba(255, 0, 102, 0)'
          : job.threatLevel > 60 
          ? 'rgba(255, 165, 0, 0)'
          : 'rgba(0, 255, 0, 0)')
        
        ctx.fillStyle = pointGradient
        ctx.beginPath()
        ctx.arc(x, y, 12, 0, Math.PI * 2)
        ctx.fill()

        // Draw job point
        ctx.fillStyle = job.threatLevel > 80 
          ? '#ff0066'
          : job.threatLevel > 60 
          ? '#ffa500'
          : '#00ff00'
        ctx.beginPath()
        ctx.arc(x, y, 6, 0, Math.PI * 2)
        ctx.fill()

        // Draw job label
        ctx.fillStyle = '#ffffff'
        ctx.font = 'bold 11px Inter'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        const labelX = centerX + Math.cos(angle) * (maxRadius + 35)
        const labelY = centerY + Math.sin(angle) * (maxRadius + 35)
        ctx.fillText(job.name, labelX, labelY)
      })

      // Draw scanning line
      scanAngle += 0.015
      if (scanAngle > Math.PI * 2) scanAngle = 0

      const scanGradient = ctx.createLinearGradient(centerX, centerY, 
        centerX + Math.cos(scanAngle) * maxRadius, 
        centerY + Math.sin(scanAngle) * maxRadius)
      scanGradient.addColorStop(0, 'rgba(0, 255, 255, 0.4)')
      scanGradient.addColorStop(0.5, 'rgba(0, 255, 255, 0.2)')
      scanGradient.addColorStop(1, 'rgba(0, 255, 255, 0)')
      ctx.strokeStyle = scanGradient
      ctx.lineWidth = 3
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(
        centerX + Math.cos(scanAngle) * maxRadius,
        centerY + Math.sin(scanAngle) * maxRadius
      )
      ctx.stroke()

      // Draw center point
      ctx.fillStyle = '#00ffff'
      ctx.beginPath()
      ctx.arc(centerX, centerY, 4, 0, Math.PI * 2)
      ctx.fill()
      ctx.shadowBlur = 20
      ctx.shadowColor = '#00ffff'
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
        <h2>THREAT RADAR</h2>
        <p>Real-time AI job displacement monitoring</p>
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
