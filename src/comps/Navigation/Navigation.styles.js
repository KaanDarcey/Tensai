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

export const Nav = styled.nav`
  width: 100%;
  z-index: 99;
`;

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
  height: 4rem;
  margin: 0;
  padding: 0;
  overflow: hidden;
  width: 100%;
`;
