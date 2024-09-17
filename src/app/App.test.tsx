import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Cakes List", () => {
  test("renders list of cakes", async () => {
    window.fetch = jest.fn();
    (window.fetch as any).mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });

    render(<App />);

    const listItems = await screen.findAllByRole("listitem");

    expect(listItems).not.toHaveLength(0);
  });
});
