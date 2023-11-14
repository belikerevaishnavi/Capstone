// OrgCity.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function OrgCity() {
  const [organizationDetails, setOrganizationDetails] = useState(null);
  const { organizationId } = useParams();

  useEffect(() => {
    // Fetch organization details based on organizationId
    axios.get(`http://localhost:8080/v1/organizations`) // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
      .then(response => {
        setOrganizationDetails(response.data.content[0]); // Assuming the API response structure is similar
      })
      .catch(error => {
        console.error('Error fetching organization details:', error);
      });
  }, [organizationId]);

  if (!organizationDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{organizationDetails.organizationName}</h2>
      <p>{organizationDetails.organizationDescription}</p>
      {/* Display other organization details as needed */}
    </div>
  );
}

export default OrgCity;
