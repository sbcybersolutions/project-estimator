import React from 'react'
import { useLocation } from 'react-router-dom'

export default function CustomCoursePage() {
  const { state } = useLocation()  // { clientName, projectName, estimateDate }
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Custom Course Estimate</h2>
      <p>
        Building an estimate for <strong>{state.clientName}</strong> /{' '}
        <em>{state.projectName}</em> ({state.estimateDate})
      </p>
      {/* TODO: render line‐item inputs for a Custom Course */}
    </div>
  )
}
