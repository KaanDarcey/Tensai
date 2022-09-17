import styled, {css} from "styled-components";
import styles from "../../styles/styles.js";

const typeStyles = {
  text: css``,
  checkbox: css`
    height: 2rem;
    width: 2rem;
  `,
  radio: css`
    height: 2rem;
    width: 2rem;
  `,
};

const colorStyles = {
  black: css`
    background: ${styles.colors.colorBlack};
  `,
  blue: css`
    background: ${styles.colors.colorBlueLight};
  `,
  green: css`
    background: ${styles.colors.colorGreenLight};
  `,
  grey: css`
    background: ${styles.colors.colorGreyLight};
  `,
  pink: css`
    background: ${styles.colors.colorPinkLight};
  `,
  purple: css`
    background: ${styles.colors.colorPurple};
  `,
  red: css`
    background: ${styles.colors.colorRedLight};
  `,
  yellow: css`
    background: ${styles.colors.colorYellowLight};
  `,
};

export const InputContainer = styled.div`
  display: inline-block;
  position: relative;
  width: auto;
`;

export const InputDropShadow = styled.div(
  ({type, color}) => css`
    border-radius: ${type === "radio" ? "1rem" : "0"};
    height: 2rem;
    left: 3px;
    position: absolute;
    top: 3px;
    width: 2rem;
    z-index: 1;

    ${colorStyles[color]}
  `
);

export const Input = styled.input(
  ({type}) => css`
    border: 1px solid ${styles.colorBlack};
    border-radius: ${styles.borderRadius};
    box-sizing: border-box;
    left: 0;
    margin: 0;
    padding: ${styles.padding};
    position: relative;
    top: 0;
    z-index: 99;

    ${type === "text" ? `box-shadow: 3px 3px ${styles.colors.colorBlack}` : ""};
    ${typeStyles[type]};
  `
);
