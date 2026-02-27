import React, { useState } from 'react'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import { countryData } from '../data/jobData'
import './GlobalMap.css'

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

function GlobalMap() {
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [hoveredCountry, setHoveredCountry] = useState(null)

  const getThreatColor = (threatLevel) => {
    if (threatLevel >= 85) return '#ff0066'
    if (threatLevel >= 75) return '#ffa500'
    return '#00ff00'
  }

  const getMarkerSize = (jobsAtRisk) => {
    if (jobsAtRisk > 50000000) return 14
    if (jobsAtRisk > 20000000) return 12
    if (jobsAtRisk > 10000000) return 10
    return 8
  }

  return (
    <div className="global-map-section">
      <div className="section-header">
        <h2>GLOBAL THREAT DISPERSION</h2>
        <p>Country-by-country AI adoption and job displacement analysis</p>
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
                  const isHovered = hoveredCountry === geo.properties.ISO_A2
                  const isSelected = selectedCountry?.code === geo.properties.ISO_A2
                  
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={country ? getThreatColor(country.threatLevel) : '#1a1a2e'}
                      stroke={isSelected ? '#00ffff' : isHovered ? '#ffffff' : '#0a0a0f'}
                      strokeWidth={isSelected ? 2 : isHovered ? 1.5 : 0.5}
                      style={{
                        default: { outline: 'none' },
                        hover: { outline: 'none', fill: country ? getThreatColor(country.threatLevel) : '#2a2a3e' },
                        pressed: { outline: 'none' }
                      }}
                      onMouseEnter={() => {
                        if (country) setHoveredCountry(geo.properties.ISO_A2)
                      }}
                      onMouseLeave={() => setHoveredCountry(null)}
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
                  opacity={0.9}
                  style={{ cursor: 'pointer' }}
                  onClick={() => setSelectedCountry(country)}
                />
              </Marker>
            ))}
          </ComposableMap>
        </div>

        {selectedCountry && (
          <div className="country-detail-panel">
            <div className="panel-header">
              <h3>{selectedCountry.name}</h3>
              <button onClick={() => setSelectedCountry(null)}>×</button>
            </div>
            <div className="panel-content">
              <div className="detail-grid">
                <div className="detail-item">
                  <div className="detail-label">Threat Level</div>
                  <div className="detail-value" style={{ color: getThreatColor(selectedCountry.threatLevel) }}>
                    {selectedCountry.threatLevel}%
                  </div>
                </div>
                <div className="detail-item">
                  <div className="detail-label">AI Adoption</div>
                  <div className="detail-value">{selectedCountry.adoptionRate}%</div>
                </div>
                <div className="detail-item">
                  <div className="detail-label">Jobs at Risk</div>
                  <div className="detail-value">{(selectedCountry.jobsAtRisk / 1000000).toFixed(1)}M</div>
                </div>
                <div className="detail-item">
                  <div className="detail-label">AI Investment</div>
                  <div className="detail-value">{selectedCountry.aiInvestment}</div>
                </div>
              </div>
              <div className="detail-note">
                <strong>Primary Threat:</strong> {selectedCountry.topThreat}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="map-legend">
        <div className="legend-title">Threat Classification</div>
        <div className="legend-items">
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: '#ff0066' }}></div>
            <span>Critical (85%+)</span>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: '#ffa500' }}></div>
            <span>High (75-85%)</span>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: '#00ff00' }}></div>
            <span>Moderate (&lt;75%)</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GlobalMap
