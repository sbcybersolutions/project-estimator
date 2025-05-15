// src/App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import EstimateForm from './components/EstimateForm'
import EstimateTypeSelector from './components/EstimateTypeSelector'
import CustomCoursePage from './pages/CustomCoursePage'
import CoursePlusVideoPage from './pages/CoursePlusVideoPage'
import CustomVideoPage from './pages/CustomVideoPage'
import './App.css'

export default function App() {
  return (
    <div className="App">
      <h1>Project Estimator</h1>

      <Routes>
        {/* Step 1: collect client/project/date */}
        <Route path="/" element={<EstimateForm />} />

        {/* Step 2: pick an estimate type */}
        <Route path="/select-type" element={<EstimateTypeSelector />} />

        {/* Step 3: build one of the three estimate forms */}
        <Route
          path="/estimate/customCourse"
          element={<CustomCoursePage />}
        />
        <Route
          path="/estimate/coursePlusVideo"
          element={<CoursePlusVideoPage />}
        />
        <Route
          path="/estimate/customVideo"
          element={<CustomVideoPage />}
        />
      </Routes>
    </div>
  )
}
