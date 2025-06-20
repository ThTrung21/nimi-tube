import { z } from "zod";
import { baseProcedure, createTRPCRouter, protectedProcedire } from "../init";

export const appRouter = createTRPCRouter({
	hello: protectedProcedire
		.input(
			z.object({
				text: z.string(),
			})
		)
		.query((opts) => {
			console.log({ fromContext: opts.ctx.user });
			return {
				greeting: `hello ${opts.input.text}`,
			};
		}),
});
// export type definition of API
export type AppRouter = typeof appRouter;
