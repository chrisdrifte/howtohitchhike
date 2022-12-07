import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import StatementComponent from "../../components/Statement";
import { sampleBlogPost } from "../samples/sampleBlogPost";

export default {
  title: "Components/Statement",
  component: StatementComponent,
  argTypes: {},
} as ComponentMeta<typeof StatementComponent>;

const Template: ComponentStory<typeof StatementComponent> = (args) => (
  <StatementComponent {...args} />
);

export const Statement = Template.bind({});
Statement.args = {
  children: sampleBlogPost.title,
};
