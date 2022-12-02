import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import BookExtractHeaderComponent from '../../components/book-extract-header';
import { sampleBookExtract } from '../samples/sample-book-extract';

export default {
  title: "Components/Post/Book Extract Header",
  component: BookExtractHeaderComponent,
  argTypes: {},
} as ComponentMeta<typeof BookExtractHeaderComponent>;

const Template: ComponentStory<typeof BookExtractHeaderComponent> = (args) => (
  <BookExtractHeaderComponent {...args} />
);

export const BookExtractHeader = Template.bind({});
BookExtractHeader.args = {
  title: sampleBookExtract.title,
  coverImage: sampleBookExtract.coverImage,
};
