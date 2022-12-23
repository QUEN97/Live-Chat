import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const helpRequestRouter = router({
  createHelpRequest: publicProcedure.mutation(async({ ctx }) => {
   const helpRequest = await ctx.prisma.helpRequest.create({
      data:{},
    });
  return helpRequest;
  }),
});
