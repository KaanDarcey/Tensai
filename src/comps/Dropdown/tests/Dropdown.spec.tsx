import Dropdown, {DropdownProps} from "../Dropdown";
import {render, screen} from "@testing-library/react";

const makeSut = (props: Partial<DropdownProps>) => {
  return (
    <Dropdown
      label="label"
      items={[
        {name: "Item A", value: "itemA"},
        {name: "Item B", value: "itemB"},
      ]}
      {...props}
    />
  );
};

describe("<Dropdown />", () => {
  test("Should render label correctly", () => {
    render(makeSut({label: "My Dropdown"}));
    screen.getByText(/My Dropdown/);
  });
});
