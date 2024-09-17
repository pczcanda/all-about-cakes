import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BaseCake } from "../../types";
import NewCakeForm from "./NewCakeForm";
import userEvent from "@testing-library/user-event";

describe("<NewCakeForm /> component", () => {
  test("displays form fields", () => {
    render(<NewCakeForm onSubmit={() => {}} />);

    const nameField = screen.getByLabelText("Cake name");
    const commentField = screen.getByLabelText("Comment");
    const yumFactorField = screen.getByLabelText("Yum factor");

    expect(nameField).toBeInTheDocument();
    expect(commentField).toBeInTheDocument();
    expect(yumFactorField).toBeInTheDocument();
  });

  test("shows the submit button as disabled until the form is valid", () => {
    render(<NewCakeForm onSubmit={() => {}} />);

    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeDisabled();
  });

  test("allows the submission of a valid form by enabling the submit button and passing the data through", () => {
    const newCake: BaseCake = {
      name: "Madeira cake",
      comment: "This is a decent cake",
      yumFactor: 4,
    };

    const submitFn = jest.fn();

    render(<NewCakeForm onSubmit={submitFn} />);

    const nameField = screen.getByLabelText("Cake name");
    const commentField = screen.getByLabelText("Comment");
    const yumFactorField = screen.getByLabelText("Yum factor");
    const submitButton = screen.getByRole("button");

    fireEvent.change(nameField, { target: { value: newCake.name } });
    fireEvent.change(commentField, { target: { value: newCake.comment } });
    fireEvent.change(yumFactorField, { target: { value: newCake.yumFactor } });

    expect(nameField).toHaveValue(newCake.name);
    expect(commentField).toHaveValue(newCake.comment);
    expect(yumFactorField).toHaveValue(newCake.yumFactor.toString());

    expect(submitButton).not.toBeDisabled();

    userEvent.click(submitButton);

    waitFor(() => {
      expect(submitFn).toHaveBeenCalledTimes(1);
      expect(submitFn).toHaveBeenCalledWith(newCake);
    });
  });
});
