import React from 'react'
import { useLocation } from 'react-router-dom'

export default function CoursePlusVideoPage() {
  const { state } = useLocation()
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Custom Course + Video Estimate</h2>
      <p>
        For <strong>{state.clientName}</strong> / <em>{state.projectName}</em>{' '}
        on {state.estimateDate}
      </p>
      {/* TODO: render line‐item inputs for Course + Video */}
    </div>
  )
}
