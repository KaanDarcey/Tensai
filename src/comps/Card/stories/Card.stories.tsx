import React from "react";

import {ComponentStory, ComponentMeta} from "@storybook/react";

import Card from "../index.js";

export default {
  title: "Card",
  component: Card,
} as ComponentMeta<typeof Card>;

export const Default: ComponentStory<typeof Card> = () => <Card />;

// Sizes

export const AllSizes: ComponentStory<typeof Card> = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "left"}}>
      <Card data-cy="small-card" style={{marginBottom: "1rem"}} size="small">
        Small sized Card component
      </Card>
      <Card data-cy="medium-card" style={{marginBottom: "1rem"}} size="medium">
        Medium sized Card component
      </Card>
      <Card data-cy="large-card" style={{marginBottom: "1rem"}} size="large">
        Large sized Card component
      </Card>
    </div>
  );
};
