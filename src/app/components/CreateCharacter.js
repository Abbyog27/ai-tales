import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const defaultTheme = createTheme();

export default function CreateCharacter() {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const character = {
      user: "507f1f77bcf86cd799439011",
      name: data.get('name'),
      species: data.get('species'),
      gender: data.get('gender'),
      age: data.get('age'),
      personality: data.get('personality'),
      hobby: data.get('hobby')
    };

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/characters/new`, character);
      console.log(response.data);
      router.push('/');
    } catch (error) {
      console.error('Error creating character:', error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container maxWidth="xl">
        <CssBaseline />
        <Paper
          elevation={3}
          style={{
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Typography variant="h3">Add Character</Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoFocus
                InputProps={{
                  style: {
                    borderRadius: '25px',
                  }
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="species"
                label="Species"
                name="species"
                InputProps={{
                  style: {
                    borderRadius: '25px',
                  }
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="gender"
                label="Gender"
                name="gender"
                InputProps={{
                  style: {
                    borderRadius: '25px',
                  }
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="age"
                label="Age"
                name="age"
                InputProps={{
                  style: {
                    borderRadius: '25px',
                  }
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="personality"
                label="Personality"
                name="personality"
                InputProps={{
                  style: {
                    borderRadius: '25px',
                  }
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="hobby"
                label="Favorite Hobby"
                name="hobby"
                InputProps={{
                  style: {
                    borderRadius: '25px',
                  }
                }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ borderRadius: '25px' }}
              >
                Create Character
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
