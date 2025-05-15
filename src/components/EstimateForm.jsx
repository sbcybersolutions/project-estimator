// src/components/EstimateForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './EstimateForm.module.css';

export default function EstimateForm() {
  const [clientName, setClientName] = useState('');
  const [projectName, setProjectName] = useState('');
  const [estimateDate, setEstimateDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    // pass all three values into location.state
    navigate('/select-type', {
      state: { clientName, projectName, estimateDate }
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.estimateForm}>
      <div className={styles.formGroup}>
        <label htmlFor="clientName">Client Name</label>
        <input
          type="text"
          id="clientName"
          value={clientName}
          onChange={e => setClientName(e.target.value)}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="projectName">Project Name</label>
        <input
          type="text"
          id="projectName"
          value={projectName}
          onChange={e => setProjectName(e.target.value)}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="estimateDate">Estimate Date</label>
        <input
          type="date"
          id="estimateDate"
          value={estimateDate}
          onChange={e => setEstimateDate(e.target.value)}
          required
        />
      </div>

      <button type="submit" className={styles.submitButton}>
        Start Estimate
      </button>
    </form>
  );
}
