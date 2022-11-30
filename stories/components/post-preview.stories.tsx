import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import PostPreviewComponent from '../../components/post-preview';
import { samplePost } from '../samples/sample-post';

export default {
  title: "Components/Post/Preview",
  component: PostPreviewComponent,
  argTypes: {},
} as ComponentMeta<typeof PostPreviewComponent>;

const Template: ComponentStory<typeof PostPreviewComponent> = (args) => (
  <PostPreviewComponent {...args} />
);

export const Preview = Template.bind({});
Preview.args = {
  title: samplePost.title,
  coverImage: samplePost.coverImage,
  date: samplePost.date,
  excerpt: samplePost.excerpt,
  author: samplePost.author,
};
