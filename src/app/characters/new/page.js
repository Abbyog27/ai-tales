"use client"
import { useEffect, useState } from "react";
import Navigation from "@/app/components/common/Navigation/Navigation";
import CreateCharacter from "@/app/components/CreateCharacter";

export default function CharacterNew() {
  return (
    <Navigation>
      <CreateCharacter />
    </Navigation>
  )
}
