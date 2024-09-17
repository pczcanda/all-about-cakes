import { render, screen } from "@testing-library/react";
import { Cake } from "../../types";
import CakeSummary from "./CakeSummary";

describe("<CakeSummary /> component", () => {
  test("renders the cake name", () => {
    const cake: Cake = {
      id: 1,
      name: "Cake name",
      comment: "Nice cake",
      imageUrl: "imageUrl",
      yumFactor: 3,
    };

    render(<CakeSummary cake={cake} />);

    const cakeName = screen.getByText(cake.name);

    expect(cakeName).toBeInTheDocument();
  });

  test(`renders the cake's image`, () => {
    const cake: Cake = {
      id: 1,
      name: "Cake name",
      comment: "Nice cake",
      imageUrl: "imageUrl",
      yumFactor: 3,
    };

    render(<CakeSummary cake={cake} />);

    const cakeImage = screen.getByRole("img");
    expect(cakeImage).toHaveAttribute("src", cake.imageUrl);
  });
});
