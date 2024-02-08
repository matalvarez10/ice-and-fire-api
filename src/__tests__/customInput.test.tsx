import { render, screen } from "@testing-library/react";
import CustomInputComponent from "../components/customInputComponent";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { ICustomInputComponentProps } from "../components/customInputComponent";
describe("CustomInputComponent", () => {
  const mockProps: ICustomInputComponentProps = {
    labelText: "Your Name",
    type: "text",
    name: "username",
    value: "Nombre Apellido",
    onChange: jest.fn(),
  };

  it("Muestra el parametro label", () => {
    render(
      <MemoryRouter>
        <CustomInputComponent {...mockProps} />
      </MemoryRouter>
    );

    const label = screen.getByText(mockProps.labelText);
    expect(label).toBeInTheDocument();

    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(mockProps.value);
    expect(input).toHaveAttribute("type", mockProps.type);
    expect(input).toHaveAttribute("name", mockProps.name);
  });


  it("Muestra correctamente el plaholder", () => {
    const placeholderText = "Enter your username";
    render(
      <MemoryRouter>
        <CustomInputComponent {...mockProps} placeholder={placeholderText} />
      </MemoryRouter>
    );

    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("placeholder", placeholderText);
  });

  it("Funciona correctamente el required", () => {
    render(
      <MemoryRouter>
        <CustomInputComponent {...mockProps} required />
      </MemoryRouter>
    );

    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("required");
  });
});
