import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function CoursePlusVideoPage() {
  const { state } = useLocation();
  const { clientName, projectName, estimateDate } = state || {};

  const [numCourses, setNumCourses] = useState(1);
  const [studioDays, setStudioDays] = useState(1);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Course + Video Estimate:', {
      clientName,
      projectName,
      estimateDate,
      numCourses,
      studioDays
    });
    // TODO: next step
  };

  return (
    <div style={{ padding: '2rem', maxWidth: 500, margin: '0 auto' }}>
      <header style={{ marginBottom: '1.5rem' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>
          ← Back to Estimate Form
        </Link>
      </header>

      <h2>Custom Course + Video Estimate</h2>
      <p>
        For <strong>{clientName}</strong> / <em>{projectName}</em> on {estimateDate}
      </p>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="numCourses" style={{ display: 'block', marginBottom: '.5rem' }}>
            Number of Courses
          </label>
          <input
            type="number"
            id="numCourses"
            value={numCourses}
            onChange={e => setNumCourses(e.target.value)}
            min="1"
            required
            style={{ width: '100%', padding: '.5rem', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="studioDays" style={{ display: 'block', marginBottom: '.5rem' }}>
            Number of Studio Days
          </label>
          <input
            type="number"
            id="studioDays"
            value={studioDays}
            onChange={e => setStudioDays(e.target.value)}
            min="0"
            required
            style={{ width: '100%', padding: '.5rem', boxSizing: 'border-box' }}
          />
        </div>

        <button type="submit" style={{ padding: '.75rem 1.5rem', cursor: 'pointer' }}>
          Continue
        </button>
      </form>
    </div>
  );
}
