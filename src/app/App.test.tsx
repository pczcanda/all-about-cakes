import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

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

  test("allows user to enter details for a new cake", () => {
    render(<App />);

    const newCakeButton = screen.getByText("Add cake");

    expect(newCakeButton).toBeInTheDocument;
  });

  test("displays dialog for adding new cake after clicking the 'Add cake' button", async () => {
    render(<App />);

    const newCakeButton = screen.getByText("Add cake");
    userEvent.click(newCakeButton);

    await waitFor(() => {
      const dialogTitle = screen.getByText("New Cake");
      expect(dialogTitle).toBeInTheDocument();
    });
  });
});
