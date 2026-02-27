import React, { useRef, useEffect, useState } from 'react'
import { jobs } from '../data/jobData'
import './ThreatRadar.css'

function ThreatRadar({ selectedJob, setSelectedJob }) {
  const canvasRef = useRef(null)
  const [hoveredJob, setHoveredJob] = useState(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const resizeCanvas = () => {
      const container = canvas.parentElement
      const size = Math.min(container?.clientWidth || 1200, 1200, window.innerHeight * 0.8)
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
      const maxRadius = Math.min(centerX, centerY) - 120

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw radar circles with threat level labels
      for (let i = 1; i <= 5; i++) {
        const radius = (maxRadius / 5) * i
        ctx.strokeStyle = '#d0d0d0'
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
        ctx.stroke()
        
        // Threat level labels
        ctx.fillStyle = '#999'
        ctx.font = '400 12px -apple-system, BlinkMacSystemFont, sans-serif'
        ctx.textAlign = 'left'
        ctx.fillText(`${i * 20}%`, centerX + radius + 10, centerY + 4)
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

        const isHovered = hoveredJob?.id === job.id
        const isSelected = selectedJob?.id === job.id

        // Draw line to job
        ctx.strokeStyle = job.threatLevel > 80 
          ? '#dc2626'
          : job.threatLevel > 60 
          ? '#f59e0b'
          : '#10b981'
        ctx.lineWidth = isHovered || isSelected ? 2 : 1.5
        ctx.globalAlpha = isHovered || isSelected ? 0.4 : 0.2
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(x, y)
        ctx.stroke()
        ctx.globalAlpha = 1

        // Draw job point with enhanced visibility
        const pointColor = job.threatLevel > 80 
          ? '#dc2626'
          : job.threatLevel > 60 
          ? '#f59e0b'
          : '#10b981'
        
        // Outer ring (larger if hovered/selected)
        const ringSize = isHovered || isSelected ? 14 : 10
        ctx.strokeStyle = pointColor
        ctx.lineWidth = isHovered || isSelected ? 3 : 2
        ctx.beginPath()
        ctx.arc(x, y, ringSize, 0, Math.PI * 2)
        ctx.stroke()
        
        // Inner point
        ctx.fillStyle = pointColor
        ctx.beginPath()
        ctx.arc(x, y, isHovered || isSelected ? 8 : 6, 0, Math.PI * 2)
        ctx.fill()

        // Draw job label (enhanced if hovered)
        ctx.fillStyle = isHovered || isSelected ? '#1a1a1a' : '#333'
        ctx.font = isHovered || isSelected 
          ? '600 14px -apple-system, BlinkMacSystemFont, sans-serif'
          : '500 12px -apple-system, BlinkMacSystemFont, sans-serif'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        const labelX = centerX + Math.cos(angle) * (maxRadius + 60)
        const labelY = centerY + Math.sin(angle) * (maxRadius + 60)
        ctx.fillText(job.name, labelX, labelY)
        
        // Draw threat percentage
        ctx.fillStyle = isHovered || isSelected ? '#1a1a1a' : '#666'
        ctx.font = isHovered || isSelected
          ? '600 12px -apple-system, BlinkMacSystemFont, sans-serif'
          : '400 10px -apple-system, BlinkMacSystemFont, sans-serif'
        ctx.fillText(`${job.threatLevel}%`, labelX, labelY + 18)
      })

      // Draw scanning line
      scanAngle += 0.006
      if (scanAngle > Math.PI * 2) scanAngle = 0

      ctx.strokeStyle = '#3b82f6'
      ctx.lineWidth = 2
      ctx.globalAlpha = 0.25
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
      ctx.arc(centerX, centerY, 5, 0, Math.PI * 2)
      ctx.fill()
    }

    const animate = () => {
      draw()
      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    // Handle mouse interactions
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const maxRadius = Math.min(centerX, centerY) - 120
      
      let foundJob = null
      jobs.forEach((job, index) => {
        const angle = (Math.PI * 2 * index) / jobs.length - Math.PI / 2
        const radius = (maxRadius * job.threatLevel) / 100
        const jobX = centerX + Math.cos(angle) * radius
        const jobY = centerY + Math.sin(angle) * radius
        
        const distance = Math.sqrt((x - jobX) ** 2 + (y - jobY) ** 2)
        if (distance < 20) {
          foundJob = job
        }
      })
      
      setHoveredJob(foundJob)
      canvas.style.cursor = foundJob ? 'pointer' : 'default'
    }

    const handleClick = (e) => {
      if (hoveredJob) {
        setSelectedJob(hoveredJob)
      }
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('click', handleClick)

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resizeCanvas)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('click', handleClick)
    }
  }, [hoveredJob, selectedJob, setSelectedJob])

  return (
    <div className="threat-radar-section">
      <div className="radar-container">
        <div className="radar-header">
          <h2>Threat Analysis</h2>
          <p>Interactive radar visualization of job displacement risk</p>
        </div>
        
        <div className="radar-wrapper">
          <canvas ref={canvasRef} className="radar-canvas" />
          {hoveredJob && !selectedJob && (
            <div className="hover-tooltip">
              <strong>{hoveredJob.name}</strong>
              <span>{hoveredJob.threatLevel}% threat level</span>
            </div>
          )}
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
