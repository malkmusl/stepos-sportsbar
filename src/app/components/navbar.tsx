import { useRouter } from "next/navigation"; // Import useRouter from Next.js
import { Logo } from "./home/logo";
import { Separator } from "./separator";
import { useEffect, useState } from "react"; // Import useEffect and useState for managing state and side effects

export function Navbar({ currentLanguage, setCurrentLanguage }) {
  const router = useRouter(); // Initialize the router
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null); // State to store the timeout ID

  // Function to handle language change
  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value; // Get the selected language from dropdown

    // Get the current pathname (e.g., "/", "/menu")
    const currentPath = window.location.pathname;
    const currentHash = window.location.hash; // Preserve hash if any

    // Create a new URLSearchParams object to manage query parameters
    const searchParams = new URLSearchParams(window.location.search);

    // Set the new lang parameter (removing any existing ones)
    searchParams.set("lang", selectedLanguage);

    // Create a string for the search parameters, placing lang first
    const paramsString = `?${searchParams.toString()}`;

    // Construct the new URL with lang first and then the hash
    const newUrl = `${currentPath}${paramsString}${currentHash}`;

    // Clear any existing timeout to avoid stacking multiple timeouts
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Set a timeout to update the URL after 2 seconds
    const id = setTimeout(() => {
      router.push(newUrl); // Push the new URL to the router
      setCurrentLanguage(selectedLanguage); // Update currentLanguage
    }, 2000); // 2000 ms = 2 seconds

    // Store the timeout ID in state
    setTimeoutId(id);
  };

  return (
    <div className="relative z-10"> {/* Set z-index for Navbar */}
      {/* Move Welcome component above the navbar */}
      <div className="flex justify-center mb-4">
        <Logo />
      </div>

      {/* Full-width navbar */}
      <nav className="flex justify-between items-center py-4 px-8 bg-gray-800 bg-opacity-50 border border-gray-600 text-white rounded-lg backdrop-blur-md shadow-md">
        <ul className="flex gap-6 w-full justify-center">
          <li>
            <a className="hover:underline" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="hover:underline" href="#menu">
              Menu
            </a>
          </li>
          <li>
            <a className="hover:underline" href="#location">
              Location
            </a>
          </li>
          <li>
            <a className="hover:underline" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        {/* Language selection dropdown with Unicode flags */}
        <div className="ml-auto">
          <select
            className="bg-gray-800 bg-opacity-50 text-white gap-8 border border-gray-600 rounded px-2 py-1 appearance-none"
            onChange={handleLanguageChange} // Handle language change
            value={currentLanguage} // Set the value of the select to currentLanguage
          >
            <option value="de" className="flex items-center">
              🇩🇪 Deutsch {/* Germany Flag */}
            </option>
            <option value="en" className="flex items-center">
              🇬🇧 English {/* UK Flag */}
            </option>
            <option value="es" className="flex items-center">
              🇪🇸 Español {/* Spain Flag */}
            </option>
            <option value="fr" className="flex items-center">
              🇫🇷 Français {/* France Flag */}
            </option>
            {/* Add more languages as needed */}
          </select>
        </div>
      </nav>
      <Separator />
    </div>
  );
}
