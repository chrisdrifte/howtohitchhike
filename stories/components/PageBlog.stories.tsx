import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import PageBlogComponent from "../../components/PageBlog";
import { sampleBlogPost } from "../samples/sampleBlogPost";

export default {
  title: "Page/Blog",
  component: PageBlogComponent,
  argTypes: {},
} as ComponentMeta<typeof PageBlogComponent>;

const Template: ComponentStory<typeof PageBlogComponent> = (args) => (
  <PageBlogComponent {...args} />
);

export const Blog = Template.bind({});
Blog.args = {
  blogPost: sampleBlogPost,
};
