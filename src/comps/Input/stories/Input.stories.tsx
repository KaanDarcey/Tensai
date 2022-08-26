import React from "react";

import {ComponentStory, ComponentMeta} from "@storybook/react";

import Input from "../index.js";

export default {
  title: "Input",
  component: Input,
} as ComponentMeta<typeof Input>;

export const Default: ComponentStory<typeof Input> = () => (
  <Input data-cy="input" inputType="text" placeholder="Type here.." />
);

export const Checkbox: ComponentStory<typeof Input> = () => (
  <Input data-cy="input" inputType="checkbox" />
);

export const Radio: ComponentStory<typeof Input> = () => (
  <Input data-cy="input" inputType="radio" />
);

export const Colors: ComponentStory<typeof Input> = () => (
  <form
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "30%",
    }}
  >
    <Input data-cy="purple" inputType="radio" color="purple" name="radios" />
    <Input data-cy="yellow" inputType="radio" color="yellow" name="radios" />
    <Input data-cy="blue" inputType="radio" color="blue" name="radios" />
    <Input data-cy="green" inputType="radio" color="green" name="radios" />
    <Input data-cy="red" inputType="radio" color="pink" name="radios" />
    <Input data-cy="grey" inputType="radio" color="red" name="radios" />
    <Input data-cy="black" inputType="radio" color="grey" name="radios" />
    <Input data-cy="black" inputType="radio" color="black" name="radios" />
  </form>
);
