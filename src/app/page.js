"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from './components/common/Navigation/Navigation';
import CharacterGrid from './components/CharacterGrid/CharacterGrid';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      router.push('/login');
    } else {
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <main>
      <Navigation>
        <CharacterGrid />
      </Navigation>
    </main>
  );
}
