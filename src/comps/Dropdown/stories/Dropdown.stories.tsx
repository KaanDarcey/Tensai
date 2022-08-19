import React from "react";

import {ComponentStory, ComponentMeta} from "@storybook/react";

import Dropdown from "../index.js";

export default {
  title: "Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

export const Default: ComponentStory<typeof Dropdown> = () => (
  <Dropdown
    data-cy="dropdown"
    label="Dropdown"
    items={[
      {name: "Apple", value: "Apple"},
      {name: "Banana", value: "Banana"},
      {name: "Orange", value: "Orange"},
    ]}
  />
);
