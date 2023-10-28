"use client";
import React from "react";
import { PrimaryButtonProps } from "../../types";
import Image from "next/image";

export default function PrimaryButton({
  title,
  handleClick,
  btnType,
  isDisabled,
  containerStyles,
  rightIcon,
}: PrimaryButtonProps) {
  return (
    <button
      type={btnType || "button"}
      disabled={isDisabled || false}
      onClick={handleClick}
      className={`flex bg-blue-600 text-white rounded-full px-6 py-2 my-4 ${containerStyles}`}
    >
      <span className={`flex-1`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image src={rightIcon} alt="icon" className="object-contain" fill />
        </div>
      )}
    </button>
  );
}
