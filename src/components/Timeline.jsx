import React from 'react'
import { AreaChart, Area, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { timelineData } from '../data/jobData'
import './Timeline.css'

function Timeline() {
  return (
    <section className="timeline-panel">
      <div className="timeline-panel-head">
        <h2>2030 Scenario (WEF)</h2>
        <span>Cumulative change, 2025-2030</span>
      </div>

      <div className="timeline-panel-chart">
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={timelineData}>
            <defs>
              <linearGradient id="tlDisp" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#dc2626" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#dc2626" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e8ecf3" />
            <XAxis dataKey="year" stroke="#667085" tick={{ fontSize: 11 }} />
            <YAxis stroke="#667085" tick={{ fontSize: 11 }} />
            <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #dfe3ea' }} />
            <Area type="monotone" dataKey="displacedCumulative" stroke="#dc2626" strokeWidth={2} fill="url(#tlDisp)" name="Displaced" />
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
            <Line type="monotone" dataKey="displacedCumulative" stroke="#dc2626" strokeWidth={2} dot={false} name="Displaced" />
            <Line type="monotone" dataKey="createdCumulative" stroke="#10b981" strokeWidth={2} dot={false} name="Created" />
            <Line type="monotone" dataKey="netCumulative" stroke="#3b82f6" strokeWidth={2} dot={false} name="Net" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}

export default Timeline
