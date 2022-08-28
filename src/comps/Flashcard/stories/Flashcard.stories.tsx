import {ComponentStory, ComponentMeta} from "@storybook/react";

import Flashcard from "../index.js";

export default {
  title: "Flashcard",
  component: Flashcard,
} as ComponentMeta<typeof Flashcard>;

export const Default: ComponentStory<typeof Flashcard> = () => (
  <Flashcard data-cy="Flashcard" kana="てんさい" kanji="天才" translation="genius" />
);
