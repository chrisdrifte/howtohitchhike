import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import BookExtractListComponent from "../../components/BookExtractList";
import { sampleBookExtracts } from "../samples/sampleBookExtracts";

export default {
  title: "Components/Post/Book Extract/List",
  component: BookExtractListComponent,
  argTypes: {},
} as ComponentMeta<typeof BookExtractListComponent>;

const Template: ComponentStory<typeof BookExtractListComponent> = (args) => (
  <BookExtractListComponent {...args} />
);

export const List = Template.bind({});
List.args = {
  bookExtracts: sampleBookExtracts,
};
