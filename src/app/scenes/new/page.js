import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Stack, Button, Grid, Typography, TextField } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function CreateScene() {
  return (
    <React.Fragment>
      <Container component="main" maxWidth="xl" sx={{
        marginTop: 30,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <CssBaseline />
        <Stack spacing={5} sx={{
          textAlign: 'center',
        }}>
            <Typography variant="h3" component="h3">
              An exciting adventure awaits CharacterName!
            </Typography>
            <Typography variant="h6" component="h6">
              Describe what you want to see your character do in your next story.
            </Typography>
            <TextField multiline required fullWidth label="New Scene" id="sceneInput" />
            <Button variant="contained" size="large">Create New Scene</Button>
        </Stack>
      </Container>
    </React.Fragment>
  );
}
