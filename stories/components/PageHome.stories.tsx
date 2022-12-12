import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import PageHomeComponent from "../../components/PageHome";
import { sampleBlogPosts } from "../samples/sampleBlogPosts";
import { sampleBookExtracts } from "../samples/sampleBookExtracts";

export default {
  title: "Page/Home",
  component: PageHomeComponent,
  argTypes: {},
} as ComponentMeta<typeof PageHomeComponent>;

const Template: ComponentStory<typeof PageHomeComponent> = (args) => (
  <PageHomeComponent {...args} />
);

export const Home = Template.bind({});
Home.args = {
  featuredBlogPost: sampleBlogPosts[0],
  blogPosts: sampleBlogPosts,
  bookExtracts: sampleBookExtracts,
};
