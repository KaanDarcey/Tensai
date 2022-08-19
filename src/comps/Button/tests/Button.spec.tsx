import React from "react";
import Button, {ButtonProps} from "../Button";
import {fireEvent, render, screen} from "@testing-library/react";

const makeSut = (props: Partial<ButtonProps>) => {
  return <Button label="label" onClick={jest.fn()} {...props} />;
};

describe("<Button />", () => {
  test("Should render label correctly", () => {
    render(makeSut({label: "My Button"}));
    screen.getByText(/My Button/);
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
