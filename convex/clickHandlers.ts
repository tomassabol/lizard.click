import { query, mutation } from "./_generated/server";
import { clicks } from "./clicksCounter";

export const getClicks = query({
  handler: async (ctx) => await clicks.count(ctx),
});

export const incrementClick = mutation({
  handler: async (ctx) => await clicks.inc(ctx),
});
