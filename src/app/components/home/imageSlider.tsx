"use client";

import Image from "next/image";



export function ImageSlider() {
  return (
    <div className="relative w-full max-w-3xl overflow-hidden mt-8">
      <div className="flex animate-slide gap-4 mb-4">
        <Image
          src="/test_1.jpeg"
          alt="Placeholder Image 1"
          width={600}
          height={400}
          className="rounded-lg"
        />
        <Image
          src="/test_1.jpeg"
          alt="Placeholder Image 2"
          width={600}
          height={400}
          className="rounded-lg"
        />
        <Image
          src="https://via.placeholder.com/600x400.png?text=Image+3"
          alt="Placeholder Image 3"
          width={600}
          height={400}
          className="rounded-lg"
        />
        <Image
          src="https://via.placeholder.com/600x400.png?text=Image+4"
          alt="Placeholder Image 4"
          width={600}
          height={400}
          className="rounded-lg"
        />
      </div>
      
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          33% {
            transform: translateX(-100%);
          }
          66% {
            transform: translateX(-200%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-slide {
          animation: slide 24s infinite;
        }
      `}</style>
    </div>
  );
}
