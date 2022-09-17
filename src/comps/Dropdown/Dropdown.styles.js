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

export const Dropdown = styled.div`
  position: relative;
  width: 100%;
`;

export const DropdownHeader = styled.button(
  ({isActive}) => css`
    align-items: center;
    background: ${styles.colors.colorWhite};
    border: 1px solid ${styles.colorBlack};
    border-radius: ${styles.borderRadius};
    box-sizing: border-box;
    box-shadow: 3px 3px ${styles.colors.colorBlack};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow: hidden;
    padding: ${styles.padding};
    position: relative;
    width: 100%;

    ${isActive ? activeStyle : ""}

    &:focus,
    &:active {
      ${activeStyle}
    }

    ${hoverAnimate}
  `
);

export const DropdownList = styled.div(
  ({isVisible}) => css`
    display: ${isVisible ? "block" : "none"};
    background: ${styles.colors.colorWhite};
    border: 1px solid ${styles.colorBlack};
    border-radius: ${styles.borderRadius};
    box-sizing: border-box;
    box-shadow: 3px 3px ${styles.colors.colorBlack};
    top: 100%;
    left: 0;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 100%;
    z-index: 999;
    transform: translate(3px, 3px);
    box-shadow: none;
  `
);

export const DropdownListItem = styled.button`
  background: ${styles.colors.colorWhite};
  border: none;
  border-bottom: 1px solid ${styles.colorBlack};
  box-sizing: border-box;
  overflow: hidden;
  text-align: left;
  width: 100%;
  padding: ${styles.padding};

  &:last-child {
    border-bottom: 0;
  }

  &:hover,
  &:focus {
    background: ${styles.colors.colorBlueLight};
    color: ${styles.colors.colorWhite};
    font-weight: bold;
  }
`;
