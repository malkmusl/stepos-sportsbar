"use client";

import Image from "next/image";

export function ContactInfo() {
  return (
    <div className="flex items-center bg-gray-800 bg-opacity-50 border border-gray-600 rounded-lg p-6 max-w-lg mx-auto shadow-lg transition-transform transform hover:scale-105">
      <div className="flex-shrink-0 mr-6">
        <Image
          src="https://via.placeholder.com/100" // Larger temporary avatar image
          alt="Avatar"
          width={100}
          height={100}
          className="rounded-full border-4 border-gray-700 shadow-md"
        />
      </div>
      <div className="text-white">
        <div className="text-2xl font-semibold mb-1">
          <a href="mailto:example@example.com" className="hover:underline">
            example@example.com
          </a>
        </div>
        <div className="text-xl">
          <a href="tel:+1234567890" className="hover:underline">
            +1 (234) 567-890
          </a>
        </div>
      </div>
    </div>
  );
}
