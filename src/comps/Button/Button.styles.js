import styled, {css, keyframes} from "styled-components";
import styles from "../../styles/styles.js";

// Animations

const clickAnimation = keyframes`
    0% {transform: translate(0,0);}
    100% {transform: translate(3px, 3px); box-shadow: none;}
`;

const hoverAnimate = css`
  &:hover {
    animation: ${clickAnimation};
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
  }
`;

// Focus / Active

const activeStyle = css`
  animation: ${clickAnimation};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  outline: none;
  border: 1px solid rgb(0, 0, 0);
`;

const activeStyleLink = css`
  outline: none;
  border: 1px solid rgb(0, 0, 0);
`;

// Sizes

const sizeStyles = {
  auto: css`
    height: auto;
    width: fit-content;
  `,
  small: css`
    height: 1rem;
    width: 1rem;
  `,
  medium: css`
    height: 2rem;
    width: 6rem;
  `,
  large: css`
    height: 2rem;
    width: 8rem;
  `,
};

// Kinds

const kindStyles = {
  primary: css`
    background-color: ${styles.colors.colorBlueLight};
    border: 1px solid ${styles.colors.colorBlueLight};
    box-shadow: 3px 3px ${styles.colors.colorBlueDark};
    color: ${styles.colors.colorWhite};
    font-weight: bold;
    ${hoverAnimate}

    &:focus,
    &:active {
      ${activeStyle}
    }
  `,
  secondary: css`
    background-color: ${styles.colors.colorBackground};
    border: 1px solid ${styles.colors.colorBackground};
    box-shadow: 3px 3px ${styles.colors.colorBlack};
    color: ${styles.colors.colorBlack};
    font-weight: bold;
    ${hoverAnimate}

    &:focus,
    &:active {
      ${activeStyle}
    }
  `,
  action: css`
    background-color: ${styles.colors.colorPinkLight};
    border: 1px solid ${styles.colors.colorPinkLight};
    box-shadow: 3px 3px ${styles.colors.colorPinkDark};
    color: ${styles.colors.colorWhite};
    font-weight: bold;
    ${hoverAnimate}

    &:focus,
    &:active {
      ${activeStyle}
    }
  `,
  success: css`
    background-color: ${styles.colors.colorGreenLight};
    border: 1px solid ${styles.colors.colorGreenLight};
    box-shadow: 3px 3px ${styles.colors.colorGreenDark};
    color: ${styles.colors.colorBlack};
    font-weight: bold;
    ${hoverAnimate}

    &:focus,
    &:active {
      ${activeStyle}
    }
  `,
  warning: css`
    background-color: ${styles.colors.colorYellowLight};
    border: 1px solid ${styles.colors.colorYellowLight};
    box-shadow: 3px 3px ${styles.colors.colorYellowDark};
    color: ${styles.colors.colorBlack};
    font-weight: bold;
    ${hoverAnimate}

    &:focus,
    &:active {
      ${activeStyle}
    }
  `,
  danger: css`
    background-color: ${styles.colors.colorRedLight};
    border: 1px solid ${styles.colors.colorRedLight};
    box-shadow: 3px 3px ${styles.colors.colorRedDark};
    color: ${styles.colors.colorWhite};
    font-weight: bold;
    ${hoverAnimate}

    &:focus,
    &:active {
      ${activeStyle}
    }
  `,
  close: css`
    background-color: ${styles.colors.colorWhite};
    border: 1px solid ${styles.colors.colorWhite};
    box-shadow: 3px 3px ${styles.colors.colorBlack};
    color: ${styles.colors.colorBlack};
    font-weight: bold;
    ${hoverAnimate}

    &:focus,
    &:active {
      ${activeStyle}
    }
  `,
  link: css`
    background: none;
    border: none;
    color: ${styles.colors.colorPinkLight};
    font-weight: bold;
    padding: 0;

    &:hover {
      color: ${styles.colors.colorPinkDark};
    }

    &:focus,
    &:active {
      ${activeStyleLink}
    }
  `,
};

const roundStyle = css`
  border-radius: 50%;
  max-width: 2rem;
  max-height: 2rem;
`;

export const Button = styled.button(
  ({size, kind, isRound}) => css`
    border-radius: ${styles.borderRadius};
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "VT323", monospace;
    padding: ${styles.padding};
    position: relative;
    text-align: center;
    ${sizeStyles[size]};
    ${kindStyles[kind]};
    ${isRound ? roundStyle : ""};
  `
);
