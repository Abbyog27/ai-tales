import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function CreateCharacter() {
  

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
          <Box component="form" noValidate sx={{ mt: 1 }}>
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
              id="gender"
              label="Gender"
              name="gender"
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
              id="age"
              label="Age"
              name="age"
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
              id="personality"
              label="Personality"
              name="personality"
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
              id="hobby"
              label="Favorite Hobby"
              name="hobby"
              autoFocus
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
    
      </Container>
    </ThemeProvider>
  );
        }
      