import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import BlogPostPreviewComponent from "../../components/BlogPostPreview";
import { sampleBlogPost } from "../samples/sampleBlogPost";

export default {
  title: "Components/Post/Blog Post/Preview",
  component: BlogPostPreviewComponent,
  argTypes: {},
} as ComponentMeta<typeof BlogPostPreviewComponent>;

const Template: ComponentStory<typeof BlogPostPreviewComponent> = (args) => (
  <BlogPostPreviewComponent {...args} />
);

export const Preview = Template.bind({});
Preview.args = {
  title: sampleBlogPost.title,
  coverImage: sampleBlogPost.coverImage,
  date: sampleBlogPost.date,
  excerpt: sampleBlogPost.excerpt,
  author: sampleBlogPost.author,
};
