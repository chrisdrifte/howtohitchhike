import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import PostHeaderComponent from '../../components/post-header';
import { samplePost } from '../samples/sample-post';

export default {
  title: "Components/Post/Header",
  component: PostHeaderComponent,
  argTypes: {},
} as ComponentMeta<typeof PostHeaderComponent>;

const Template: ComponentStory<typeof PostHeaderComponent> = (args) => (
  <PostHeaderComponent {...args} />
);

export const Header = Template.bind({});
Header.args = {
  title: samplePost.title,
  coverImage: samplePost.coverImage,
  date: samplePost.date,
  author: samplePost.author,
};
