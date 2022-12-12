import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import ButtonComponent from "../../components/Button";

export default {
  title: "Components/Button",
  component: ButtonComponent,
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args} />
);

export const Button = Template.bind({});
Button.args = {
  url: "https://example.com",
  children: "Example Button",
};
