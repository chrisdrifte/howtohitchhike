import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import AsideContributeComponent from "../../components/AsideContribute";

export default {
  title: "Components/Aside/Contribute",
  component: AsideContributeComponent,
  argTypes: {},
} as ComponentMeta<typeof AsideContributeComponent>;

const Template: ComponentStory<typeof AsideContributeComponent> = () => (
  <AsideContributeComponent />
);

export const Contribute = Template.bind({});
