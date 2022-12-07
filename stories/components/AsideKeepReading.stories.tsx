import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import AsideKeepReadingComponent from "../../components/AsideKeepReading";

export default {
  title: "Components/Aside/KeepReading",
  component: AsideKeepReadingComponent,
  argTypes: {},
} as ComponentMeta<typeof AsideKeepReadingComponent>;

const Template: ComponentStory<typeof AsideKeepReadingComponent> = () => (
  <AsideKeepReadingComponent />
);

export const KeepReading = Template.bind({});
