import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SceneCard from '../SceneCard/SceneCard'; 
import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/navigation';
import { Container } from '@mui/material';
import Stack from '@mui/material/Stack';

export default function AllScenes() {
    // const { userId } = useParams();
    const [scenes, setScenes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchScenes = async () => {
          try {
            const token = localStorage.getItem('jwtToken');
            if (token) {
              const decoded = jwtDecode(token);
              const userId = decoded.id;
              console.log(userId)
    
              const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/scenes/explore/${userId}`);
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
    }, [router]); // Dependency array ensures the effect runs when the userId changes

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

