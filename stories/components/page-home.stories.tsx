import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import PageHomeComponent from '../../components/page-home';
import { sampleAllPosts } from '../samples/sample-all-posts';

export default {
  title: "Components/Page/Home",
  component: PageHomeComponent,
  argTypes: {},
} as ComponentMeta<typeof PageHomeComponent>;

const Template: ComponentStory<typeof PageHomeComponent> = (args) => (
  <PageHomeComponent {...args} />
);

export const Home = Template.bind({});
Home.args = {
  allPosts: sampleAllPosts,
};
