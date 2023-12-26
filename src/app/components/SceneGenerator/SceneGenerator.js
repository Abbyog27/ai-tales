import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useTheme } from '@mui/material/styles';

export default function SceneGenerator({ character }) {
  const theme = useTheme();
  const router = useRouter();
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateScene = async () => {
    setIsLoading(true);
    try {
      const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/scenes/new/658b15f63a0351d6127d7ed6`;

      const response = await axios.post(url, { prompt });

      console.log('Response:', response.data);
      const sceneId = response.data.sceneId;
      router.push(`/scenes/${sceneId}`);
    } catch (error) {
      console.error('Error creating scene:', error);
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth="lg">
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: 8,
            [theme.breakpoints.down('md')]: {
              paddingTop: 4,
            },
          }}
        >
          <Typography variant="h2" component="h1" gutterBottom align="center"
            sx={{
              [theme.breakpoints.down('sm')]: { 
                fontSize: '1.75rem',
              },
            }}
          >
            An exciting adventure awaits "Character"!
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom align="center"
            sx={{
              [theme.breakpoints.down('sm')]: {
                fontSize: '1.25rem',
              },
            }}
          >
            Describe what you want to see your character do in your next scene.
          </Typography>
          <TextField
            label="Describe your character's next adventure..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            fullWidth
            multiline
            margin="normal"
            disabled={isLoading}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleCreateScene}
            sx={{ mt: 2 }}
            disabled={isLoading}
          >
            {isLoading ? (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <CircularProgress size={24} sx={{ mr: 1 }} />
                <Typography variant="body1">Creation In Progress</Typography>
              </Box>
            ) : 'Create Scene'}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
