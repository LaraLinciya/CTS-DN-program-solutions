import React from 'react';
import './App.css';
import CohortDetails from './components/CohortDetails';

function App() {
  const cohorts = [
    {
       name: "Cognizant Elite React Bootcamp",
      startDate: "12-Mar-2023",
      status: "Ongoing",
      coach: "Priya Sharma",
      trainer: "Karan Patel"
    },
    {
      name: "Cloud Native DevOps Training",
      startDate: "01-Jan-2024",
      status: "Scheduled",
      coach: "Anusha Rao",
      trainer: "Nikhil Mehra"
    },
    {
      name: "NextGen AI/ML Internship",
      startDate: "15-Feb-2024",
      status: "Ongoing",
      coach: "Dr. Sneha Iyer",
      trainer: "Rahul Krishnan"
    }
  ];

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'left', marginBottom: '20px' }}>Cohorts Details</h2>
      {cohorts.map((cohort, index) => (
        <CohortDetails key={index} {...cohort} />
      ))}
    </div>
  );
}

export default App;
