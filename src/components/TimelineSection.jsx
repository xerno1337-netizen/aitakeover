import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts'
import { timelineData } from '../data/jobData'
import './TimelineSection.css'

function TimelineSection() {
  return (
    <div className="timeline-section">
      <div className="section-header">
        <h2>PROJECTION TIMELINE</h2>
        <p>AI automation progression from 2024 to 2040</p>
      </div>

      <div className="charts-container">
        <div className="chart-card">
          <div className="chart-header">
            <h3>Global Automation Rate</h3>
            <div className="chart-badge">2040: 94%</div>
          </div>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={timelineData}>
              <defs>
                <linearGradient id="colorAutomation" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ff0066" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#ff0066" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 255, 255, 0.1)" />
              <XAxis 
                dataKey="year" 
                stroke="rgba(255, 255, 255, 0.5)"
                tick={{ fill: 'rgba(255, 255, 255, 0.6)', fontSize: 12 }}
              />
              <YAxis 
                stroke="rgba(255, 255, 255, 0.5)"
                tick={{ fill: 'rgba(255, 255, 255, 0.6)', fontSize: 12 }}
                label={{ value: 'Automation %', angle: -90, position: 'insideLeft', fill: 'rgba(255, 255, 255, 0.6)' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(10, 10, 15, 0.95)', 
                  border: '1px solid rgba(0, 255, 255, 0.3)',
                  borderRadius: '8px',
                  color: '#ffffff'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="automation" 
                stroke="#ff0066" 
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorAutomation)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <div className="chart-header">
            <h3>Job Displacement vs Creation</h3>
            <div className="chart-badge">Net Loss</div>
          </div>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={timelineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 255, 255, 0.1)" />
              <XAxis 
                dataKey="year" 
                stroke="rgba(255, 255, 255, 0.5)"
                tick={{ fill: 'rgba(255, 255, 255, 0.6)', fontSize: 12 }}
              />
              <YAxis 
                stroke="rgba(255, 255, 255, 0.5)"
                tick={{ fill: 'rgba(255, 255, 255, 0.6)', fontSize: 12 }}
                label={{ value: 'Jobs (millions)', angle: -90, position: 'insideLeft', fill: 'rgba(255, 255, 255, 0.6)' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(10, 10, 15, 0.95)', 
                  border: '1px solid rgba(0, 255, 255, 0.3)',
                  borderRadius: '8px',
                  color: '#ffffff'
                }}
              />
              <Legend 
                wrapperStyle={{ color: 'rgba(255, 255, 255, 0.7)' }}
              />
              <Line 
                type="monotone" 
                dataKey="jobsDisplaced" 
                stroke="#ff0066" 
                strokeWidth={3}
                name="Jobs Displaced"
                dot={{ fill: '#ff0066', r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="newJobsCreated" 
                stroke="#00ff00" 
                strokeWidth={3}
                name="New Jobs Created"
                dot={{ fill: '#00ff00', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="milestones">
        <div className="milestone">
          <div className="milestone-year">2026</div>
          <div className="milestone-content">
            <strong>Early Wave</strong>
            <p>28% automation. Data entry, basic customer service roles significantly reduced.</p>
          </div>
        </div>
        <div className="milestone">
          <div className="milestone-year">2030</div>
          <div className="milestone-content">
            <strong>Acceleration</strong>
            <p>50% automation. Legal research, accounting, translation heavily impacted.</p>
          </div>
        </div>
        <div className="milestone">
          <div className="milestone-year">2035</div>
          <div className="milestone-content">
            <strong>Transformation</strong>
            <p>75% automation. Transportation, retail, and creative industries transformed.</p>
          </div>
        </div>
        <div className="milestone">
          <div className="milestone-year">2040</div>
          <div className="milestone-content">
            <strong>Near-Complete</strong>
            <p>94% automation. Only highly specialized, human-centric roles remain.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimelineSection
