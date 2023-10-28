import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import Image from "next/image";
import { fetchCars } from "../../utils";
import { fuels, yearsOfProduction } from "@/constants";
import { HomeProps } from "../../types";
export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "toyota",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

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
          <div className="flex flex-row mt-4 gap-4">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section className="mt-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-2 lg:gap-4">
              {allCars?.map((car) => (
                <CarCard key={car} car={car} />
              ))}
            </div>
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
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
