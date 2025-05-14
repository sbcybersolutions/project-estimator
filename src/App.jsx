// src/App.jsx
import React from 'react';
import EstimateForm from './components/EstimateForm';
import './App.css';

function App() {
  const handleEstimateStart = ({ clientName, projectName, estimateDate }) => {
    console.log('New estimate for', clientName, projectName, estimateDate);
    // TODO: route to next step, save to context/store, etc.
  };

  return (
    <div className="App">
      <h1>Project Estimator</h1>
      <EstimateForm onSubmit={handleEstimateStart} />
    </div>
  );
}

export default App;
