import styled, {css} from "styled-components";
import styles from "../../styles/styles.js";

const colorBasedOnValue = (val) => {
  let color = "";
  if (val >= 66) {
    color = styles.colors.colorGreenLight;
  } else if (val <= 65 && val >= 33) {
    color = styles.colors.colorYellowLight;
  } else {
    color = styles.colors.colorRedLight;
  }
  return color;
};

export const Container = styled.div`
  align-items: center;
  background-color: ${styles.colors.colorWhite};
  border: 1px solid ${styles.colorBlack};
  border-radius: ${styles.borderRadius};
  box-sizing: border-box;
  box-shadow: 3px 3px ${styles.colors.colorBlack};
  display: flex;
  flex-direction: row;
  font-family: "VT323", monospace;
  height: 2rem;
  justify-content: space-between;
  position: relative;
  width: 100%;
`;

export const Bar = styled.div(
  ({value}) => css`
    background: ${colorBasedOnValue(value)};
    border-radius: ${styles.borderRadius};
    height: 100%;
    transition: width 0.5s;
    width: ${value}%;
  `
);

export const Count = styled.p`
  position: absolute;
  right: 1rem;
`;
