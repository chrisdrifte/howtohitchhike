import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import PostBodyComponent from '../../components/post-body';
import { samplePost } from '../samples/sample-post';

export default {
  title: "Components/Post/Body",
  component: PostBodyComponent,
  argTypes: {},
} as ComponentMeta<typeof PostBodyComponent>;

const Template: ComponentStory<typeof PostBodyComponent> = (args) => (
  <PostBodyComponent {...args} />
);

export const Body = Template.bind({});
Body.args = {
  content: samplePost.content,
};
