import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders main heading", async () => {
    render(<App />);

    const heading = await screen.getByText("All about cakes");

    expect(heading).toBeInTheDocument();
  });
});
