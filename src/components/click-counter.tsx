"use client";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useClickStore } from "~/store/local-storage-store";

export function ClickCounter() {
  const clicks = useQuery(api.clickHandlers.getClicks);
  const { clicks: localClicks } = useClickStore();

  return (
    <div className="fixed inset-x-0 top-0 z-50 flex w-full items-center justify-center p-3">
      <div className="py-3 px-6 rounded-full bg-gray-200 dark:bg-gray-800 flex flex-row gap-3 items-center">
        <span className="text-sm">My clicks: {localClicks ?? 0}</span>
        <span className="text-sm text-neutral-500">|</span>
        <span className="text-sm">
          All clicks: {(clicks ?? 0).toLocaleString()}
        </span>
      </div>
    </div>
  );
}
