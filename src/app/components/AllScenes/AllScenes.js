import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import AllScenesCard from '../AllScenesCard/AllScenesCard'; // Ensure this is the path to your CardComponent
import jwtDecode from 'jwt-decode';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

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
    
            //   if (response.data.length === 0) {
            //     router.push('/characters/new');
            //   }
            } else {
              console.error("No token found");
            }
          } catch (error) {
            console.error("An error occurred:", error);
          }
        };
        fetchScenes();
    }, [router]); // Dependency array ensures the effect runs when the userId changes

    // if (loading) {
    //     return <div>Loading...</div>; // You can replace this with a loading spinner or similar component
    // }
    // if (error) {
    //     return <div>Error: {error}</div>; // Display error message if there was an error fetching the data
    // }

    return (
        <Grid container spacing={2}>
            {scenes.map((scene) => (
                <Grid item key={scene._id} xs={12} sm={6} md={4}>
                    <AllScenesCard
                        key={scene._id}
                        scene={scene}
                    />
                </Grid>
            ))}
        </Grid>
    );
}

