"use client"; // This makes the component a Client Component

import { useEffect, useRef, useState } from 'react';

export function MapNavigation() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [marker, setMarker] = useState<google.maps.Marker | null>(null);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);

  // Set the coordinates for Legend's Sportsbar And More
  const barLocation = { lat: 50.4227809, lng: 9.565153 }; // Coordinates from the provided URL

  useEffect(() => {
    // Initialize the map
    const initMap = () => {
      const map = new google.maps.Map(mapRef.current!, {
        center: barLocation,
        zoom: 17,
        styles: [
          {
            featureType: 'all',
            elementType: 'geometry',
            stylers: [
              { color: '#212121' }, // Dark bAackground color
              { visibility: 'on' },
            ],
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#1a1a1a' }], // Dark water color
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [
              { color: '#ffffff' }, // White road color
              { visibility: 'simplified' },
            ],
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{ color: '#1e1e1e' }], // Dark color for points of interest
          },
        ],
      });

      // Set marker for the bar location
      const barMarker = new google.maps.Marker({
        position: barLocation,
        map,
        title: "Legend's Sportsbar And More",
      });

      // Set the marker state
      setMarker(barMarker);

      // Set the location state
      setLocation(barLocation);
    };

    // Load Google Maps script
    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBCtzDwBop0_UIcnvDjRhZPyHMjSFqh0Xo&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    };

    loadGoogleMapsScript();
    window.initMap = initMap; // Make initMap globally accessible
  }, []);

  const handleNavigate = () => {
    if (location) {
      const url = `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`;
      window.open(url, '_blank');
    }
  };

  return (
    <div className="relative overflow-hidden justify-center mt-8 w-full max-w-3xl mx-auto"> {/* Set fixed width here */}
      <div ref={mapRef} className="h-[500px] rounded-lg border border-gray-600" /> {/* Keep this as is */}
      
      {location && (
        <div className="flex flex-col items-center mt-4 p-12">
          <p>A
            Location set at: Magdloser Str. 2, 36103 Flieden
          </p>
          <button
            onClick={handleNavigate}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Start Navigation
          </button>
        </div>
      )}
    </div>
  );
}
