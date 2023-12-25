import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import CharacterCard from '../CharacterCard/CharacterCard';

const cards = [
  {
    key: 1,
    name: "Character"
  },
  {
    key: 2,
    name: "Character"
  },
  {
    key: 3,
    name: "Character"
  },
  {
    key: 4,
    name: "Character"
  },
  {
    key: 5,
    name: "Character"
  },
  {
    key: 6,
    name: "Character"
  },
  {
    key: 7,
    name: "Character"
  },
  {
    key: 8,
    name: "Character"
  },
  {
    key: 9,
    name: "Character"
  },
];

const ITEMS_PER_PAGE = 6;

export default function CharacterGrid() {
  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(cards.length / ITEMS_PER_PAGE);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const paginatedCards = cards.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Grid container spacing={4}>
        {paginatedCards.map((card) => (
          <Grid item key={card.key} xs={12} sm={6} md={4}>
            <CharacterCard character={card} />
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
