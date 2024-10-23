import Image from 'next/image';
import './footer.css'; // Import the CSS file
import { Separator } from './separator';

export function Footer() {
  return (
    <div>
      <Separator /> {/* First Separator */}
      <div className="text-center flex flex-col items-center">
        <div className="flex justify-center">
          <div className="image-container">
            <Image
              src="/merkur_freude_am_spiel_quer_negativ.png"
              alt="Stepo's Logo"
              layout="fill" // Make the image fill the container
              objectFit="contain" // Maintain aspect ratio
            />
          </div>
          <div className="image-container">
            <Image
              src="/Novoline_Website.png"
              alt="Stepo's Logo"
              layout="fill" // Make the image fill the container
              objectFit="contain" // Maintain aspect ratio
            />
          </div>
        </div>
        <p className="copyright closer">
        <a href="#license" className="copyright-link">© Copyright 2024</a>
        </p>
        <p className="author closer">
          <a href="https://github.com/malkmusl" target="_blank" rel="noopener noreferrer" className="copyright-link">
            malkmusl (Lucas Malkmus)
          </a>
        </p>
      </div>
    </div>
  );
}
