import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts'
import { timelineData } from '../data/jobData'
import './TimelineChart.css'

function TimelineChart() {
  return (
    <div className="timeline-chart">
      <div className="timeline-header">
        <h2>AI Job Takeover Timeline</h2>
        <p>Projected automation rates from 2024 to 2040</p>
      </div>
      
      <div className="chart-container">
        <div className="chart-card">
          <h3>Global Automation Rate</h3>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={timelineData}>
              <defs>
                <linearGradient id="colorAutomation" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#dc2626" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#dc2626" stopOpacity={0}/>
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
                  borderRadius: '8px'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="automation" 
                stroke="#dc2626" 
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorAutomation)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Jobs Displaced vs Created</h3>
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
                  borderRadius: '8px'
                }}
              />
              <Legend />
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

      <div className="timeline-insights">
        <h3>Key Milestones</h3>
        <div className="milestones">
          <div className="milestone">
            <div className="milestone-year">2026</div>
            <div className="milestone-content">
              <strong>Early Automation Wave</strong>
              <p>25% of routine jobs automated. Data entry, basic customer service roles significantly reduced.</p>
            </div>
          </div>
          <div className="milestone">
            <div className="milestone-year">2030</div>
            <div className="milestone-content">
              <strong>Mid-Decade Acceleration</strong>
              <p>45% automation rate. Legal research, accounting, translation heavily impacted.</p>
            </div>
          </div>
          <div className="milestone">
            <div className="milestone-year">2035</div>
            <div className="milestone-content">
              <strong>Advanced Integration</strong>
              <p>70% automation rate. Transportation, retail, and creative industries transformed.</p>
            </div>
          </div>
          <div className="milestone">
            <div className="milestone-year">2040</div>
            <div className="milestone-content">
              <strong>Near-Complete Transformation</strong>
              <p>90%+ automation rate. Only highly specialized, human-centric roles remain.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimelineChart
