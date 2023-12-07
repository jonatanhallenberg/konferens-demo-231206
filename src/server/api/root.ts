import { postRouter } from "~/server/api/routers/post";
import { createTRPCRouter } from "~/server/api/trpc";
import { rhymeRouter } from "./routers/rhyme";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  rhyme: rhymeRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
