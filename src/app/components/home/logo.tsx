import Image from 'next/image';

export function Logo() {
  return (
    <div className="text-center">
      <Image
        src="/Stepo’s_page-0002.png"
        alt="Stepo's Logo"
        width={150}  // Set your desired width
        height={100} // Set your desired height
      />
    </div>
  );
}
