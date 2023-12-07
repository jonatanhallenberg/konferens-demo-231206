import { Rhymer } from "./_components/rhymer";
import { SnowfallCover } from "./_components/snowfall";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-purple text-white">
      <Rhymer />
      <SnowfallCover />
    </main>
  );
}