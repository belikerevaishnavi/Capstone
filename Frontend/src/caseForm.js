import React, { useState } from 'react';
import { styled } from '@mui/system';
import CryptoJS from 'crypto-js';
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
  width: '80vw',
  padding: theme.spacing(3),
  borderRadius: theme.spacing(1),
  backgroundColor: '#27445C', // Light blue color
  color: 'white', // Text color
}));

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {},
    '&:hover fieldset': {},
    '&.Mui-focused fieldset': {},
  },
  '& .MuiInputBase-input': {
    color: 'black', // Text color
    backgroundColor: 'white',
    borderRadius: '20px', // Background color inside the text field
  },
});

const CaseForm = ({ onAddCase }) => {
  const [legalCaseTitle, setLegalCaseTitle] = useState('');
  const [legalCaseDescription, setLegalCaseDescription] = useState('');
  const [legalCaseStatus, setLegalCaseStatus] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const arrayBufferToString = (buffer) => {
    return String.fromCharCode.apply(null, new Uint8Array(buffer));
  };

  const handleFormSubmitAndEncrypt = async (e) => {
    try {
      e.preventDefault();

      if (!file || !legalCaseTitle || !legalCaseDescription || !legalCaseStatus) {
        alert('Please fill in all details and upload a file.');
        return;
      }

      // Read the file asynchronously
      const fileData = await readFileAsync(file);

      // Encrypt the file data
      const encryptedFileData = CryptoJS.AES.encrypt(fileData, 'encryptionKey').toString();

      // Prepare the data to be added, including the encrypted file
      const newCase = {
        legalCaseId: new Date().getTime(),
        legalCaseTitle,
        legalCaseDescription,
        legalCaseStatus,
        encryptedFile: encryptedFileData, // Include the encrypted file data
      };

      // Call the parent component's function to add the new case
      onAddCase(newCase);

      // Reset the form fields or update the state
      setLegalCaseTitle('');
      setLegalCaseDescription('');
      setLegalCaseStatus('');
      setFile(null);
    } catch (error) {
      console.error('Error posting data:', error);

      // Handle specific errors if needed
      if (error.response) {
        console.error('Server responded with an error:', error.response.data);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error setting up the request:', error.message);
      }

      // Display a user-friendly error message
      alert('An error occurred while processing your request. Please try again.');
    }
  };

  // Helper function to read the file asynchronously
  const readFileAsync = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        resolve(reader.result);
      };

      reader.onerror = () => {
        reject(new Error('Error reading the file.'));
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <StyledContainer>
      <StyledForm onSubmit={handleFormSubmitAndEncrypt}>
        <Typography variant="h5" component="div" gutterBottom>
          Case Form
        </Typography>

        <div>Case Details</div>

        <StyledTextField
          label="Case Title"
          value={legalCaseTitle}
          onChange={(e) => setLegalCaseTitle(e.target.value)}
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

        <StyledTextField
          label="Case Status"
          value={legalCaseStatus}
          onChange={(e) => setLegalCaseStatus(e.target.value)}
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <div style={{ padding: '20px' }}>Upload Document</div>
        <input type="file" onChange={handleFileChange} />

        <div style={{ padding: '20px' }}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </div>
      </StyledForm>
    </StyledContainer>
  );
};

export default CaseForm;
