import styled, {css} from "styled-components";
import styles from "../../styles/styles.js";

// Sizes
const width = "17rem";
const sizeStyles = {
  auto: css`
    height: auto;
    width: auto;
  `,
  small: css`
    height: auto;
    max-width: ${width};
  `,
  medium: css`
    height: 3rem;
    max-width: ${width};
  `,
  large: css`
    height: 8.5rem;
    max-width: ${width};
  `,
};

export const Card = styled.div(
  ({size}) => css`
    border: 1px solid ${styles.colorBlack};
    border-radius: ${styles.borderRadius};
    box-sizing: border-box;
    box-shadow: 3px 3px ${styles.colors.colorBlack};
    font-family: "VT323", monospace;
    overflow: hidden;
    padding: ${styles.padding};
    ${sizeStyles[size]};
  `
);
