import { render } from "@testing-library/react";
import { CarCard } from "@/components";

describe("Render CarDetails", () => {
  it("should render card object properties", () => {
    const mockCar = {
      city_mpg: 1,
      class: "class",
      combination_mpg: 2,
      cylinders: 3,
      displacement: 4,
      drive: "drive",
      fuel_type: "a",
      highway_mpg: 5,
      make: "make",
      model: "model",
      transmission: "a",
      year: 2000,
    };

    const { getByText } = render(<CarCard car={mockCar} />);
    const makeProperty = getByText(`${mockCar.make} ${mockCar.model}`);
    expect(makeProperty).toBeInTheDocument();
    const cityMpgProperty = getByText(`${mockCar.city_mpg} MPG`);
    expect(cityMpgProperty).toBeInTheDocument();
    const transmissionProperty = getByText(`Automatic`);
    expect(transmissionProperty).toBeInTheDocument();
  });
});
