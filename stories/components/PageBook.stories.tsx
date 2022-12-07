import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import PageBookComponent from "../../components/PageBook";
import { sampleBookExtract } from "../samples/sampleBookExtract";

export default {
  title: "Components/Page/Book",
  component: PageBookComponent,
  argTypes: {},
} as ComponentMeta<typeof PageBookComponent>;

const Template: ComponentStory<typeof PageBookComponent> = (args) => (
  <PageBookComponent {...args} />
);

export const Book = Template.bind({});
Book.args = {
  bookExtract: sampleBookExtract,
  nextBookExtract: sampleBookExtract,
};
