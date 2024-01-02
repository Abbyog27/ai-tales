"use client"
// import { useEffect, useState } from "react";
import AllScenes from "@/app/components/AllScenes/AllScenes";
import Navigation from "@/app/components/common/Navigation/Navigation";
// import SignUp from "../components/SignUp";

export default function MyScenes() {
    return (
      <div>
        <Navigation>
          <AllScenes/>
        </Navigation>
      </div>
    )
  }