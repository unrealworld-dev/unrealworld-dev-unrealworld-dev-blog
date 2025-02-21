"use client";

import { useState } from "react";
import Link from "next/link";
import { vt323 } from "@/utils/fonts";
import { Telescope, Heart } from "lucide-react";
import { IconHoverShake } from "@/components/utils/icon-button";
import { ThemeModeToggle } from "./theme-mode";
import NavBar from "./nav-bar";

export function SiteHeader() {
  const [likes, setLikes] = useState(0); // 좋아요 카운트 포스트에서 가져와야함

  return (
    <header className="z-300
    fixed top-3 left-1/2 -translate-x-1/2 w-[92%] max-w-3xl 
    rounded-full p-3 px-6 
    transition-all duration-300 
    backdrop-blur-sm
    border-4 border-[var(--border-color)]
    ">
      <div className="grid grid-cols-3 items-center">
        <div className="flex items-center space-x-3">
          <IconHoverShake onClick={() => setLikes(likes + 1)}>
            <Telescope className="color-default color-hover w-5 h-5 transition" />
          </IconHoverShake>
          <IconHoverShake>
            <Heart className="color-default color-hover-red"></Heart>
          </IconHoverShake>

        </div>
        <div className="flex justify-center">
          <Link href="/">
            <span
              className={`${vt323.className}  color-hover text-xl font-extrabold tracking-wide hover:scale-105 transition-transform`}
            >
              Unreal World
            </span>
          </Link>
        </div>

        <div className="flex justify-end items-center space-x-6">
          <NavBar />
          <ThemeModeToggle />
        </div>
      </div>
    </header>
  );
}
