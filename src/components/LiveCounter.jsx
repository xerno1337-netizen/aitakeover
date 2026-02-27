import React, { useState, useEffect } from 'react'
import './LiveCounter.css'

function LiveCounter({ target, duration = 2000, prefix = '', suffix = '', decimals = 0 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime = null
    const startValue = 0

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const current = startValue + (target - startValue) * easeOutQuart
      
      setCount(current)
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }

    requestAnimationFrame(animate)
  }, [target, duration])

  const formatNumber = (num) => {
    if (decimals === 0) return Math.floor(num).toLocaleString()
    return num.toFixed(decimals).toLocaleString()
  }

  return (
    <span className="live-counter">
      {prefix}{formatNumber(count)}{suffix}
    </span>
  )
}

export default LiveCounter
