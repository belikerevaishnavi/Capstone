import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import casesImage from './cases.png';
import MyCasesId from './myCasesId'; // Import the MyCasesId component

const MyCases = () => {
  const [caseId, setCaseId] = useState('');

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', position: 'relative' }}>
      <img src={casesImage} alt="Cases" style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.6 }} />

      <div style={{ width: '50%', textAlign: 'center', zIndex: 1 }}>
        <Typography variant="h4" fontFamily="Dancing Script" style={{ marginBottom: '20px' }}>
          Search the Case by ID
        </Typography>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            console.log(`Fetching data for case ID: ${caseId}`);
          }}
          style={{ marginBottom: '20px' }}
        >
          <TextField
            label="Enter Case ID"
            variant="outlined"
            fullWidth
            value={caseId}
            onChange={(e) => setCaseId(e.target.value)}
            style={{ backgroundColor: 'white', borderRadius: '15px' }}
          />
          <Link to={`/myCasesId`} style={{ textDecoration: 'none' }}>
            <Button type="submit" variant="contained" color="primary" style={{ margin: '25px' }}>
              Submit
            </Button>
          </Link>
        </form>

        <Link to="/allCases" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="secondary">
            Show All Cases
          </Button>
        </Link>

        {/* Render MyCasesId component as a child */}
        {caseId && <MyCasesId caseId={caseId} />}
      </div>
    </div>
  );
};

export default MyCases;
