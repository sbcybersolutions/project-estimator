// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import EstimateForm from './components/EstimateForm';
import EstimateTypeSelector from './components/EstimateTypeSelector';

function App() {
  // 'form' shows the client/project/date form,
  // 'type' shows the estimate type selector
  const [step, setStep] = useState('form');
  const [formValues, setFormValues] = useState(null);

  // Called when the user submits the EstimateForm
  const handleEstimateStart = values => {
    setFormValues(values);
    setStep('type');
  };

  // Called when the user selects an estimate type
  const handleTypeSelect = type => {
    console.log('Selected estimate type:', type);
    console.log('Form data:', formValues);
    // TODO: proceed to next step (e.g. detailed estimate builder or routing)
  };

  return (
    <div className="App">
      <h1>Project Estimator</h1>

      {step === 'form' && (
        <EstimateForm onSubmit={handleEstimateStart} />
      )}

      {step === 'type' && (
        <EstimateTypeSelector onSelect={handleTypeSelect} />
      )}
    </div>
  );
}

export default App;
