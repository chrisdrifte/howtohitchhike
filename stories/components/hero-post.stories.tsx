import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import HeroPostComponent from '../../components/hero-post';
import { samplePost } from '../samples/sample-post';

export default {
  title: "Components/HeroPost",
  component: HeroPostComponent,
  argTypes: {
    date: {
      control: false,
    },
  },
} as ComponentMeta<typeof HeroPostComponent>;

const Template: ComponentStory<typeof HeroPostComponent> = (args) => (
  <HeroPostComponent {...args} />
);

export const HeroPost = Template.bind({});
HeroPost.args = {
  title: samplePost.title,
  coverImage: samplePost.coverImage,
  date: samplePost.date,
  excerpt: samplePost.excerpt,
  author: samplePost.author,
  slug: samplePost.slug,
};
