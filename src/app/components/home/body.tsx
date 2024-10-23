"use client";

import { ImageSlider } from "./imageSlider";
import { Separator } from "../separator";
import { AboutUs } from "./aboutUs";
import { Description } from "./description";
import { Welcome } from "./welcome";

// Define the props for the Body component
interface BodyProps {
  currentLanguage: string; // or use a specific type if you have defined them, e.g., 'en' | 'de'
}

export function Body({ currentLanguage }: BodyProps) {
  return (
    <main className="flex flex-col mt-8 row-start-2 items-center sm:items-center relative">
      <Welcome />
      <div className="mt-0 mb-8">
        <Separator full={true} />
        <ImageSlider />
        <Separator full={true} />
      </div>
      <div className="relative w-full max-w-3xl py-4 bg-gray-800 bg-opacity-50 border border-gray-600 rounded-lg">
        <AboutUs />
        <Description currentLanguage={currentLanguage} />
      </div>
    </main>
  );
}
