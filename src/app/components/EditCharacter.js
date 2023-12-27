import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';



// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function EditCharacter({ characterInfo }) {
  if (!characterInfo) {
    return <div>Loading...</div>;
  }

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
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoFocus
              disabled
              value={characterInfo.name}
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
              disabled
              value={characterInfo.species}
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
              disabled
              value={characterInfo.gender}
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
              disabled
              value={characterInfo.age}
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
              disabled
              value={characterInfo.personality}
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
              disabled
              value={characterInfo.favoriteHobby}
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
              sx={{ mt: 3, mb: 1 }}
              style={{ borderRadius: '25px' }}
            >
              Edit Character
            </Button>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
              color="error"
              style={{ borderRadius: '25px' }}
            >
              Cancel
            </Button>

          </Box>
        </Box>

      </Container>
    </ThemeProvider>
  );
}
