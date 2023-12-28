import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/navigation';

const ITEMS_PER_PAGE = 6;

export default function CharacterGrid() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const router = useRouter();

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const token = localStorage.getItem('jwtToken');
        if (token) {
          const decoded = jwtDecode(token);
          const userId = decoded.id;

          const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/characters/collection/${userId}`);
          setCharacters(response.data);

          if (response.data.length === 0) {
            router.push('/characters/new');
          }
        } else {
          console.error("No token found");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchCharacters();
  }, [router]);

  const pageCount = Math.ceil(characters.length / ITEMS_PER_PAGE);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const paginatedCharacters = characters.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Grid container spacing={4}>
        {paginatedCharacters.map((character) => (
          <Grid item key={character.key} xs={12} sm={6} md={4}>
            <CharacterCard character={character} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={pageCount}
        page={page}
        onChange={handleChangePage}
        color="primary"
        sx={{ marginTop: 2, justifyContent: 'center', display: 'flex' }}
      />
    </Container>
  );
}
