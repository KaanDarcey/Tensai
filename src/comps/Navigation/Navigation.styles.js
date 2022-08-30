import styled, {css} from "styled-components";
import styles from "../../styles/styles.js";

const colorStyles = {
  pink: css`
    background-color: ${styles.colors.colorPinkLight};
  `,
  green: css`
    background-color: ${styles.colors.colorGreenLight};
  `,
  yellow: css`
    background-color: ${styles.colors.colorYellowLight};
  `,
};

export const Label = styled.p`
  margin: 0;
  padding-top: 0.5rem;
`;

export const Item = styled.li(
  ({color, count, isActive}) => css`
    align-items: center;
    border-right: ${styles.border};
    display: flex;
    flex-direction: column;
    font-weight: bold;
    justify-content: center;
    height: 100%;
    width: ${100 / count}%;
    list-style: none;
    border-top: ${isActive ? `6px solid ${styles.colors.colorBlack}` : ""};

    &:hover {
      color: ${styles.colors.colorWhite};
    }

    &:last-child {
      border-right: none;
    }

    ${isActive
      ? `&::after {
        content: "";
        position: absolute;
        top: 0px;
        border-width: 10px;
        border-style: solid;
        border-color: transparent transparent black transparent;
    }`
      : ""}

    ${colorStyles[color]};
  `
);

export const Navigation = styled.ul`
  align-items: center;
  background-color: ${styles.colors.colorWhite};
  border: ${styles.border};
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  font-family: "VT323", monospace;
  height: 4rem;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;
