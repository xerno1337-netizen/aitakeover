import React, { useEffect, useState } from 'react'
import './LiveFeed.css'

function LiveFeed({ notifications }) {
  const [visibleNotifications, setVisibleNotifications] = useState([])

  useEffect(() => {
    if (notifications.length > 0) {
      const latest = notifications[0]
      setVisibleNotifications(prev => [latest, ...prev].slice(0, 3))
      
      // Auto-remove after 5 seconds
      setTimeout(() => {
        setVisibleNotifications(prev => prev.filter(n => n.id !== latest.id))
      }, 5000)
    }
  }, [notifications])

  const getIcon = (type) => {
    switch(type) {
      case 'automation': return '⚡'
      case 'displacement': return '⚠️'
      case 'adoption': return '📈'
      default: return '🔔'
    }
  }

  const getColor = (type) => {
    switch(type) {
      case 'automation': return '#3b82f6'
      case 'displacement': return '#dc2626'
      case 'adoption': return '#10b981'
      default: return '#666'
    }
  }

  return (
    <div className="live-feed">
      {visibleNotifications.map((notification) => (
        <div 
          key={notification.id}
          className="notification"
          style={{ borderLeftColor: getColor(notification.type) }}
        >
          <div className="notification-icon">{getIcon(notification.type)}</div>
          <div className="notification-content">
            <div className="notification-message">{notification.message}</div>
            <div className="notification-time">
              {new Date(notification.timestamp).toLocaleTimeString()}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LiveFeed
