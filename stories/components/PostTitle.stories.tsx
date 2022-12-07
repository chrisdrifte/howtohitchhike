import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import PostTitleComponent from '../../components/PostTitle';
import { sampleBlogPost } from '../samples/sampleBlogPost';

export default {
  title: "Components/Post/Title",
  component: PostTitleComponent,
  argTypes: {},
} as ComponentMeta<typeof PostTitleComponent>;

const Template: ComponentStory<typeof PostTitleComponent> = (args) => (
  <PostTitleComponent {...args} />
);

export const Title = Template.bind({});
Title.args = {
  children: sampleBlogPost.title,
};
