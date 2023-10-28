import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PrimaryButton } from ".";

export default function MainHeader() {
  return (
    <header className="absolute z-10 w-full py-4 px-2 lg:px-28 flex flex-row justify-between items-center">
      <div>
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            width={140}
            height={18}
            className="object-contain"
          />
        </Link>
      </div>
      <div>
        <PrimaryButton
          title="Sign In"
          btnType="button"
          containerStyles="shadow-md"
        />
      </div>
    </header>
  );
}
