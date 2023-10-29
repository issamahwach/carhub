import React from "react";
import Image from "next/image";

export default function MainFooter() {
  return (
    <div className="flex flex-row justify-center py-8 px-4 bg-gray-50">
      <Image
        src="/logo.svg"
        alt="logo"
        width={140}
        height={18}
        className="object-contain"
      />
    </div>
  );
}
