import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Cakes List", () => {
  test("renders list of cakes", async () => {
    window.fetch = jest.fn();
    (window.fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => [
        {
          id: 1,
          name: "Carrot cake",
          comment: "The one and only",
          imageUrl: "imageUrl",
          yumFactor: 5,
        },
      ],
    });

    render(<App />);

    const listItems = await screen.findAllByRole("listitem");

    expect(listItems).not.toHaveLength(0);
  });
});
