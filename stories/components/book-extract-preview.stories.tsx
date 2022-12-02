import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import BookExtractPreviewComponent from '../../components/book-extract-preview';
import { sampleBookExtract } from '../samples/sample-book-extract';

export default {
  title: "Components/Post/Book Extract Preview",
  component: BookExtractPreviewComponent,
  argTypes: {},
} as ComponentMeta<typeof BookExtractPreviewComponent>;

const Template: ComponentStory<typeof BookExtractPreviewComponent> = (args) => (
  <BookExtractPreviewComponent {...args} />
);

export const BookExtractPreview = Template.bind({});
BookExtractPreview.args = {
  title: sampleBookExtract.title,
  coverImage: sampleBookExtract.coverImage,
  excerpt: sampleBookExtract.excerpt,
};
