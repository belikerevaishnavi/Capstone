import React, { useState } from 'react';
import { Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Typography, Button } from '@mui/material';
import CaseForm from './caseForm';


const AllCases = () => {
  const [cases, setCases] = useState([]);

  // Function to handle case deletion
  const handleDelete = (caseId) => {
    // Filter out the case with the given ID
    const updatedCases = cases.filter((caseItem) => caseItem.legalCaseId !== caseId);
    setCases(updatedCases);
  };

  // Function to handle adding a new case
  const handleAddCase = (newCase) => {
    // Update the cases state with the new case
    setCases([...cases, newCase]);
  };

  // Function to handle file download
  const handleDownload = (encryptedFile) => {
  // Create a Blob from the encrypted file content
  const blob = new Blob([encryptedFile], { type: 'text/plain' });

  // Create a link element and trigger a download
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.download = 'encrypted_file.txt';
  link.click();
};


  return (
    <div style={{ padding: '64px', backgroundColor: '#27445C', minHeight: '100vh', minWidth: '100vw' }}>
      {/* Pass the handleAddCase function to the CaseForm component */}
      <CaseForm onAddCase={handleAddCase} />

      <Typography variant="h4" style={{ color: '#ADD8E6', marginBottom: '20px' }}>
        All Cases
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>File</TableCell> {/* New column for encrypted file */}
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cases.map((caseItem) => (
              <TableRow key={caseItem.legalCaseId}>
                <TableCell>{caseItem.legalCaseTitle}</TableCell>
                <TableCell>{caseItem.legalCaseDescription}</TableCell>
                <TableCell>{caseItem.legalCaseStatus}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleDownload(caseItem.encryptedFile)}
                  >
                    Download
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleDelete(caseItem.legalCaseId)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AllCases;
