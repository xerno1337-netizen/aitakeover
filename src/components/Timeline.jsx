import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts'
import { timelineData } from '../data/jobData'
import './Timeline.css'

function Timeline() {
  return (
    <section className="timeline">
      <div className="section-container">
        <div className="section-header">
          <h2>Projection Timeline</h2>
          <p>AI automation progression from 2024 to 2040</p>
        </div>

        <div className="charts-container">
          <div className="chart-card">
            <h3>Global Automation Rate</h3>
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={timelineData}>
                <defs>
                  <linearGradient id="colorAutomation" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                <XAxis 
                  dataKey="year" 
                  stroke="#666"
                  tick={{ fill: '#666', fontSize: 12 }}
                />
                <YAxis 
                  stroke="#666"
                  tick={{ fill: '#666', fontSize: 12 }}
                  label={{ value: 'Automation %', angle: -90, position: 'insideLeft', fill: '#666' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#ffffff', 
                    border: '1px solid #e5e5e5',
                    borderRadius: '8px',
                    color: '#1a1a1a'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="automation" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorAutomation)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-card">
            <h3>Job Displacement vs Creation</h3>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={timelineData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                <XAxis 
                  dataKey="year" 
                  stroke="#666"
                  tick={{ fill: '#666', fontSize: 12 }}
                />
                <YAxis 
                  stroke="#666"
                  tick={{ fill: '#666', fontSize: 12 }}
                  label={{ value: 'Jobs (millions)', angle: -90, position: 'insideLeft', fill: '#666' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#ffffff', 
                    border: '1px solid #e5e5e5',
                    borderRadius: '8px',
                    color: '#1a1a1a'
                  }}
                />
                <Legend 
                  wrapperStyle={{ color: '#666' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="jobsDisplaced" 
                  stroke="#dc2626" 
                  strokeWidth={3}
                  name="Jobs Displaced"
                  dot={{ fill: '#dc2626', r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="newJobsCreated" 
                  stroke="#10b981" 
                  strokeWidth={3}
                  name="New Jobs Created"
                  dot={{ fill: '#10b981', r: 4 }}
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
    </section>
  )
}

export default Timeline
