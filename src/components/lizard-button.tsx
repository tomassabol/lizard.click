"use client";

import Image from "next/image";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useClickStore } from "~/store/local-storage-store";

export function LizardButton() {
  const mutate = useMutation(api.clickHandlers.incrementClick);
  const { incrementClicks } = useClickStore();

  const handleClick = async () => {
    const audio = new Audio("/lizard.wav");
    audio.play();
    incrementClicks();
    await mutate();
  };

  return (
    <button
      onClick={handleClick}
      className="cursor-pointer transition-all duration-300 hover:scale-105"
    >
      <Image src="/lizard.png" alt="lizard" width={200} height={200} />
    </button>
  );
}
