import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import PageHomeComponent from '../../components/page-home';
import { sampleAllBlogPosts } from '../samples/sample-all-blog-posts';
import { sampleAllBookExtracts } from '../samples/sample-all-book-extracts';

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
  allBlogPosts: sampleAllBlogPosts,
  allBookExtracts: sampleAllBookExtracts,
};
