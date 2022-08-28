import {ComponentStory, ComponentMeta} from "@storybook/react";

import Progressbar from "../index.js";

export default {
  title: "Progressbar",
  component: Progressbar,
} as ComponentMeta<typeof Progressbar>;

export const Low: ComponentStory<typeof Progressbar> = () => (
  <Progressbar data-cy="Progressbar" current={10} total={100} />
);

export const Medium: ComponentStory<typeof Progressbar> = () => (
  <Progressbar data-cy="Progressbar" current={40} total={100} />
);

export const Complete: ComponentStory<typeof Progressbar> = () => (
  <Progressbar data-cy="Progressbar" current={100} total={100} />
);
