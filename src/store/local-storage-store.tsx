"use client";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type ClickStore = {
  clicks: number;
  incrementClicks: () => void;
};

export const useClickStore = create<ClickStore>()(
  persist(
    (set, get) => ({
      clicks: 0,
      incrementClicks: () => set({ clicks: get().clicks + 1 }),
    }),
    {
      name: "click-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
