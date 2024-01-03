import { Container } from '@mui/material';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import SceneCard from '../SceneCard/SceneCard';

export default function ExploreFeed() {
    const [scenes, setScenes] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const fetchScenes = async () => {
          try {
            const token = localStorage.getItem('jwtToken');
            if (token) {
              const decoded = jwtDecode(token);
              const userId = decoded.id;
              console.log(userId)

              const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/scenes/explore/feed/${userId}`);
              setScenes(response.data);
              console.log('Respones', response.data);

            } else {
              console.error("No token found");
            }
          } catch (error) {
            console.error("An error occurred:", error);
          }
        };
        fetchScenes();
    }, [router]);

    return (
        <Container maxWidth="sm">
        <Stack spacing={2}>
            {scenes.map(scene => (
                <SceneCard key={scene._id} scene={scene} />
            ))}
        </Stack>
      </Container>
    );
}
