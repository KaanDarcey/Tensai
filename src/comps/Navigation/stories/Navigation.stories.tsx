import {ComponentStory, ComponentMeta} from "@storybook/react";

import Navigation from "../index.js";

export default {
  title: "Navigation",
  component: Navigation,
} as ComponentMeta<typeof Navigation>;

export const Default: ComponentStory<typeof Navigation> = () => (
  <Navigation data-cy="Navigation" />
);
