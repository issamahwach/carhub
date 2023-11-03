import { CarCard, CarDetails } from "@/components";
import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from "@testing-library/react";

describe("Car Details", () => {
  it("should open the CarDetails on clicking the button", async () => {
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
    render(<CarCard car={mockCar} />);
    const openButton = screen.getByText("View More");
    act(() => fireEvent.click(openButton));

    await waitFor(() => {
      const dialog = screen.getByText(
        `${mockCar.make} ${mockCar.model} - Details:`
      );
      expect(dialog).toBeInTheDocument();
    });
  });
});
