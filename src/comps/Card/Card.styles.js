import styled, {css} from "styled-components";
import styles from "../../styles/styles.js";

// Sizes
const sizeStyles = {
  auto: css`
    height: auto;
    width: 100%;
  `,
  small: css`
    height: auto;
    max-width: 100%;
  `,
  medium: css`
    height: 3rem;
    max-width: 100%;
  `,
  large: css`
    height: 8.5rem;
    max-width: 100%;
  `,
};

export const Card = styled.div(
  ({size}) => css`
    background-color: ${styles.colors.colorWhite};
    border: 1px solid ${styles.colorBlack};
    border-radius: ${styles.borderRadius};
    box-sizing: border-box;
    box-shadow: 3px 3px ${styles.colors.colorBlack};
    overflow: hidden;
    padding: 2rem 1rem;
    ${sizeStyles[size]};
  `
);
