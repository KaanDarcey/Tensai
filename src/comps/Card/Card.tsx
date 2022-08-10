import React from "react";
import * as sc from "./Card.styles";

export interface CardProps {
  children?: React.ReactNode;
  size?: string;
}

const Card = ({children, size, ...moreProps}: CardProps) => {
  const styleProps = {
    size,
  };

  return (
    <sc.Card {...styleProps} {...moreProps}>
      {children}
    </sc.Card>
  );
};

const defaultProps = {
  size: "auto",
};

Card.displayName = "Card";
Card.defaultProps = defaultProps;

export default Card;
