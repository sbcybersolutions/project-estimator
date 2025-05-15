import React from 'react';

const OPTIONS = [
  { value: 'customCourse', label: 'Custom Course' },
  { value: 'coursePlusVideo', label: 'Custom Course + Video' },
  { value: 'customVideo', label: 'Custom Video' },
];

export default function EstimateTypeSelector({ onSelect }) {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>What type of estimate would you like to create?</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        {OPTIONS.map(opt => (
          <button
            key={opt.value}
            onClick={() => onSelect(opt.value)}
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              borderRadius: '4px',
              border: '1px solid #007bff',
              background: '#fff',
              color: 'blue',
              cursor: 'pointer'
            }}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
