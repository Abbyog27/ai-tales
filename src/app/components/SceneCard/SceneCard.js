import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default function SceneCard({ scene }) {
  if (!scene) return <p>No scene data found</p>;

  return (
    <Card raised='true' sx={{ maxWidth: 650 }}>
      <CardMedia
        component="img"
        alt="Scene Image"
        height="auto"
        image={scene.sceneImageUrl}
      />
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {scene.characterName }
        </Typography>
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
  );
}