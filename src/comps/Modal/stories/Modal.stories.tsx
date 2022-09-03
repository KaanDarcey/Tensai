import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import Modal from "../index.js";
import Dropdown from "../../Dropdown";
import Button from "../../Button";

export default {
  title: "Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

export const Add: ComponentStory<typeof Modal> = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  return (
    <>
      <Button data-cy="Button" onClick={() => setIsVisible(true)}>
        Display Modal
      </Button>
      <Modal data-cy="Modal" title="Add Card" color="green" isVisible={isVisible}>
        <p style={{padding: 0, margin: 0, marginBottom: "1rem"}}>
          Which deck would you like to add this card to?
        </p>
        <Dropdown
          label="Dropdown"
          items={[
            {name: "Basic Vocabulary", value: "basicVocabulary"},
            {name: "Grammar", value: "grammar"},
            {name: "Tech Words", value: "techWords"},
          ]}
        />
        <span
          style={{
            marginTop: "1rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Button
            onClick={() => setIsVisible(false)}
            kind="close"
            label="Close"
            style={{marginRight: "1rem"}}
          />
          <Button kind="success" label="Save" />
        </span>
      </Modal>
    </>
  );
};

export const Remove: ComponentStory<typeof Modal> = () => (
  <Modal data-cy="Modal" title="Remove Card" color="yellow" />
);

export const Delete: ComponentStory<typeof Modal> = () => (
  <Modal data-cy="Modal" title="Delete Deck" color="red" />
);
