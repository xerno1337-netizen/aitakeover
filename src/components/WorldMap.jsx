import React, { useState } from 'react'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import { countryData } from '../data/jobData'
import './WorldMap.css'

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

function WorldMap() {
  const [selectedCountry, setSelectedCountry] = useState(null)

  const getThreatColor = (threatLevel) => {
    if (threatLevel >= 85) return '#dc2626'
    if (threatLevel >= 75) return '#f59e0b'
    return '#10b981'
  }

  const getMarkerSize = (jobsAtRisk) => {
    if (jobsAtRisk > 50000000) return 12
    if (jobsAtRisk > 20000000) return 10
    if (jobsAtRisk > 10000000) return 8
    return 6
  }

  return (
    <div className="world-map">
      <div className="world-map-header">
        <h2>Global AI Takeover Spread</h2>
        <p>Country-by-country analysis of AI job displacement rates</p>
      </div>

      <div className="map-container">
        <div className="map-wrapper">
          <ComposableMap
            projectionConfig={{
              scale: 147,
              center: [0, 20]
            }}
            style={{ width: '100%', height: 'auto' }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const country = countryData.find(
                    c => c.code === geo.properties.ISO_A2
                  )
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={country ? getThreatColor(country.threatLevel) : '#e5e5e5'}
                      stroke="#ffffff"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: 'none' },
                        hover: { outline: 'none', fill: country ? '#b91c1c' : '#d0d0d0' },
                        pressed: { outline: 'none' }
                      }}
                      onClick={() => {
                        if (country) {
                          setSelectedCountry(country)
                        }
                      }}
                    />
                  )
                })
              }
            </Geographies>
            {countryData.map((country, index) => (
              <Marker key={index} coordinates={country.coordinates}>
                <circle
                  r={getMarkerSize(country.jobsAtRisk)}
                  fill={getThreatColor(country.threatLevel)}
                  stroke="#ffffff"
                  strokeWidth={1.5}
                  opacity={0.8}
                />
              </Marker>
            ))}
          </ComposableMap>
        </div>

        <div className="country-list">
          <h3>Top Affected Countries</h3>
          <div className="countries-grid">
            {countryData
              .sort((a, b) => b.threatLevel - a.threatLevel)
              .slice(0, 10)
              .map((country) => (
                <div
                  key={country.code}
                  className={`country-card ${selectedCountry?.code === country.code ? 'selected' : ''}`}
                  onClick={() => setSelectedCountry(country)}
                >
                  <div className="country-header">
                    <span className="country-name">{country.name}</span>
                    <span 
                      className="threat-badge"
                      style={{ backgroundColor: getThreatColor(country.threatLevel) }}
                    >
                      {country.threatLevel}%
                    </span>
                  </div>
                  <div className="country-stats">
                    <div className="stat">
                      <span className="stat-label">Adoption Rate:</span>
                      <span className="stat-value">{country.adoptionRate}%</span>
                    </div>
                    <div className="stat">
                      <span className="stat-label">Jobs at Risk:</span>
                      <span className="stat-value">{(country.jobsAtRisk / 1000000).toFixed(1)}M</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {selectedCountry && (
        <div className="country-detail">
          <div className="detail-header">
            <h3>{selectedCountry.name}</h3>
            <button onClick={() => setSelectedCountry(null)}>×</button>
          </div>
          <div className="detail-content">
            <div className="detail-stat">
              <div className="detail-stat-label">Threat Level</div>
              <div className="detail-stat-value" style={{ color: getThreatColor(selectedCountry.threatLevel) }}>
                {selectedCountry.threatLevel}%
              </div>
            </div>
            <div className="detail-stat">
              <div className="detail-stat-label">AI Adoption Rate</div>
              <div className="detail-stat-value">{selectedCountry.adoptionRate}%</div>
            </div>
            <div className="detail-stat">
              <div className="detail-stat-label">Jobs at Risk</div>
              <div className="detail-stat-value">{(selectedCountry.jobsAtRisk / 1000000).toFixed(1)} Million</div>
            </div>
            <div className="detail-note">
              <p>
                {selectedCountry.name} is experiencing rapid AI adoption with {selectedCountry.adoptionRate}% of 
                businesses implementing AI solutions. Approximately {(selectedCountry.jobsAtRisk / 1000000).toFixed(1)} 
                million jobs are at risk of automation by 2040.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="map-legend">
        <div className="legend-title">Threat Level</div>
        <div className="legend-items">
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: '#dc2626' }}></div>
            <span>High (85%+)</span>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: '#f59e0b' }}></div>
            <span>Medium (75-85%)</span>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: '#10b981' }}></div>
            <span>Low (&lt;75%)</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorldMap
