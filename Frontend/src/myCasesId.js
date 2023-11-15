import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Grid, Paper, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

const MyCasesId = ({ caseId }) => {
  const [caseDetails, setCaseDetails] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8080/v1/legalcases/${caseId}`)
      .then(response => {
        setCaseDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching case details:', error);
      });
  }, [caseId]);

  return (
    <Container style={{ paddingTop: '64px', backgroundColor: '#27445C', minHeight: '100vh', minWidth: '100vw' }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper style={{ height: '75vh', backgroundColor: '#9bc2cf' }}>
            <div style={{ padding: '20px' }}>
              <Typography variant="h4" gutterBottom>
                Case Details
              </Typography>
              <Typography variant="body1">
                Case ID: {caseDetails.legalCaseId}
              </Typography>
              <Typography variant="body1">
                Case Title: {caseDetails.legalCaseTitle}
              </Typography>
              <Typography variant="body1">
                Case Status: {caseDetails.legalCaseStatus}
              </Typography>
              <Typography variant="body1">
                Case Description: {caseDetails.legalCaseDescription}
              </Typography>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MyCasesId;
