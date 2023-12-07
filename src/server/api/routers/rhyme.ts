import { z } from "zod";
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: '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', // defaults to process.env["OPENAI_API_KEY"]
});

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const rhymeRouter = createTRPCRouter({
  generateRhyme: publicProcedure
    .input(z.object({
      present: z.string()
    }))
    .mutation(async ({ input }) => {
      const params: OpenAI.Chat.ChatCompletionCreateParams = {
        messages: [{ role: 'user', content: 'Avslöja inte paketets innehåll. Skriv ett julklappsrim för: ' + input.present },
      ],
        model: 'gpt-4'
      };
      const chatCompletion: OpenAI.Chat.ChatCompletion = await openai.chat.completions.create(params);
      return chatCompletion.choices[0]?.message.content;


    }),
});
