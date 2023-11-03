import { fireEvent, render, screen } from "@testing-library/react";
import { Hero } from "@/components";

describe("Hero", () => {
  it("should have headline", () => {
    render(<Hero />);
    const myElem = screen.getByText(
      "Find, book, or rent a car - quickly and easily!"
    );
    expect(myElem).toBeInTheDocument();
  });
});
