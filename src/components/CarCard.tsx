"use client";
import { useState } from "react";
import Image from "next/image";
import { CarProps } from "../../types";
import { calculateCarRent, generateCarImageUrl } from "../../utils";
import { CarDetails, PrimaryButton } from ".";

interface CarCardProps {
  car: CarProps;
}

export default function CarCard({ car }: CarCardProps) {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const carRent = calculateCarRent(city_mpg, year);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="px-4 py-4 bg-gray-100 shadow rounded-lg group">
      <div>
        <div>
          <h2 className="font-bold capitalize">
            {make} {model}
          </h2>
          <p className="flex mt-6 text-[32px]">
            <span className="self-start text-[14px]">$</span>
            {carRent}
            <span className="self-end text-[14px]">/day</span>
          </p>
        </div>
        <div className="relative w-full h-40 my-3 object-contain">
          <Image
            src={generateCarImageUrl(car)}
            fill
            priority
            className="object-contain"
            alt="car-image"
          />
        </div>
        <div className="relative flex w-full mt-2">
          <div className="flex group-hover:invisible w-full justify-between text-gray-500">
            <div className="flex flex-col justify-center items-center gap-2">
              <Image
                src="/steering-wheel.svg"
                width={20}
                height={20}
                alt="steering wheel"
              />
              <p className="text-[12px]">
                {transmission === "a" ? "Automatic" : "Manual"}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <Image src="/tire.svg" width={20} height={20} alt="tire" />
              <p className="text-[12px]">{drive.toUpperCase()}</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <Image src="/gas.svg" width={20} height={20} alt="gas" />
              <p className="text-[12px]">{city_mpg} MPG</p>
            </div>
          </div>

          <div className="invisible group-hover:visible w-full absolute ">
            <PrimaryButton
              title="View More"
              containerStyles="w-full"
              rightIcon="/right-arrow.svg"
              handleClick={() => setIsOpen(true)}
            />
          </div>
        </div>
      </div>

      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
}
