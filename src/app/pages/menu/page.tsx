"use client"; // Make this a client component

import { useEffect, useState } from "react"; // Import useEffect and useState
import { Navbar } from "../../components/navbar"; // Adjusted path
import { Body } from "../../components/menu/body"; // Adjusted path
import { Footer } from "../../components/footer"; // Import from the new footer location
import { useRouter } from "next/navigation"; // Import useRouter

export default function HomePage() {
  const router = useRouter(); // Initialize the router
  const [currentLanguage, setCurrentLanguage] = useState("en"); // State to store the current language

  useEffect(() => {
    // Load the language from localStorage on component mount
    const storedLanguage = localStorage.getItem("lang") || "en"; // Default to English if no language is stored
    setCurrentLanguage(storedLanguage);

    // Check if the current URL has the lang parameter
    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;
    const currentSearch = new URLSearchParams(window.location.search);

    if (!currentSearch.has("lang")) {
      // If lang parameter is missing, set it to the stored language
      currentSearch.set("lang", storedLanguage);
      const newUrl = `${currentPath}?${currentSearch.toString()}${currentHash}`;
      router.replace(newUrl); // Replace the URL in the browser
    }
  }, []); // Runs only on mount

  return (
    <div className="items-center justify-items-center min-h-screen p-8 gap-16 font-[family-name:var(--font-geist-sans)]">
      <Navbar currentLanguage={currentLanguage} setCurrentLanguage={setCurrentLanguage} />
      <Body currentLanguage={currentLanguage} />
      <Footer />
    </div>
  );
}
