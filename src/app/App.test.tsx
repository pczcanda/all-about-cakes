import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { BaseCake } from "../types";

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

  test("submits new cake form and closes dialog", async () => {
    const newCake: BaseCake = {
      name: "Madeira cake",
      comment: "This is a decent cake",
      yumFactor: 4,
    };

    render(<App />);

    const nameField = screen.getByLabelText("Cake name");
    const commentField = screen.getByLabelText("Comment");
    const yumFactorField = screen.getByLabelText("Yum factor");
    const submitButton = screen.getByRole("button");

    fireEvent.change(nameField, { target: { value: newCake.name } });
    fireEvent.change(commentField, { target: { value: newCake.comment } });
    fireEvent.change(yumFactorField, { target: { value: newCake.yumFactor } });

    userEvent.click(submitButton);

    await waitFor(() => {
      const dialogTitle = screen.getByText("New Cake");
      expect(dialogTitle).not.toBeInTheDocument();
    });
  });
});
