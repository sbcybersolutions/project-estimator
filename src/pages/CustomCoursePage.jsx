import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function CustomCoursePage() {
  const { state } = useLocation();
  const { clientName, projectName, estimateDate } = state || {};

  const [numCourses, setNumCourses] = useState(1);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Custom Course Estimate:', {
      clientName,
      projectName,
      estimateDate,
      numCourses
    });
    // TODO: navigate to next step or save to context
  };

  return (
    <div style={{ padding: '2rem', maxWidth: 500, margin: '0 auto' }}>
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
        <button type="submit" style={{ padding: '.75rem 1.5rem', cursor: 'pointer' }}>
          Continue
        </button>
      </form>
    </div>
  );
}
