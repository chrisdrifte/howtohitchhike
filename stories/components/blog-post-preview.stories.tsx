import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import BlogPostPreviewComponent from '../../components/blog-post-preview';
import { sampleBlogPost } from '../samples/sample-blog-post';

export default {
  title: "Components/Post/Blog Post Preview",
  component: BlogPostPreviewComponent,
  argTypes: {},
} as ComponentMeta<typeof BlogPostPreviewComponent>;

const Template: ComponentStory<typeof BlogPostPreviewComponent> = (args) => (
  <BlogPostPreviewComponent {...args} />
);

export const BlogPostPreview = Template.bind({});
BlogPostPreview.args = {
  title: sampleBlogPost.title,
  coverImage: sampleBlogPost.coverImage,
  date: sampleBlogPost.date,
  excerpt: sampleBlogPost.excerpt,
  author: sampleBlogPost.author,
};
