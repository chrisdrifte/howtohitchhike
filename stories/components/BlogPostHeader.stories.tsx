import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import BlogPostHeaderComponent from "../../components/BlogPostHeader";
import { sampleBlogPost } from "../samples/sampleBlogPost";

export default {
  title: "Components/Post/Blog Post/Header",
  component: BlogPostHeaderComponent,
  argTypes: {},
} as ComponentMeta<typeof BlogPostHeaderComponent>;

const Template: ComponentStory<typeof BlogPostHeaderComponent> = (args) => (
  <BlogPostHeaderComponent {...args} />
);

export const Header = Template.bind({});
Header.args = {
  title: sampleBlogPost.title,
  coverImage: sampleBlogPost.coverImage,
  date: sampleBlogPost.date,
  author: sampleBlogPost.author,
};
