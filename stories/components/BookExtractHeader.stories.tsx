import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import BookExtractHeaderComponent from "../../components/BookExtractHeader";
import { sampleBookExtract } from "../samples/sampleBookExtract";

export default {
  title: "Components/Post/Book Extract/Header",
  component: BookExtractHeaderComponent,
  argTypes: {},
} as ComponentMeta<typeof BookExtractHeaderComponent>;

const Template: ComponentStory<typeof BookExtractHeaderComponent> = (args) => (
  <BookExtractHeaderComponent {...args} />
);

export const Header = Template.bind({});
Header.args = {
  title: sampleBookExtract.title,
  coverImage: sampleBookExtract.coverImage,
};
