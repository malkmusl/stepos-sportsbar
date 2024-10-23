"use client"; // Make this a client component

import { useEffect, useState } from "react"; // Import state and effect hooks
import HomePage from "./pages/home/page";
import MenuPage from "./pages/menu/page";
import LocationPage from "./pages/location/page";
import ContactPage from "./pages/contact/page";
import { useRouter } from "next/navigation"; // Import useRouter
import LicensePage from "./pages/license/page";

export default function Page() {
  const router = useRouter(); // Initialize the router
  const [currentPage, setCurrentPage] = useState(<HomePage />); // State to store the current page content
  const [currentLanguage, setCurrentLanguage] = useState("de"); // State to store the current language

  useEffect(() => {
    // Load the language from localStorage on component mount
    const storedLanguage = localStorage.getItem("lang") || "de"; // Default to English if no language is stored
    setCurrentLanguage(storedLanguage);

    // Check if the current URL has the lang parameter
    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;
    const currentSearch = new URLSearchParams(window.location.search);

    // If the lang parameter is missing, set it to the stored language
    if (!currentSearch.has("lang")) {
      currentSearch.set("lang", storedLanguage);
      const newUrl = `${currentPath}?${currentSearch.toString()}${currentHash}`;
      router.replace(newUrl); // Replace the URL in the browser
    } else {
      // Update the language state if lang parameter is present
      const langParam = currentSearch.get("lang");
      setCurrentLanguage(langParam);
    }

    // Update the page based on the current hash on initial load
    handleHashChange(currentHash);
  }, []); // Runs only on mount

  useEffect(() => {
    // Save the current language to localStorage whenever it changes
    localStorage.setItem("lang", currentLanguage);
  }, [currentLanguage]); // Runs whenever currentLanguage changes

  const handleHashChange = (hash: string) => {
    if (hash === "#menu") {
      setCurrentPage(<MenuPage />);
    } else if (hash === "#location") {
      setCurrentPage(<LocationPage />);
    } else if (hash === "#contact") {
      setCurrentPage(<ContactPage />);
    } else if (hash === "#license") {
      setCurrentPage(<LicensePage />);
    } else {
      setCurrentPage(<HomePage />); // Default to HomePage if no hash or unrecognized hash
    }
  };

  useEffect(() => {
    // Listen for hash changes
    const handleHashChangeListener = () => {
      handleHashChange(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChangeListener);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("hashchange", handleHashChangeListener);
    };
  }, []); // Empty dependency array ensures this only runs on mount/unmount

  return (
    <div>
      <div>
        {currentPage}
      </div>
    </div>
  );
}
