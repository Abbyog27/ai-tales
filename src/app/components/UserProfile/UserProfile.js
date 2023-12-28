import { Alert, Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';

export default function UserProfile() {
  const [isEditable, setEditable] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [initialUsername, setInitialUsername] = useState("");
  const [initialEmail, setInitialEmail] = useState("");
  const [error, setError] = useState("");
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {

      const token = localStorage.getItem('jwtToken');
      if (!token) {
        console.error("No token found");
        router.push('/login');
        return;
      }

      const decoded = jwtDecode(token);
      const userId = decoded.id;

      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/${userId}`);
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

    const token = localStorage.getItem('jwtToken');
    const decoded = jwtDecode(token);
    const userId = decoded.id;

    const userData = { username, email };
    try {
      const response = await axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/edit/${userId}`, userData);
      console.log('Response:', response.data);
      setInitialUsername(username);
      setInitialEmail(email);
      setEditable(false);
      setError("");
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

  const handleDeleteClick = () => {
    setOpenDeleteDialog(true);
  };

  const handleConfirmDelete = async () => {
    const token = localStorage.getItem('jwtToken');
    const decoded = jwtDecode(token);
    const userId = decoded.id;

    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/delete/${userId}`);
      console.log('Account deleted');
      localStorage.removeItem('jwtToken');
      router.push('/signup');
    } catch (error) {
      console.error('Error deleting account:', error);
    }
    setOpenDeleteDialog(false);
  };

  const handleCancelDelete = () => {
    setOpenDeleteDialog(false);
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
              <Button variant="contained" color="error" onClick={handleDeleteClick}>Delete</Button>
            </>
          )}
        </Box>
      </Paper>

      <Dialog
          open={openDeleteDialog}
          onClose={handleCancelDelete}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title" style={{ textAlign: 'center' }}>
            Delete Account
          </DialogTitle>
          <DialogContent style={{ textAlign: 'center' }}>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to delete your account?
            </DialogContentText>
          </DialogContent>
          <DialogActions style={{ justifyContent: 'center' }}>
            <Button onClick={handleConfirmDelete} color="error" variant="contained">Delete Account</Button>
            <Button onClick={handleCancelDelete} color="warning" variant="contained">Cancel Deletion</Button>
          </DialogActions>
        </Dialog>
    </Container>
  );
}
