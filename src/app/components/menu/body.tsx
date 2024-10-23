"use client"; // Ensure this file is a client component

import { Menu } from "./menuGrid"; // Adjusted import

// Update the Body component to accept currentLanguage as a prop
export function Body({ currentLanguage }: { currentLanguage: string }) {
  return (
    <main className="flex flex-col items-center relative w-full ">
      <Menu currentLanguage={currentLanguage} /> {/* Pass the currentLanguage prop to Menu */}
    </main>
  );
}
