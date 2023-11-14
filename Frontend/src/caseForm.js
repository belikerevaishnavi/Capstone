import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import { styled } from '@mui/system';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const StyledContainer = styled(Container)({
  paddingTop: '80px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  minWidth: '100vw',
  backgroundColor: '#27445C', // Darker background color
});

const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width:'80vw',
  padding: theme.spacing(3),
  borderRadius: theme.spacing(1),
  backgroundColor: '#27445C', // Light blue color
  color: 'white', // Text color
}));

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      //borderColor: 'white', // Border color
    },
    '&:hover fieldset': {
      //borderColor: 'white', // Border color on hover
    },
    '&.Mui-focused fieldset': {
      //borderColor: 'white', // Border color when focused
    },
  },
  '& .MuiInputBase-input': {
    color: 'black', // Text color
    backgroundColor: 'white',
    borderRadius:'20px',// Background color inside the text field

  },
});

const CaseForm = () => {
  const [legalCaseTitle, setLegalCaseTitle] = useState('');
  const [legalCaseDescription, setLegalCaseDescription] = useState('');
  const [legalCaseId, setLegalCaseId] = useState('');
  const [legalCaseStatus, setLegalCaseStatus] = useState('');

  const [city, setCity] = useState('');
  const [organizationId, setOrganizationId] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [file, setFile] = useState(null);
  const [encryptedFile, setEncryptedFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleEncrypt = () => {
    if (!file || !legalCaseTitle || !legalCaseDescription || !legalCaseId|| !legalCaseStatus|| !organizationName || !organizationId || !city) {
      alert('Please fill in all details and upload a file.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const fileData = reader.result;
      const encryptedFileData = CryptoJS.AES.encrypt(fileData, 'encryptionKey').toString();
      setEncryptedFile(encryptedFileData);
      downloadEncryptedFile(encryptedFileData);
    };

    reader.readAsDataURL(file);
  };

  const downloadEncryptedFile = (encryptedData) => {
    const blob = new Blob([encryptedData], { type: 'application/octet-stream' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'encryptedFile.txt'; // Change the filename as needed
    link.click();
  };

  return (
    <StyledContainer>
      <StyledForm>
        <Typography variant="h5" component="div" gutterBottom>
          Case Form
        </Typography>

        <div>Case Details</div>
        
        
        <StyledTextField
          label="Case ID"
          value={legalCaseId}
          onChange={(e) => setLegalCaseId(e.target.value)}
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <StyledTextField
          label="Case Title"
          value={legalCaseTitle}
          onChange={(e) => setLegalCaseTitle(e.target.value)}
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <StyledTextField
          label="Case Status"
          value={legalCaseStatus}
          onChange={(e) => setLegalCaseStatus(e.target.value)}
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <StyledTextField
          label="Case Description"
          value={legalCaseDescription}
          onChange={(e) => setLegalCaseDescription(e.target.value)}
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <div>Organization Details</div>
        <StyledTextField
          label="Organization Id"
          value={organizationId}
          onChange={(e) => setOrganizationId(e.target.value)}
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <StyledTextField
          label="Organization Name"
          value={organizationName}
          onChange={(e) => setOrganizationName(e.target.value)}
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <StyledTextField
          label="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <div style={{ padding: '20px' }}>Upload Document</div>
        <input type="file" onChange={handleFileChange} />
        <div style={{ padding: '20px' }}>
          <Button variant="contained" color="primary" onClick={handleEncrypt} fullWidth>
            Submit
          </Button>
        </div>
        
      </StyledForm>
    </StyledContainer>
  );
};

export default CaseForm;

