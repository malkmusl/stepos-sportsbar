import { Separator } from '../separator';
import { SoftgetraenkeCard, HeissgetraenkeCard, LongdrinksCard, BierCard } from './MenuCards';

export function Menu() {
  return (
    <div className="bg-gray-800 bg-opacity-50 mt-8 border border-gray-700 rounded-lg">
      <div className="max-w-full mx-auto text-white rounded-lg shadow-md w-full">
        {/* Menu Header */}
        <div className="text-center mb-4 mt-4">
          <h1 className="text-5xl font-bold tracking-wide">MENU</h1>
          <h2 className="text-lg tracking-widest">DRINKS</h2>
        </div>
        {/* Use full={false} for a non-full width separator */}
        <Separator full={false} />
        <div className="p-4">
          {/* Responsive Grid for Menu Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 w-full">
            <SoftgetraenkeCard />
            <HeissgetraenkeCard />
            <LongdrinksCard />
            <BierCard />
          </div>

          {/* Footer */}
          <div className="bg-gray-400 bg-opacity-80 rounded-lg p-4 text-lm text-red-700 text-center font-bold">
            <p>Alle Preise inkl. MwSt.</p>
            <p>Alkohol wird nur an Personen über 18 Jahren ausgeschenkt.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
