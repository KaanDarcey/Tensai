import Progressbar, {ProgressbarProps} from "../Progressbar";
import {render, screen} from "@testing-library/react";

const makeSut = (props: Partial<ProgressbarProps>) => {
  return <Progressbar total={100} {...props} />;
};

describe("<Progressbar />", () => {
  test("Should render count correctly", () => {
    render(makeSut({current: 10}));
    screen.getByText("10/100");
  });
});
