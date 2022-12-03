import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import MoreBlogPostsComponent from '../../components/more-blog-posts';
import { sampleAllBlogPosts } from '../samples/sample-all-blog-posts';

export default {
  title: "Components/More Blog Posts",
  component: MoreBlogPostsComponent,
  argTypes: {},
} as ComponentMeta<typeof MoreBlogPostsComponent>;

const Template: ComponentStory<typeof MoreBlogPostsComponent> = (args) => (
  <MoreBlogPostsComponent {...args} />
);

export const MoreBlogPosts = Template.bind({});
MoreBlogPosts.args = {
  blogPosts: sampleAllBlogPosts,
};
