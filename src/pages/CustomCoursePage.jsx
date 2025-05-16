// src/pages/CustomCoursePage.jsx
import React, { useState, useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function CustomCoursePage() {
  const { state } = useLocation();
  const { clientName, projectName, estimateDate } = state || {};

  // Editable fields
  const [numCourses, setNumCourses] = useState(1);
  const [smeUnits, setSmeUnits] = useState(0);
  const [smeRate, setSmeRate] = useState(0);
  const [smeLift, setSmeLift] = useState(1);

  // Computed values
  const smeHardCost = useMemo(() => Number(smeUnits) * Number(smeRate), [smeUnits, smeRate]);
  const smeBillRate = useMemo(() => (smeLift > 0 ? Number(smeRate) / Number(smeLift) : 0), [smeRate, smeLift]);
  const smePrice = useMemo(() => Number(smeUnits) * Number(smeBillRate), [smeUnits, smeBillRate]);

  const handleSubmit = e => {
    e.preventDefault();
    // ...submit logic...
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '120px repeat(6, 80px)',
    gap: '0.5rem',
    alignItems: 'center'
  };

  return (
    <div style={{ padding: '2rem', maxWidth: 700, margin: '0 auto' }}>
      <header style={{ marginBottom: '1.5rem' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>
          ← Back to Estimate Form
        </Link>
      </header>

      <h2>Custom Course Estimate</h2>
      <p>
        For <strong>{clientName}</strong> / <em>{projectName}</em> on {estimateDate}
      </p>

      <form onSubmit={handleSubmit}>
        {/* Number of Courses */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
          <label htmlFor="numCourses" style={{ marginRight: '0.5rem', whiteSpace: 'nowrap' }}>
            Number of Courses
          </label>
          <input
            type="number"
            id="numCourses"
            value={numCourses}
            onChange={e => setNumCourses(e.target.value)}
            min="1"
            required
            style={{ width: '80px', padding: '0.25rem', boxSizing: 'border-box', fontSize: '0.9rem' }}
          />
        </div>

        {/* —— Header Row of Labels —— */}
        <div
          style={{
            ...gridStyle,
            marginBottom: '0.5rem',
            fontWeight: 600,
            textAlign: 'center'
          }}
        >
          <div></div>
          <div>Hours/Units</div>
          <div>Rate</div>
          <div>Hard Cost</div>
          <div>Lift</div>
          <div>Bill Rate</div>
          <div>Price</div>
        </div>

        {/* —— SME Row —— */}
        <div style={{ ...gridStyle, marginBottom: '1.5rem' }}>
          <div style={{ textAlign: 'right', fontWeight: 600 }}>SME</div>

          <input
            type="number"
            placeholder="Units"
            value={smeUnits}
            onChange={e => setSmeUnits(e.target.value)}
            min="0"
            required
            style={{ width: '100%', padding: '0.25rem', fontSize: '0.85rem', boxSizing: 'border-box' }}
          />

          <input
            type="number"
            placeholder="Rate"
            value={smeRate}
            onChange={e => setSmeRate(e.target.value)}
            min="0"
            required
            style={{ width: '100%', padding: '0.25rem', fontSize: '0.85rem', boxSizing: 'border-box' }}
          />

          <input
            type="number"
            placeholder="Hard Cost"
            value={smeHardCost.toFixed(2)}
            readOnly
            style={{
              width: '100%',
              padding: '0.25rem',
              fontSize: '0.85rem',
              boxSizing: 'border-box',
              background: 'green',
              border: '1px solid #ccd'
            }}
          />

          <input
            type="number"
            placeholder="Lift"
            value={smeLift}
            onChange={e => setSmeLift(e.target.value)}
            min="0.01"
            step="0.01"
            required
            style={{ width: '100%', padding: '0.25rem', fontSize: '0.85rem', boxSizing: 'border-box' }}
          />

          <input
            type="number"
            placeholder="Bill Rate"
            value={smeBillRate.toFixed(2)}
            readOnly
            style={{
              width: '100%',
              padding: '0.25rem',
              fontSize: '0.85rem',
              boxSizing: 'border-box',
              background: 'green',
              border: '1px solid #ccd'
            }}
          />

          <input
            type="number"
            placeholder="Price"
            value={smePrice.toFixed(2)}
            readOnly
            style={{
              width: '100%',
              padding: '0.25rem',
              fontSize: '0.85rem',
              boxSizing: 'border-box',
              background: 'green',
              border: '1px solid #ccd'
            }}
          />
        </div>

        <button type="submit" style={{ padding: '.75rem 1.5rem', cursor: 'pointer' }}>
          Continue
        </button>
      </form>
    </div>
  );
}
