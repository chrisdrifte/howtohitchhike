import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import CoverImageComponent from '../../components/cover-image';
import { samplePost } from '../samples/sample-post';

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
  title: samplePost.title,
  src: samplePost.coverImage,
  slug: samplePost.slug,
};
