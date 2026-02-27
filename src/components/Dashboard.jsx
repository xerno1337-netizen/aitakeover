import React, { useState, useEffect } from 'react'
import Hero from './Hero'
import ImpactMetrics from './ImpactMetrics'
import JobCategories from './JobCategories'
import GlobalImpact from './GlobalImpact'
import Timeline from './Timeline'
import LiveFeed from './LiveFeed'
import './Dashboard.css'

function Dashboard() {
  const [notifications, setNotifications] = useState([])

  useEffect(() => {
    // Simulate live data updates
    const jobs = [
      'Data Entry Clerk', 'Translator', 'Cashier', 'Accountant', 
      'Customer Service', 'Lawyer', 'Truck Driver', 'Content Writer'
    ]
    const countries = ['United States', 'China', 'Japan', 'Germany', 'UK']
    
    const interval = setInterval(() => {
      const randomJob = jobs[Math.floor(Math.random() * jobs.length)]
      const randomCountry = countries[Math.floor(Math.random() * countries.length)]
      const automation = Math.floor(Math.random() * 5) + 1
      
      const notifications = [
        {
          id: Date.now(),
          type: 'automation',
          message: `${randomJob} automation increased by ${automation}% in ${randomCountry}`,
          timestamp: new Date()
        },
        {
          id: Date.now() + 1,
          type: 'displacement',
          message: `${Math.floor(Math.random() * 50 + 10)}K jobs displaced in ${randomCountry}`,
          timestamp: new Date()
        },
        {
          id: Date.now() + 2,
          type: 'adoption',
          message: `${randomCountry} AI adoption rate increased to ${Math.floor(Math.random() * 10 + 75)}%`,
          timestamp: new Date()
        }
      ]
      
      const notification = notifications[Math.floor(Math.random() * notifications.length)]
      setNotifications(prev => [notification, ...prev].slice(0, 5))
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="dashboard">
      <Hero />
      <LiveFeed notifications={notifications} />
      <div className="dashboard-grid">
        <div className="dashboard-left">
          <ImpactMetrics />
          <JobCategories />
        </div>
        <div className="dashboard-right">
          <GlobalImpact />
          <Timeline />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
