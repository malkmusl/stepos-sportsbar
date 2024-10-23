import React from 'react';

// Softgetraenke Card
export function SoftgetraenkeCard() {
  return (
    <div className="bg-gray-800 bg-opacity-50 border border-gray-700 p-6 rounded-lg shadow-md w-full">
      <h3 className="text-2xl font-bold mb-4 text-yellow-400 tracking-wide">SOFTGETRÄNKE</h3>
      <hr className="border-t border-gray-700 mb-4" />
      <ul className="space-y-4 text-lg">
        {/* Item Row */}
        <li className="flex items-center border-b border-gray-700 pb-2 mb-2">
          <div className="flex justify-center items-center w-1/2">
            <span>Cola, Cola Zero, Fanta, Sprite</span>
          </div>
          <div className="flex justify-center items-center w-1/4">
            <span>(0,2l)</span>
          </div>
          <div className="flex justify-center items-center w-1/4">
            <span className="font-semibold">1,50€</span>
          </div>
        </li>
        <li className="flex items-center border-b border-gray-700 pb-2 mb-2">
          <div className="flex justify-center items-center w-1/2">
            <span>Wasser spritzig</span>
          </div>
          <div className="flex justify-center items-center w-1/4">
            <span>(0,2l)</span>
          </div>
          <div className="flex justify-center items-center w-1/4">
            <span className="font-semibold">1,00€</span>
          </div>
        </li>
        <li className="flex items-center border-b border-gray-700 pb-2 mb-2">
          <div className="flex justify-center items-center w-1/2">
            <span></span>
          </div>
          <div className="flex justify-center items-center w-1/4">
            <span>(0,4l)</span>
          </div>
          <div className="flex justify-center items-center w-1/4">
            <span className="font-semibold">1,50€</span>
          </div>
        </li>
        <li className="flex items-center border-b border-gray-700 pb-2 mb-2">
          <div className="flex justify-center items-center w-1/2">
            <span>Wasser still</span>
          </div>
          <div className="flex justify-center items-center w-1/4">
            <span>(0,5l)</span>
          </div>
          <div className="flex justify-center items-center w-1/4">
            <span className="font-semibold">1,00€</span>
          </div>
        </li>
        <li className="flex items-center border-b border-gray-700 pb-2 mb-2">
          <div className="flex justify-center items-center w-1/2">
            <span>Apfelsaft, Orangensaft</span>
          </div>
          <div className="flex justify-center items-center w-1/4">
            <span>(0,2l)</span>
          </div>
          <div className="flex justify-center items-center w-1/4">
            <span className="font-semibold">1,50€</span>
          </div>
        </li>
        <li className="flex items-center border-b border-gray-700 pb-2 mb-2">
          <div className="flex justify-center items-center w-1/2">
            <span>Red Bull, Red Bull Sugarfree</span>
          </div>
          <div className="flex justify-center items-center w-1/4">
            <span>(0,25l)</span>
          </div>
          <div className="flex justify-center items-center w-1/4">
            <span className="font-semibold">2,50€</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

// Heissgetraenke Card
export function HeissgetraenkeCard() {
  return (
    <div className="bg-gray-800 bg-opacity-50 border border-gray-700 p-6 rounded-lg shadow-md w-full">
      <h3 className="text-2xl font-bold mb-4 text-yellow-400 tracking-wide">HEISSGETRÄNKE</h3>
      <hr className="border-t border-gray-700 mb-4" />
      <ul className="space-y-4 text-lg">
        <li className="flex items-center border-b border-gray-700 pb-2 mb-2">
          <div className="flex justify-center items-center w-1/2">
            <span>Espresso</span>
          </div>
          <div className="flex justify-center items-center w-1/4">
            <span></span>
          </div>
          <div className="flex justify-center items-center w-1/4">
            <span className="font-semibold">1,50€</span>
          </div>
        </li>
        <li className="flex items-center border-b border-gray-700 pb-2 mb-2">
          <div className="flex justify-center items-center w-1/2">
            <span>Café Crema</span>
          </div>
          <div className="flex justify-center items-center w-1/4">
            <span></span>
          </div>
          <div className="flex justify-center items-center w-1/4">
            <span className="font-semibold">1,50€</span>
          </div>
        </li>
        <li className="flex items-center border-b border-gray-700 pb-2 mb-2">
          <div className="flex justify-center items-center w-1/2">
            <span>Tee (verschiedene Sorten)</span>
          </div>
          <div className="flex justify-center items-center w-1/4">
            <span></span>
          </div>
          <div className="flex justify-center items-center w-1/4">
            <span className="font-semibold">1,50€</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

// Longdrinks Card
export function LongdrinksCard() {
  return (
    <div className="bg-gray-800 bg-opacity-50 border border-gray-700 p-6 rounded-lg shadow-md w-full">
      <h3 className="text-2xl font-bold mb-4 text-yellow-400 tracking-wide">LONGDRINKS / SHOTS</h3>
      <hr className="border-t border-gray-700 mb-4" />
      <ul className="space-y-4 text-lg">
        <li className="flex items-center border-b border-gray-700 pb-2 mb-2">
          <div className="flex justify-center items-center w-1/2">
            <span>Vodka Lemon</span>
          </div>
          <div className="flex justify-center items-center w-1/4">
            <span></span>
          </div>
          <div className="flex justify-center items-center w-1/4">
            <span className="font-semibold">4,00€</span>
          </div>
        </li>
        <li className="flex items-center border-b border-gray-700 pb-2 mb-2">
          <div className="flex justify-center items-center w-1/2">
            <span>Jacky Cola</span>
          </div>
          <div className="flex justify-center items-center w-1/4">
            <span></span>
          </div>
          <div className="flex justify-center items-center w-1/4">
            <span className="font-semibold">4,00€</span>
          </div>
        </li>
        <li className="flex items-center border-b border-gray-700 pb-2 mb-2">
          <div className="flex justify-center items-center w-1/2">
            <span>Gin Tonic</span>
          </div>
          <div className="flex justify-center items-center w-1/4">
            <span></span>
          </div>
          <div className="flex justify-center items-center w-1/4">
            <span className="font-semibold">4,00€</span>
          </div>
        </li>
        <li className="flex items-center border-b border-gray-700 pb-2 mb-2">
          <div className="flex justify-center items-center w-1/2">
            <span>Shots (2cl): Jägermeister, Vodka</span>
          </div>
          <div className="flex justify-center items-center w-1/4">
            <span></span>
          </div>
          <div className="flex justify-center items-center w-1/4">
            <span className="font-semibold">2,00€</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

// Bier Card
export function BierCard() {
  return (
    <div className="bg-gray-800 bg-opacity-50 border border-gray-700 p-6 rounded-lg shadow-md w-full">
      <h3 className="text-2xl font-bold mb-4 text-yellow-400 tracking-wide">BIER / WEIN</h3>
      <hr className="border-t border-gray-700 mb-4" />
      <ul className="space-y-4 text-lg">
        <li className="flex items-center border-b border-gray-700 pb-2 mb-2">
          <div className="flex justify-center items-center w-1/2">
            <span>Krombacher Pils</span>
          </div>
          <div className="flex justify-center items-center w-1/4">
            <span>(0,3l)</span>
          </div>
          <div className="flex justify-center items-center w-1/4">
            <span className="font-semibold">2,50€</span>
          </div>
        </li>
        <li className="flex items-center border-b border-gray-700 pb-2 mb-2">
          <div className="flex justify-center items-center w-1/2">
            <span>Heineken Bier</span>
          </div>
          <div className="flex justify-center items-center w-1/4">
            <span>(0,4l)</span>
          </div>
          <div className="flex justify-center items-center w-1/4">
            <span className="font-semibold">3,50€</span>
          </div>
        </li>
        <li className="flex items-center border-b border-gray-700 pb-2 mb-2">
          <div className="flex justify-center items-center w-1/2">
            <span>Radler</span>
          </div>
          <div className="flex justify-center items-center w-1/4">
            <span>(0,5l)</span>
          </div>
          <div className="flex justify-center items-center w-1/4">
            <span className="font-semibold">3,00€</span>
          </div>
        </li>
        <li className="flex items-center border-b border-gray-700 pb-2 mb-2">
          <div className="flex justify-center items-center w-1/2">
            <span>Weizen hell</span>
          </div>
          <div className="flex justify-center items-center w-1/4">
            <span></span>
          </div>
          <div className="flex justify-center items-center w-1/4">
            <span className="font-semibold">3,00€</span>
          </div>
        </li>
        <li className="flex items-center border-b border-gray-700 pb-2 mb-2">
          <div className="flex justify-center items-center w-1/2">
            <span>Wein Weiß/Rot</span>
          </div>
          <div className="flex justify-center items-center w-1/4">
            <span></span>
          </div>
          <div className="flex justify-center items-center w-1/4">
            <span className="font-semibold">3,00€</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
