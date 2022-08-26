import React from "react";
import * as sc from "./Input.styles";

export interface InputProps {
  defaultValue?: any;
  name?: string;
  onChange?: any;
  placeholder?: string;
  inputType?: "text" | "checkbox" | "radio";
  color?: "purple" | "yellow" | "blue" | "green" | "pink" | "red" | "grey" | "black";
}

const Input = ({
  color,
  name,
  defaultValue,
  onChange,
  inputType,
  placeholder,
  ...moreProps
}: InputProps) => {
  const styleProps = {
    inputType,
    color,
  };

  const [inputValue, setInputValue] = React.useState(defaultValue);

  const handleValueChange = (event: any) => {
    setInputValue(inputType === "text" ? event.target.value : event.target.checked);
  };

  return (
    <sc.InputContainer>
      <sc.Input
        name={name}
        onChange={(event: any) => [onChange, handleValueChange(event)]}
        placeholder={placeholder}
        type={inputType}
        value={inputValue}
        {...styleProps}
        {...moreProps}
      />
      {inputType !== "text" ? (
        <sc.InputDropShadow color={color} type={inputType} />
      ) : null}
    </sc.InputContainer>
  );
};

const defaultProps = {
  name: "",
  defaultValue: "",
  onchange: () => {},
  placeholder: "",
  inputType: "text",
  color: "black",
};

Input.displayName = "Input";
Input.defaultProps = defaultProps;

export default Input;
