import React from "react";
import * as sc from "./Flashcard.styles";

export interface FlashcardProps {
  answerValid: boolean;
  kana: string;
  kanji?: string;
  translation: string;
}

const Flashcard = ({
  answerValid,
  kana,
  kanji,
  translation,
  ...moreProps
}: FlashcardProps) => {
  const [flip, setFlip] = React.useState(false);
  const renderCharacterDisplay = () => {
    if (kanji) {
      return (
        <>
          <sc.SmallKana>{kana}</sc.SmallKana>
          <sc.Kanji>{kanji}</sc.Kanji>
        </>
      );
    } else {
      return <sc.Kana>{kana}</sc.Kana>;
    }
  };

  return (
    <sc.Flashcard onClick={() => setFlip(!flip)} flip={flip} {...moreProps}>
      <sc.FlashcardContainer flip={flip}>
        <sc.Frontside>{renderCharacterDisplay()}</sc.Frontside>
        <sc.Backside answer={answerValid}>{translation}</sc.Backside>
      </sc.FlashcardContainer>
    </sc.Flashcard>
  );
};

const defaultProps = {
  answerValid: true,
};

Flashcard.defaultProps = defaultProps;
Flashcard.displayName = "Flashcard";

export default Flashcard;
