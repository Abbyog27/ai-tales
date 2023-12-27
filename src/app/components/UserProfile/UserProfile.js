import { Box, Button, Container, Paper, TextField, Typography, Alert } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function UserProfile() {
  const [isEditable, setEditable] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [initialUsername, setInitialUsername] = useState("");
  const [initialEmail, setInitialEmail] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/658b7658079dfcab5d2bab65`);
        const fetchedUsername = response.data.username;
        const fetchedEmail = response.data.email;
        setUsername(fetchedUsername);
        setEmail(fetchedEmail);
        setInitialUsername(fetchedUsername);
        setInitialEmail(fetchedEmail);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleEditClick = () => {
    setEditable(true);
    setError("");
  };

  const handleCancelEditClick = () => {
    setUsername(initialUsername);
    setEmail(initialEmail);
    setEditable(false);
    setError("");
  };

  const handleConfirmEditClick = async () => {
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const userData = { username, email };
    try {
      const response = await axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/edit/658b7658079dfcab5d2bab65`, userData);
      console.log('Response:', response.data);
      setInitialUsername(username);
      setInitialEmail(email);
      setEditable(false);
      setError(""); // Reset error message on successful update
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          setError("Error: " + error.response.data.error);
        } else {
          setError("An unknown error occurred.");
        }
      } else {
        setError("Network error or server is down.");
      }
    }
  };

  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Paper
        elevation={3}
        style={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography variant="h4" gutterBottom>Account</Typography>
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        <TextField
          disabled={!isEditable}
          id="username"
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          variant="filled"
          sx={{ mt: 2 }}
        />
        <TextField
          disabled={!isEditable}
          id="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="filled"
          sx={{ mt: 2 }}
        />
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            marginTop: '20px'
          }}
        >
          {isEditable ? (
            <>
              <Button variant="contained" color="primary" onClick={handleConfirmEditClick}>Confirm Edit</Button>
              <Button variant="contained" color="error" onClick={handleCancelEditClick}>Cancel Edit</Button>
            </>
          ) : (
            <>
              <Button variant="contained" color="primary" onClick={handleEditClick}>Edit</Button>
              <Button variant="contained" color="error">Delete</Button>
            </>
          )}
        </Box>
      </Paper>
    </Container>
  );
}
