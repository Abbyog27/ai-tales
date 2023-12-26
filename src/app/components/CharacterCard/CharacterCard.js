import { ButtonGroup } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CharacterCard({ character }) {

  const [scenes, setScenes] = useState([]);

  useEffect(() => {
    const fetchScenes = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/scenes/character/${character._id}`);
        console.log('DEBUGGING', response);
        setScenes(response.data);
      } catch (error) {
        console.log("An error ocurred:", error);
      }
    };

    fetchScenes();
  }, [character._id]);

  return (
    <Card
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <CardMedia
        component="div"
        sx={{
          // 16:9
          pt: '100%',
        }}
        image={character.avatar}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {character.name}
        </Typography>
        <Typography>
          Total Stories: {scenes.length}
        </Typography>
      </CardContent>
      <CardActions>
        <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
          <Button href={`/characters/${character._id}`}>View</Button>
          <Button href={`/scenes/new/${character._id}`}>Create Scene</Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
}
