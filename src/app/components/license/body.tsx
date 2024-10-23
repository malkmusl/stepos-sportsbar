"use client";

import LicenseAgreement from "./LicenseAgreement";

export function Body() {
  return (
    <main className="flex flex-col gap-8 w-full max-w-3xl mt-10 row-start-2 items-center sm:items-center relative">
      <LicenseAgreement />
    </main>
  );
}
