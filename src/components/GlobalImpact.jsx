import React, { useState } from 'react'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import { countryData } from '../data/jobData'
import './GlobalImpact.css'

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

function GlobalImpact() {
  const [selectedCountry, setSelectedCountry] = useState(null)

  const getThreatColor = (level) => {
    if (level >= 85) return '#dc2626'
    if (level >= 75) return '#f59e0b'
    return '#10b981'
  }

  return (
    <section className="map-panel">
      <div className="map-panel-head">
        <h2>Global Map</h2>
        <span>Click country for detail</span>
      </div>

      <div className="map-panel-body">
        <div className="map-panel-canvas">
          <ComposableMap projectionConfig={{ scale: 145, center: [0, 20] }} style={{ width: '100%', height: '100%' }}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const country = countryData.find((c) => c.code === geo.properties.ISO_A2)
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={country ? getThreatColor(country.threatLevel) : '#edf0f5'}
                      stroke="#ffffff"
                      strokeWidth={0.6}
                      style={{ default: { outline: 'none' }, hover: { outline: 'none' }, pressed: { outline: 'none' } }}
                      onClick={() => country && setSelectedCountry(country)}
                    />
                  )
                })
              }
            </Geographies>
            {countryData.map((country) => (
              <Marker key={country.code} coordinates={country.coordinates}>
                <circle r={4.5} fill={getThreatColor(country.threatLevel)} stroke="#fff" strokeWidth={1} onClick={() => setSelectedCountry(country)} />
              </Marker>
            ))}
          </ComposableMap>
        </div>

        <div className="map-panel-side">
          <h3>Top Risk Countries</h3>
          <div className="map-country-list">
            {countryData
              .slice()
              .sort((a, b) => b.threatLevel - a.threatLevel)
              .slice(0, 6)
              .map((country) => (
                <button key={country.code} className="map-country-item" onClick={() => setSelectedCountry(country)}>
                  <span>{country.name}</span>
                  <strong style={{ color: getThreatColor(country.threatLevel) }}>{country.threatLevel}%</strong>
                </button>
              ))}
          </div>

          {selectedCountry && (
            <div className="map-country-detail">
              <h4>{selectedCountry.name}</h4>
              <p>Adoption: {selectedCountry.adoptionRate}%</p>
              <p>Jobs at risk: {(selectedCountry.jobsAtRisk / 1000000).toFixed(1)}M</p>
              <p>Investment: {selectedCountry.aiInvestment}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default GlobalImpact
