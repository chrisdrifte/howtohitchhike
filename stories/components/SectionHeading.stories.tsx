import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import SectionHeadingComponent from "../../components/SectionHeading";
import { sampleBlogPost } from "../samples/sampleBlogPost";

export default {
  title: "Components/SectionHeading",
  component: SectionHeadingComponent,
  argTypes: {},
} as ComponentMeta<typeof SectionHeadingComponent>;

const Template: ComponentStory<typeof SectionHeadingComponent> = (args) => (
  <SectionHeadingComponent {...args} />
);

export const SectionHeading = Template.bind({});
SectionHeading.args = {
  children: sampleBlogPost.title,
};
