import React from 'react'
import { useLocation } from 'react-router-dom'

export default function CustomVideoPage() {
  const { state } = useLocation()
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Custom Video Estimate</h2>
      <p>
        For <strong>{state.clientName}</strong> / <em>{state.projectName}</em>{' '}
        on {state.estimateDate}
      </p>
      {/* TODO: render line‐item inputs for a Custom Video */}
    </div>
  )
}
