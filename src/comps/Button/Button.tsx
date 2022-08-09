import React from "react";
import * as sc from "./Button.styles";

export interface ButtonProps {
  children?: React.ReactNode;
  isRound?: boolean;
  isSubmit?: boolean;
  label?: string;
  onClick: any;
  size?: string;
  kind?: string;
}

const Button = ({
  children,
  isRound,
  isSubmit,
  label,
  onClick,
  size,
  kind,
  ...moreProps
}: ButtonProps) => {
  const styleProps = {
    size,
    kind,
    isRound,
  };

  return (
    <sc.Button type={isSubmit ? "submit" : "button"} onClick={onClick} {...styleProps} {...moreProps}>
      {label}
      {children}
    </sc.Button>
  );
};

const defaultProps = {
  label: "",
  size: "auto",
  kind: "primary",
  isRound: false,
  isSubmit: false,
  onClick: () => {}
};

Button.displayName = "Button";
Button.defaultProps = defaultProps;

export default Button;
