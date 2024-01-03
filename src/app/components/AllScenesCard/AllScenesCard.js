import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CardActionArea, CardActions } from '@mui/material';

export default function AllScenesCard ({ scene }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={scene.sceneImageUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {scene.sceneCaption}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Likes: {scene.likes}, Comments: {scene.comments}, Views: {scene.views}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Like
        </Button>
      </CardActions>
    </Card>
  );
};


