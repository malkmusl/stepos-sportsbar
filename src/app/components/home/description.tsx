"use client"; // Make this a client component

import { useEffect, useState } from "react"; // Import useEffect and useState
import enStrings from "../../languages/en_US"; // Import English strings
import deStrings from "../../languages/de_DE"; // Import German strings

const languageStrings = {
  en: enStrings,
  de: deStrings,
  // Add more languages as needed
};

interface DescriptionProps {
  currentLanguage: keyof typeof languageStrings; // Ensure that currentLanguage is a valid key
}

export function Description({ currentLanguage }: DescriptionProps) {
  const [strings, setStrings] = useState(languageStrings.de); // Default to English

  useEffect(() => {
    // Update strings based on current language
    const selectedStrings = languageStrings[currentLanguage] || languageStrings.en; // Fallback to English if language is not found
    setStrings(selectedStrings);
  }, [currentLanguage]);

  return (
    <div className="relative w-full max-w-3xl">
      <p className="text-lg text-center px-4">
        {strings.description_1}
      </p>

      <p className="text-lg text-center px-4 mt-4">
        {strings.description_2}
      </p>

      <p className="text-lg text-center px-4 mt-4">
        {strings.description_3}
      </p>

      <p className="text-lg text-center px-4 mt-4">
        {strings.description_4}
      </p>
    </div>
  );
}
