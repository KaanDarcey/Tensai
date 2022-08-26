import Input, {InputProps} from "../Input";
import {render, screen} from "@testing-library/react";

const makeSut = (props: Partial<InputProps>) => {
  return <Input onChange={jest.fn()} {...props} />;
};

describe("<Input />", () => {
  test("Should render Input correctly", () => {
    render(makeSut({defaultValue: "My Input"}));
    expect(screen.getByDisplayValue(/My Input/)).toBeInTheDocument();
  });
});
