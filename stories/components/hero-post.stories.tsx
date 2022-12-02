import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import HeroPostComponent from '../../components/hero-post';
import { sampleBlogPost } from '../samples/sample-blog-post';

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
  title: sampleBlogPost.title,
  coverImage: sampleBlogPost.coverImage,
  date: sampleBlogPost.date,
  excerpt: sampleBlogPost.excerpt,
  author: sampleBlogPost.author,
  slug: sampleBlogPost.slug,
};
