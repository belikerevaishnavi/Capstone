// Import necessary dependencies
import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import casesImage from './cases.png'; // Make sure to adjust the path accordingly

// Functional component for the myCases page
const MyCases = () => {
  // State to store the entered case ID
  const [caseId, setCaseId] = useState('');

  // Function to handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic here to handle the submission, e.g., fetching case data by ID
    console.log(`Fetching data for case ID: ${caseId}`);
  };

  // Function to handle the "Show All My Cases" button click
  const handleShowAllCases = () => {
    // Add logic here to show all cases
    console.log('Showing all cases');
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        position: 'relative',
      }}
    >
      {/* Transparent image covering the entire page */}
      <img
        src={casesImage}
        alt="Cases"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          opacity: 0.6, // Adjust the transparency as needed
        }}
      />

      {/* Content in the center */}
      <div style={{ width: '50%', textAlign: 'center', zIndex: 1 }}>
        <Typography variant="h4" fontFamily="Dancing Script" style={{ marginBottom: '20px' }}>
          Search the Case by ID
        </Typography>

        {/* Search bar */}
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
          <TextField
            label="Enter Case ID"
            variant="outlined"
            fullWidth
            value={caseId}
            onChange={(e) => setCaseId(e.target.value)}
            style={{backgroundColor:'white', borderRadius: '15px'}}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ margin: '25px' }}

          >
            Submit
          </Button>
        </form>

        {/* "Show All My Cases" button */}
        <Button variant="contained" color="secondary" onClick={handleShowAllCases}>
          Show All My Cases
        </Button>
      </div>
    </div>
  );
};

export default MyCases;
