import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import Image from "next/image";
import { fetchCars } from "../../utils";

export default async function Home() {
  const allCars = await fetchCars();

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="pt-32">
      <Hero />

      <div className="px-2 xl:px-28 my-24">
        <div>
          <h2 className="text-2xl font-bold">Car Catalogue</h2>
          <p>Explore the cars you might like</p>
        </div>

        <div className="flex flex-col xl:flex-row items-start lg:items-end justify-between my-4">
          <SearchBar />
          <div className="flex flex-row">
            <CustomFilter />
            <CustomFilter />
          </div>
        </div>

        {!isDataEmpty ? (
          <section className="mt-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-2 lg:gap-4">
              {allCars?.map((car) => (
                <CarCard key={car} car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div>
            <h2>No data to show</h2>
          </div>
        )}
      </div>
    </main>
  );
}
