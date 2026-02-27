import React, { useState, useEffect } from 'react'

function LiveCounter({ target, duration = 2000, prefix = '', suffix = '', decimals = 0 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime = null
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      setCount(target * eased)
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [target, duration])

  const value = decimals === 0 ? Math.floor(count).toLocaleString() : count.toFixed(decimals).toLocaleString()
  return <span style={{ fontVariantNumeric: 'tabular-nums' }}>{prefix}{value}{suffix}</span>
}

export default LiveCounter
