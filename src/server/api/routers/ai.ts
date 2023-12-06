import { z } from "zod";
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: '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', // defaults to process.env["OPENAI_API_KEY"]
});

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const aiRouter = createTRPCRouter({
  getCatNames: publicProcedure
    .query(async () => {
      const params: OpenAI.Chat.ChatCompletionCreateParams = {
        messages: [{ role: 'user', content: 'Ge mig 5 kattnamn i formatet [ "katt1", "katt2" ] och ingen övrig text' }],
        model: 'gpt-3.5-turbo',
      };
      const chatCompletion: OpenAI.Chat.ChatCompletion = await openai.chat.completions.create(params);
      return JSON.parse(chatCompletion.choices[0]?.message.content ?? "[]") as unknown as string[];

    }),
});
