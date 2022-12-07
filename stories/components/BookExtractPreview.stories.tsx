import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import BookExtractPreviewComponent from "../../components/BookExtractPreview";
import { sampleBookExtract } from "../samples/sampleBookExtract";

export default {
  title: "Components/Post/Book Extract/Preview",
  component: BookExtractPreviewComponent,
  argTypes: {},
} as ComponentMeta<typeof BookExtractPreviewComponent>;

const Template: ComponentStory<typeof BookExtractPreviewComponent> = (args) => (
  <BookExtractPreviewComponent {...args} />
);

export const Preview = Template.bind({});
Preview.args = {
  title: sampleBookExtract.title,
  coverImage: sampleBookExtract.coverImage,
  excerpt: sampleBookExtract.excerpt,
};
