"use client";

import { Separator } from "../separator";
import { FindUs } from "./findUs";
import { MapNavigation } from "./map";

export function Body({ }) { // Ensure you pass currentLanguage if needed
  return (
    <main className="flex flex-col items-center justify-center mt-12 w-full max-w-3xl mx-auto"> {/* Center the content */}
      <FindUs />
      <Separator />
      <MapNavigation />
    </main>
  );
}
