import React from "react";
import Button, {ButtonProps} from "../Button";
import {fireEvent, render, screen} from "@testing-library/react";

const makeSut = (props: Partial<ButtonProps>) => {
  return <Button label="label" onClick={jest.fn()} {...props} />;
};

describe("<Button />", () => {
  test("Should render label correctly", () => {
    // const {getByText} = makeSut({label: "My Button"});
    render(makeSut({label: "My Button"}));
    screen.getByText(/My Button/);
    // expect(button).toBeTruthy()
    // expect(getByText(/My Button/)).toBeInTheDocument();
  });

  test("Should call onClick successfully", () => {
    const spy = jest.fn();

    render(makeSut({onClick: spy}));

    fireEvent.click(screen.getByText(/label/));

    expect(spy).toHaveBeenCalled();
  });

  test("Should render children correctly", () => {
    render(makeSut({children: "children"}));
    screen.getByText(/children/);
  });
});
