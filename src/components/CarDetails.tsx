"use client";
import { Fragment } from "react";
import { CarDetailsProps } from "../../types";
import { Transition, Dialog } from "@headlessui/react";
import Image from "next/image";
import { generateCarImageUrl } from "../../utils";

export default function CarDetails({
  isOpen,
  car,
  closeModal,
}: CarDetailsProps) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 " />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-white rounded-full"
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>
                  <div className="flex-1 flex flex-col gap-3">
                    <div className="relative w-full h-40 bg-[url('/pattern.png')] bg-cover bg-center rounded-lg">
                      <Image
                        src={generateCarImageUrl(car)}
                        fill
                        priority
                        className="object-contain"
                        alt="car-image"
                      />
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-1 relative w-full h-24 bg-white rounded-lg">
                        <Image
                          src={generateCarImageUrl(car, "29")}
                          fill
                          priority
                          className="object-contain"
                          alt="car-image"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-white rounded-lg">
                        <Image
                          src={generateCarImageUrl(car, "33")}
                          fill
                          priority
                          className="object-contain"
                          alt="car-image"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-white rounded-lg">
                        <Image
                          src={generateCarImageUrl(car, "13")}
                          fill
                          priority
                          className="object-contain"
                          alt="car-image"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="font-semibold text-xl capitalize">
                      {car.make} {car.model} - Details:
                    </h2>
                    <div className="mt-3 flex flex-wrap gap-4">
                      {Object.entries(car).map(([key, value]) => (
                        <div
                          className="flex justify-between gap-5 w-full text-right"
                          key={key}
                        >
                          <h4 className="text-gray-500 capitalize">
                            {key.split("_").join(" ")}
                          </h4>
                          <p className="font-semibold capitalize">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
