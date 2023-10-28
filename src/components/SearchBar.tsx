"use client";
import { useState } from "react";

import { SearchManufacturer } from ".";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
  return (
    <button type="submit" className={`${otherClasses}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="search"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
};

export default function SearchBar() {
  const router = useRouter();
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacturer === "" && model === "") {
      return alert("Please fill the filters");
    }

    updateSearchParams(
      model.toLocaleLowerCase(),
      manufacturer.toLocaleLowerCase()
    );
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }
    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathName);
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="flex flex-row">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden flex-shrink-0" />
      </div>
      <div className="mt-4 flex flex-row">
        <div className="border-gray-300 border-2 rounded-lg relative shadow-sm">
          <Image
            src="/model-icon.png"
            width={25}
            height={25}
            className="absolute ml-2 top-1/2 -translate-y-1/2"
            alt="car model"
          />
          <input
            type="text"
            name="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="Tiguan"
            className="w-full border-0 rounded-lg px-10"
          />
        </div>
        <SearchButton otherClasses="sm:hidden flex-shrink-0" />
      </div>
    </form>
  );
}
