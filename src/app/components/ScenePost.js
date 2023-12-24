import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';


export default function Scene() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="auto"
        image="https://oaidalleapiprodscus.blob.core.windows.net/private/org-KN7aUG6iLkCzDn8o8ehgnQjb/user-HuGEM8KyeNbETGgjGbGYxiK3/img-Q1Jhwd8gF6RXoZdkjCiAzTgN.png?st=2023-12-23T23%3A15%3A50Z&se=2023-12-24T01%3A15%3A50Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-12-23T23%3A14%3A23Z&ske=2023-12-24T23%3A14%3A23Z&sks=b&skv=2021-08-06&sig=isQfWGT0BMP0D9orqYD6Sq0zsU22pcOtUU4eJzIx6HM%3D"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Characters @username
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <Stack direction="row" spacing={4} justifyContent='space-around'>
          <Typography gutterBottom variant="overline" component="div">
            300 Likes
          </Typography>
          <Typography gutterBottom variant="overline" component="div">
            500 Comments
          </Typography>
          <Typography gutterBottom variant="overline" component="div">
            1000 views
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}