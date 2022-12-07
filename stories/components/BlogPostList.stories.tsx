import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import BlogPostListComponent from "../../components/BlogPostList";
import { sampleBlogPosts } from "../samples/sampleBlogPosts";

export default {
  title: "Components/Post/Blog Post/List",
  component: BlogPostListComponent,
  argTypes: {},
} as ComponentMeta<typeof BlogPostListComponent>;

const Template: ComponentStory<typeof BlogPostListComponent> = (args) => (
  <BlogPostListComponent {...args} />
);

export const List = Template.bind({});
List.args = {
  blogPosts: sampleBlogPosts,
};
