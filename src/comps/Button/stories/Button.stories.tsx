import React from "react";

import {ComponentStory, ComponentMeta} from "@storybook/react";

import Button from "../index.js";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// Kinds

export const AllKinds: ComponentStory<typeof Button> = () => {
  return (
    <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
      <Button style={{marginRight: "1rem"}} kind="primary" data-cy="primary-button">
        Learn
      </Button>
      <Button style={{marginRight: "1rem"}} kind="secondary" data-cy="secondary-button">
        Study
      </Button>
      <Button style={{marginRight: "1rem"}} kind="action" data-cy="action-button">
        Quiz
      </Button>
      <Button style={{marginRight: "1rem"}} kind="success" data-cy="success-button">
        Add
      </Button>
      <Button style={{marginRight: "1rem"}} kind="warning" data-cy="warning-button">
        Check Answer
      </Button>
      <Button style={{marginRight: "1rem"}} kind="danger" data-cy="danger-button">
        Delete
      </Button>
      <Button style={{marginRight: "1rem"}} kind="close" data-cy="close-button">
        Close
      </Button>
      <Button kind="link" data-cy="link-button">Link</Button>
    </div>
  );
};

export const Primary: ComponentStory<typeof Button> = () => (
  <Button kind="primary">Learn</Button>
);

export const Secondary: ComponentStory<typeof Button> = () => (
  <Button kind="secondary">Study</Button>
);

export const Action: ComponentStory<typeof Button> = () => (
  <Button kind="action">Quiz</Button>
);

export const Success: ComponentStory<typeof Button> = () => (
  <Button kind="success">Add</Button>
);

export const Warning: ComponentStory<typeof Button> = () => (
  <Button kind="warning">Check Answer</Button>
);

export const Danger: ComponentStory<typeof Button> = () => (
  <Button kind="danger">Delete</Button>
);

export const Close: ComponentStory<typeof Button> = () => (
  <Button kind="close">Close</Button>
);

export const Link: ComponentStory<typeof Button> = () => (
  <Button kind="link">Link</Button>
);

// Sizes

export const AllSizes: ComponentStory<typeof Button> = () => {
  return (
    <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
      <Button style={{marginRight: "1rem"}} size="small">
        X
      </Button>
      <Button style={{marginRight: "1rem"}} size="medium">
        mid
      </Button>
      <Button style={{marginRight: "1rem"}} size="large">
        large
      </Button>
    </div>
  );
};

export const Small: ComponentStory<typeof Button> = () => <Button size="small">X</Button>;

export const Medium: ComponentStory<typeof Button> = () => (
  <Button size="medium">mid</Button>
);

export const Large: ComponentStory<typeof Button> = () => (
  <Button size="large">Large</Button>
);

// isRound

export const Round: ComponentStory<typeof Button> = () => {
  return (
    <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
      <Button style={{marginRight: "1rem"}} isRound size="small">
        S
      </Button>
      <Button style={{marginRight: "1rem"}} isRound size="medium">
        M
      </Button>
    </div>
  );
};
