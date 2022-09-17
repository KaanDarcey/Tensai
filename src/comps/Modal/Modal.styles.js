import styled, {css, keyframes} from "styled-components";
import styles from "../../styles/styles.js";

const fadeInAnimation = keyframes`
    0% {background: none;}
    100% {background: rgba(0, 0, 0, 0.5);}
`;

const scaleAnimation = keyframes`
    0% {transform: scale(0);}
    100% {transform: scale(1);}
`;

const headerStyles = {
  green: css`
    background-color: ${styles.colors.colorGreenLight};
  `,
  red: css`
    background-color: ${styles.colors.colorRedLight};
  `,
  yellow: css`
    background-color: ${styles.colors.colorYellowLight};
  `,
};

export const Backdrop = styled.div(
  ({isVisible}) => css`
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 0;
    visibility: ${isVisible ? "visible" : "hidden"};
    width: 100vw;

    animation: ${isVisible ? fadeInAnimation : ""};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  `
);

export const Header = styled.div(
  ({color}) => css`
    align-items: center;
    border-bottom: ${styles.border};
    display: flex;
    font-size: 1.2em;
    font-weight: bold;
    height: 1rem;
    padding: 1rem;

    ${headerStyles[color]}
  `
);

export const Body = styled.div`
  font-size: 0.9em;
  padding: 1rem;
`;

export const Modal = styled.div(
  ({isVisible}) => css`
    background-color: #edece8;
    border: 1px solid ${styles.colorBlack};
    box-sizing: border-box;
    height: auto;
    position: absolute;
    width: 17rem;
    z-index: 999;

    animation: ${isVisible ? scaleAnimation : ""};
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
  `
);
