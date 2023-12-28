import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useParams } from 'next/navigation';
import Box from '@mui/material/Box'; // Import Box

export default function SingleScene() {
  const { sceneId } = useParams();
  const [scene, setScenes] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchScene = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/scenes/${sceneId}`);
        setScenes(response.data);
        setLoading(false);
      } catch (error) {
        console.log("An error ocurred:", error);
      }
    };

    fetchScene();
  }, [sceneId]);

  if (isLoading) return <p>Loading...</p>;
  if (!scene) return <p>No scene data found</p>;

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100%"> {/* Centering styles */}
      <Card sx={{ maxWidth: 650 }}>
        <CardMedia
          component="img"
          alt="Scene Image"
          height="auto"
          image={scene.sceneImageUrl}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {scene.sceneCaption}
          </Typography>
          <Stack direction="row" spacing={4} justifyContent='space-around'>
            <Typography gutterBottom variant="overline" component="div">
              {scene.likes} Likes
            </Typography>
            <Typography gutterBottom variant="overline" component="div">
              {scene.comments} Comments
            </Typography>
            <Typography gutterBottom variant="overline" component="div">
              {scene.views} Views
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
