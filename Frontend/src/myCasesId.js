import React from 'react';
import { Container, Grid, Paper } from '@mui/material';

const MyCasesId = () => {
  return (
    <Container style={{ paddingTop: '64px', backgroundColor: '#27445C', minHeight: '100vh' ,minWidth:'100vw'}}>
      <Grid container spacing={2}>
        {/* First Div */}
        <Grid item xs={6}>
          <Paper style={{ height: '75vh', backgroundColor: '#9bc2cf' }}>
            {/* Content for Case Details */}
            <div style={{ padding: '20px' }}>
              <h2>Case Details</h2>
              {/* Add your case details content here */}
            </div>
          </Paper>
        </Grid>

        {/* Second Div */}
        <Grid item xs={6}>
          <Paper style={{ height: '75vh', backgroundColor: '#9bc2cf' }}>
            {/* Content for Organization Details */}
            <div style={{ padding: '20px' }}>
              <h2>Organization Details</h2>
              {/* Add your organization details content here */}
            </div>
          </Paper>
        </Grid>

        {/* Third Div */}
        <Grid item xs={12}>
          <Paper style={{ height: '25vh', backgroundColor: '#9bc2cf' }}>
            {/* Content for Case Documents */}
            <div style={{ padding: '20px', color: '#27445C' }}>
              <h2>Case Documents</h2>
              {/* Add your case documents content here */}
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MyCasesId;
