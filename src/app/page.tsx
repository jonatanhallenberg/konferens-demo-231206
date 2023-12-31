import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";

export default async function Home() {
  const ai = await api.ai.getCatNames.query();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <ul className="text-2xl text-white">
        {ai?.map(catName => <li>{catName}</li>)}
      </ul>
    </main>
  );
}