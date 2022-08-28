import styled, {css} from "styled-components";
import styles from "../../styles/styles.js";

export const SmallKana = styled.p`
  font-size: 1em;
  margin: 0;
`;

export const Kana = styled.p`
  font-size: 1.5em;
  margin: 0;
`;

export const Kanji = styled.p`
  font-size: 3em;
  margin: 0;
`;

export const FlashcardContainer = styled.div(
  ({flip}) => css`
    height: 100%;
    position: relative;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    width: 100%;

    ${flip ? `transform: rotateY(180deg)` : ""}
  `
);

export const Frontside = styled.div`
  align-items: center;
  backface-visibility: hidden;
  background-color: ${styles.colors.colorWhite};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: absolute;
  -webkit-backface-visibility: hidden; /* Safari */
  width: 100%;
`;

export const Backside = styled.div(
  ({answer}) => css`
    align-items: center;
    backface-visibility: hidden;
    background-color: ${answer
      ? styles.colors.colorGreenLight
      : styles.colors.colorRedLight};
    display: flex;
    flex-direction: column;
    font-size: 1.5em;
    height: 100%;
    justify-content: center;

    position: absolute;
    transform: rotateY(180deg);
    -webkit-backface-visibility: hidden; /* Safari */
    width: 100%;
  `
);

export const Flashcard = styled.div`
  background-color: transparent;
  border: 1px solid ${styles.colorBlack};
  border-radius: ${styles.borderRadius};
  box-shadow: 3px 3px ${styles.colors.colorBlack};
  box-sizing: border-box;
  cursor: pointer;
  font-family: "VT323", monospace;
  height: 12rem;
  max-width: 14rem;
  overflow: hidden;
  perspective: 1000px;
`;
