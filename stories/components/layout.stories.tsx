import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import LayoutComponent from '../../components/layout';
import { sampleContent } from '../samples/sample-content';

export default {
  title: "Components/Layout",
  component: LayoutComponent,
  argTypes: {},
} as ComponentMeta<typeof LayoutComponent>;

const Template: ComponentStory<typeof LayoutComponent> = (args) => (
  <LayoutComponent {...args} />
);

export const Layout = Template.bind({});
Layout.args = {
  preview: false,
  children: sampleContent,
};
