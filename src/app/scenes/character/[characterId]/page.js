"use client"
import React from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import Navigation from '@/app/components/common/Navigation/Navigation';
import ScenesFeed from '@/app/components/ScenesFeed/ScenesFeed';

export default function CharacterScenesPage() {
      const router = useRouter();
      const { characterId } = useParams();
      const [character, setCharacter] = useState(null); 

      useEffect(() => {
        const fetchCharacter = async () => {
          try {
            console.log("Debuggin Scene Feed")
            const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/characters/${characterId}`);
            console.log('DEBUGGING', response);
            fetchCharacter(response.data);
          } catch (error) {
            console.log("An error ocurred:", error);
          }
        };

        fetchCharacter();
      }, [characterId]);


    return (
        <div>
          <Navigation>
            <ScenesFeed characterId={characterId} />
          </Navigation>
        </div>
    );
}