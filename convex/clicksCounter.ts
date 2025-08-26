import { components } from "./_generated/api";
import { ShardedCounter } from "@convex-dev/sharded-counter";

// Create a sharded counter for clicks with 16 shards for good throughput
export const clickCounter = new ShardedCounter(components.shardedCounter, {
  defaultShards: 16,
});

// Export a specific counter instance for clicks
export const clicks = clickCounter.for("clicks");
