import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const OPTIONS = [
  { value: 'customCourse',    label: 'Custom Course' },
  { value: 'coursePlusVideo', label: 'Custom Course + Video' },
  { value: 'customVideo',     label: 'Custom Video' },
]

export default function EstimateTypeSelector() {
  const navigate = useNavigate()
  const { state: formValues } = useLocation()

  const handleSelect = type => {
    // you can pass along formValues if needed:
    navigate(`/estimate/${type}`, { state: formValues })
  }

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>What type of estimate would you like to create?</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
        }}
      >
        {OPTIONS.map(opt => (
          <button
            key={opt.value}
            onClick={() => handleSelect(opt.value)}
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              borderRadius: '4px',
              border: '1px solid #007bff',
              background: '#fff',
              color: '#000',      // ensure black text
              cursor: 'pointer',
            }}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  )
}
