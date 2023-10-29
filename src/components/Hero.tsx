"use client";
import React from "react";
import { PrimaryButton } from ".";
import Image from "next/image";

function Hero() {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex flex-col xl:flex-row items-center mx-auto px-2 xl:px-28 gap-8 xl:gap-0">
      <div className="w-full xl:w-1/2">
        <h1 className="text-3xl xl:text-5xl font-bold">
          Find, book, or rent a car - quickly and easily!
        </h1>
        <p className="mt-4 text-xl">
          Streamline your car rental experience with our effortless booking
          process
        </p>
        <PrimaryButton
          btnType="button"
          title="Explore Cars"
          handleClick={handleScroll}
        />
      </div>
      <div className="w-full xl:w-1/2 relative">
        <img src="hero.png" className="w-full object-cover" />
        <img
          src="hero-bg.png"
          className="absolute bottom-0 right-0 -z-10 w-[94%]"
        />
        {/* <Image src="/hero.png" alt="hero" fill className="object-contain" /> */}
      </div>
    </div>
  );
}

export default Hero;
