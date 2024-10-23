"use client";

import Image from "next/image";
import { Separator } from "../separator";

export function ContactUs() {
  return (
    <div className="py-4 bg-gray-800 bg-opacity-50 mt-8 border border-gray-600 rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-4">Want to Get in Touch?</h1>
      <Separator />
      
      <div className="relative w-full max-w-2xl mx-auto mb-6">
        <p className="text-lg text-center px-4 leading-tight">
          We’re just a call or email away! Whether you have questions, feedback, or simply want to say hi, we’re all ears.
        </p>

        <p className="text-lg text-center px-4 leading-tight mt-4">
          If you’re in the area, feel free to swing by our welcoming spot at <strong>Magdloser Str. 2</strong> in lovely <strong>Flieden</strong>. 
          Just follow the laughter and good vibes—our door is always open!
        </p>

        <p className="text-lg text-center px-4 leading-tight mt-4">
          You can find our contact information below.
        </p>
      </div>

      <div className="flex items-center bg-gray-800 bg-opacity-50 border border-gray-600 rounded-lg p-6 max-w-lg mx-auto shadow-lg transition-transform transform hover:scale-105">
        <div className="flex-shrink-0 mr-6">
          <Image
            src="https://via.placeholder.com/100" // Temporary avatar image
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
    </div>
  );
}
