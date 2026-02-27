import React, { useMemo, useState, useEffect } from 'react'
import { AreaChart, Area, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { timelineData } from '../data/jobData'
import './Timeline.css'

function Timeline() {
  const [selectedYear, setSelectedYear] = useState(timelineData[timelineData.length - 1].year)
  const [compareYear, setCompareYear] = useState(timelineData[0].year)
  const [isPlaying, setIsPlaying] = useState(false)
  const selected = useMemo(
    () => timelineData.find((row) => row.year === selectedYear) ?? timelineData[timelineData.length - 1],
    [selectedYear]
  )
  const compared = useMemo(
    () => timelineData.find((row) => row.year === compareYear) ?? timelineData[0],
    [compareYear]
  )

  useEffect(() => {
    if (!isPlaying) return undefined
    const timer = setInterval(() => {
      setSelectedYear((prev) => {
        const max = timelineData[timelineData.length - 1].year
        const min = timelineData[0].year
        return prev >= max ? min : prev + 1
      })
    }, 1200)
    return () => clearInterval(timer)
  }, [isPlaying])

  const deltaDisplaced = selected.displacedCumulative - compared.displacedCumulative
  const deltaCreated = selected.createdCumulative - compared.createdCumulative

  return (
    <section className="timeline-panel">
      <div className="timeline-panel-head">
        <h2>2030 Scenario Trajectory</h2>
        <span>Cumulative + adoption proxy</span>
      </div>

      <div className="timeline-interactive">
        <div className="timeline-controls">
          <label htmlFor="year-range">
          Selected year: <strong>{selected.year}</strong>
          </label>
          <button type="button" onClick={() => setIsPlaying((v) => !v)}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </div>
        <input
          id="year-range"
          type="range"
          min={timelineData[0].year}
          max={timelineData[timelineData.length - 1].year}
          step="1"
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
        />
        <div className="timeline-kpis">
          <span>{(selected.displacedCumulative / 1_000_000).toFixed(0)}M displaced</span>
          <span>{(selected.createdCumulative / 1_000_000).toFixed(0)}M created</span>
          <span>{selected.genAiAdoptionPct}% adoption</span>
        </div>
        <label htmlFor="compare-range">
          Compare with: <strong>{compared.year}</strong>
        </label>
        <input
          id="compare-range"
          type="range"
          min={timelineData[0].year}
          max={timelineData[timelineData.length - 1].year}
          step="1"
          value={compareYear}
          onChange={(e) => setCompareYear(Number(e.target.value))}
        />
        <div className="timeline-kpis">
          <span>{(deltaDisplaced / 1_000_000).toFixed(0)}M displaced delta</span>
          <span>{(deltaCreated / 1_000_000).toFixed(0)}M created delta</span>
        </div>
      </div>

      <div className="timeline-panel-chart">
        <ResponsiveContainer width="100%" height={220}>
          <AreaChart data={timelineData}>
            <defs>
              <linearGradient id="tlDisp" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#2c3a58" />
            <XAxis dataKey="year" stroke="#9cb1db" tick={{ fontSize: 11 }} />
            <YAxis stroke="#9cb1db" tick={{ fontSize: 11 }} />
            <Tooltip contentStyle={{ backgroundColor: '#111a2b', border: '1px solid #334464', color: '#dbe6ff' }} />
            <Area type="monotone" dataKey="displacedCumulative" stroke="#ef4444" strokeWidth={2} fill="url(#tlDisp)" name="Displaced" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="timeline-panel-chart">
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={timelineData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2c3a58" />
            <XAxis dataKey="year" stroke="#9cb1db" tick={{ fontSize: 11 }} />
            <YAxis stroke="#9cb1db" tick={{ fontSize: 11 }} />
            <Tooltip contentStyle={{ backgroundColor: '#111a2b', border: '1px solid #334464', color: '#dbe6ff' }} />
            <Legend wrapperStyle={{ color: '#c6d5f4' }} />
            <Line type="monotone" dataKey="createdCumulative" stroke="#22c55e" strokeWidth={2} dot={false} name="Created" />
            <Line type="monotone" dataKey="netCumulative" stroke="#60a5fa" strokeWidth={2} dot={false} name="Net" />
            <Line type="monotone" dataKey="genAiAdoptionPct" stroke="#f59e0b" strokeWidth={2} dot={false} name="Adoption %" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="timeline-mini-table">
        {timelineData.map((row) => (
          <div key={row.year} className="timeline-mini-row">
            <span>{row.year}</span>
            <span>{(row.displacedCumulative / 1_000_000).toFixed(0)}M disp</span>
            <span>{(row.createdCumulative / 1_000_000).toFixed(0)}M created</span>
            <span>{row.genAiAdoptionPct}% adoption</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Timeline
