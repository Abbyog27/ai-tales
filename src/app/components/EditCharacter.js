import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import { useRouter } from 'next/navigation';


const defaultTheme = createTheme();

export default function EditCharacter({ characterInfo }) {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [apiStatus, setApiStatus] = useState('idle');
  const [formData, setFormData] = useState({ ...characterInfo });
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);


  if (!characterInfo) {
    return <div>Loading...</div>;
  }

  const excludedFields = ['_id', 'user', 'createdAt', 'updatedAt', '__v', 'avatar'];

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setFormData({ ...characterInfo }); // Reset formData to initial values
  };

  const handleConfirmEdit = async () => {
    setIsEditing(false); // Disable editing mode immediately
    setApiStatus('inProgress');
    try {
      await axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}/characters/edit/${characterInfo._id}`, formData);
      setApiStatus('success');
      setTimeout(() => {
        setApiStatus('idle');
      }, 1500);
    } catch (error) {
      console.error("Error updating character:", error);
      setIsEditing(true);
      setApiStatus('idle');
    }
  };

  const handleDeleteCharacter = () => {
    setDeleteConfirmOpen(true);
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${process.env.NEXT_PUBLIC_SERVER_URL}/characters/delete/${characterInfo._id}`);
      setDeleteConfirmOpen(false);
      window.location.href = '/';

    } catch (error) {
      console.error("Error deleting character:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar
            src={characterInfo.avatar}
            alt={characterInfo.name}
            sx={{ width: 100, height: 100, mb: 2 }}
          />
          <Box component="form" noValidate sx={{ mt: 1 }}>
            {Object.keys(formData).filter(key => !excludedFields.includes(key)).map((key) => (
              <TextField
                key={key}
                margin="normal"
                required
                fullWidth
                id={key}
                label={key.charAt(0).toUpperCase() + key.slice(1)}
                name={key}
                autoFocus
                disabled={!isEditing}
                value={formData[key]}
                onChange={handleChange}
                InputProps={{
                  style: {
                    borderRadius: '25px',
                  }
                }}
              />
            ))}

            {!isEditing ? (
              <>
                <Button onClick={handleEdit} fullWidth variant="contained" sx={{ mt: 3, mb: 1 }}>
                  Edit Character
                </Button>
                <Button onClick={handleDeleteCharacter} fullWidth variant="contained" color="error" sx={{ mt: 1, mb: 2 }}>
                  Delete Character
                </Button>
              </>
            ) : (
              <>
                <Button onClick={handleConfirmEdit} fullWidth variant="contained" sx={{ mt: 3, mb: 1 }}
                  disabled={apiStatus === 'inProgress'}>
                  {apiStatus === 'inProgress' ? <CircularProgress size={24} /> : 'Confirm Edit'}
                </Button>
                <Button onClick={handleCancelEdit} fullWidth variant="contained" color="error" sx={{ mt: 1, mb: 2 }}>
                  Cancel Edit
                </Button>
              </>
            )}
          </Box>
        </Box>
        <Dialog
          open={deleteConfirmOpen}
          onClose={() => setDeleteConfirmOpen(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Delete Character"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to delete your character? Deleting a character will also delete stories associated with it.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => setDeleteConfirmOpen(false)}
              variant="contained"
              color="primary"
              sx={{ mr: 2 }}
            >
              Cancel Deletion
            </Button>
            <Button
              onClick={handleDelete}
              variant="contained"
              color="error"
            >
              Confirm Deletion
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </ThemeProvider>
  );
}
