'use client';
import { useState } from 'react';
import Navigation from '@/app/components/common/Navigation/Navigation';
import UserProfile from '@/app/components/UserProfile/UserProfile';

// we are going to be fetching data from our API and displaying it on
// the page

export default function Home() {
  // state is what the data is representing in realtime
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [age, setAge] = useState(null);
  const [name, setName] = useState('Dylan');

  return (
    <main>
      <Navigation>
        <UserProfile />
      </Navigation>
    </main>
  );
}
