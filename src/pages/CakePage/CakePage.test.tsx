import { render, screen, waitFor } from "@testing-library/react";
import { Cake } from "../../types";
import CakePage from "./CakePage";

describe("Cake Page", () => {
  test("renders cake comment", async () => {
    const cake: Cake = {
      id: 1,
      name: "Carrot cake",
      comment: "The one and only",
      imageUrl: "imageUrl",
      yumFactor: 5,
    };

    window.fetch = jest.fn();
    (window.fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => cake,
    });

    render(<CakePage />);

    waitFor(() => {
      const comment = screen.getByText(cake.comment);

      expect(comment).toBeInTheDocument();
    });
  });
});
