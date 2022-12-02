import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import BlogPostHeaderComponent from '../../components/blog-post-header';
import { sampleBlogPost } from '../samples/sample-blog-post';

export default {
  title: "Components/Post/Blog Post Header",
  component: BlogPostHeaderComponent,
  argTypes: {},
} as ComponentMeta<typeof BlogPostHeaderComponent>;

const Template: ComponentStory<typeof BlogPostHeaderComponent> = (args) => (
  <BlogPostHeaderComponent {...args} />
);

export const BlogPostHeader = Template.bind({});
BlogPostHeader.args = {
  title: sampleBlogPost.title,
  coverImage: sampleBlogPost.coverImage,
  date: sampleBlogPost.date,
  author: sampleBlogPost.author,
};
