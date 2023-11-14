import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Grid, Card, CardContent, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function RolesPage() {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios
      .get('http://localhost:8080/v1/roles')
      .then((response) => {
        setRoles(response.data.content);
      })
      .catch((error) => {
        console.error('Error fetching roles:', error);
      });
  }, []);

  const pageStyle = {
    backgroundColor: '#27445C',
    color: 'white',
    minHeight: '100vh',
    paddingTop: '100px',
  };

  const headingStyle = {
    marginBottom: '20px',
    fontFamily: 'Dancing Script',
  };

  const circleStyle = {
    backgroundColor: '#f0f8ff', // Light blue background color for circles
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#27445C', // Dark blue text color
    width: '250px', // Adjust as needed
    height: '200px', // Adjust as needed
    margin: '10px',
  };

  return (
    <div style={pageStyle}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" align="center" gutterBottom style={headingStyle}>
          Who are you?
        </Typography>
        <Grid container spacing={2}>
          {roles.map((role) => (
            <Grid item key={role.roleId}>
              <Link
                component={RouterLink}
                to={`/landing`}
                style={circleStyle}
              >
                <Typography variant="h6">{role.roleName}</Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default RolesPage;
