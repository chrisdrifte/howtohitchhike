import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import LayoutComponent from '../../components/Layout';
import { samplePost } from '../samples/samplePost';

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
  children: samplePost.content,
};
