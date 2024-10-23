import { Separator } from "../separator";

export function FindUs() {
  return (
    <div className="relative w-full max-w-3xl mx-auto justify-center py-4 bg-gray-800 bg-opacity-50 border border-gray-600 rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-2">Where to Find Us?</h1>
      <Separator />
      
      {/* Set the same max-width here */}
      <div className="relative w-full max-w-3xl mx-auto"> 
        <p className="text-lg text-center px-4 leading-tight">
          Swing by our cozy spot at <strong>Magdloser Str. 2</strong>,<br />
          in the heart of <strong>Flieden</strong>, where the drinks are cold and the vibes are warm!<br />
          (36103, just in case you’re using one of those fancy GPS gadgets!)
        </p>
        <p className="text-lg text-center px-4 leading-tight mt-4">
          If you can’t find us, just follow the sound of laughter and good times! 🍻🎉
        </p>
      </div>
    </div>
  );
}
