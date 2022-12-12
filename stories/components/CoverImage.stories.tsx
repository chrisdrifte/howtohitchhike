import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import CoverImageComponent from '../../components/CoverImage';
import { sampleBlogPost } from '../samples/sampleBlogPost';

export default {
  title: "Components/CoverImage",
  component: CoverImageComponent,
  argTypes: {},
} as ComponentMeta<typeof CoverImageComponent>;

const Template: ComponentStory<typeof CoverImageComponent> = (args) => (
  <CoverImageComponent {...args} />
);

export const CoverImage = Template.bind({});
CoverImage.args = {
  title: sampleBlogPost.title,
  src: sampleBlogPost.coverImage,
  slug: sampleBlogPost.slug,
};
