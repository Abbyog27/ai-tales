'use client';
import Navigation from "@/app/components/common/Navigation/Navigation";
import SceneGenerator from "@/app/components/SceneGenerator/SceneGenerator";

export default function Home() {

  return (
    <main>
      <Navigation>
        <SceneGenerator />
      </Navigation>
    </main>
  );
}
