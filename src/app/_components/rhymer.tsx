"use client";

import { useState } from "react";
import { api } from "~/trpc/react";
import { Mountains_of_Christmas } from "next/font/google";

export const mountainsOfChristmas = Mountains_of_Christmas({
    weight: ["400", "700"],
    subsets: ["latin"],
  });

export const Rhymer = () => {

    const [present, setPresent] = useState("rutig flanellskjorta");

    const { data, mutate, isLoading } = api.rhyme.generateRhyme.useMutation();
    return isLoading ? <img src="/loading.gif" /> : <div className="z-10">
        <form onSubmit={async (e) => {
            e.preventDefault();
            mutate({ present });
        }}>
            <div className="flex flex-col gap-6 w-96 h-48 content-start">
                <div className="flex flex-col gap-3 text-3xl">
                    <label className={`${mountainsOfChristmas.className}`}>
                        Vad är din julklapp?
                    </label>
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="text" onChange={(e) => setPresent(e.target.value)} value={present} />
                    <button type="submit" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Rimma!</button>
                </div>

                <div className={`whitespace-pre-line`}>
                    {data}
                </div>
            </div>
        </form>
    </div>
};
