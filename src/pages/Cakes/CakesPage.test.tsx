import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BaseCake } from "../../types";
import CakesPage from "./CakesPage";
import { BrowserRouter } from "react-router-dom";

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

    render(<CakesPage />, { wrapper: BrowserRouter });

    const listItems = await screen.findAllByRole("listitem");

    expect(listItems).not.toHaveLength(0);
  });

  test("allows user to enter details for a new cake", () => {
    render(<CakesPage />, { wrapper: BrowserRouter });

    const newCakeButton = screen.getByText("Add cake");

    expect(newCakeButton).toBeInTheDocument;
  });

  test("displays dialog for adding new cake after clicking the 'Add cake' button", async () => {
    render(<CakesPage />, { wrapper: BrowserRouter });

    const newCakeButton = screen.getByText("Add cake");
    userEvent.click(newCakeButton);

    await waitFor(() => {
      const dialogTitle = screen.getByText("New Cake");
      expect(dialogTitle).toBeInTheDocument();
    });
  });

  test("can select a cake and go to page", async () => {
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

    render(<CakesPage />, { wrapper: BrowserRouter });

    const listItems = await screen.findAllByRole("link");

    expect(listItems[0]).toHaveAttribute("href", "/cakes/1");

    userEvent.click(listItems[0]);

    waitFor(() => {
      expect(
        screen.getByText("Carrot cake", { selector: "h2" })
      ).toBeInTheDocument();
    });
  });
});
