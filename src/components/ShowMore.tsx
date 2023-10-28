"use client";
import { useRouter } from "next/navigation";
import { ShowMoreProps } from "../../types";
import { PrimaryButton } from ".";
import { updateSearchParams } from "../../utils";

export default function ShowMore({ pageNumber, isNext }: ShowMoreProps) {
  const router = useRouter();
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams("limit", `${newLimit}`);
    router.push(newPathName, { scroll: false });
  };
  return (
    <div className="w-full flex justify-center gap-5 my-10">
      {!isNext && (
        <PrimaryButton
          title="Show More"
          btnType="button"
          containerStyles=""
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
}
