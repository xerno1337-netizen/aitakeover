import React from 'react'
import { AreaChart, Area, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { timelineData } from '../data/jobData'
import './Timeline.css'

function Timeline() {
  return (
    <section className="timeline-panel">
      <div className="timeline-panel-head">
        <h2>Timeline</h2>
        <span>2024 - 2040</span>
      </div>

      <div className="timeline-panel-chart">
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={timelineData}>
            <defs>
              <linearGradient id="tlAuto" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e8ecf3" />
            <XAxis dataKey="year" stroke="#667085" tick={{ fontSize: 11 }} />
            <YAxis stroke="#667085" tick={{ fontSize: 11 }} />
            <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #dfe3ea' }} />
            <Area type="monotone" dataKey="automation" stroke="#3b82f6" strokeWidth={2} fill="url(#tlAuto)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="timeline-panel-chart">
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={timelineData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e8ecf3" />
            <XAxis dataKey="year" stroke="#667085" tick={{ fontSize: 11 }} />
            <YAxis stroke="#667085" tick={{ fontSize: 11 }} />
            <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #dfe3ea' }} />
            <Legend />
            <Line type="monotone" dataKey="jobsDisplaced" stroke="#dc2626" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="newJobsCreated" stroke="#10b981" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}

export default Timeline
