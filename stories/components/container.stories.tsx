import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import ContainerComponent from '../../components/container';
import { sampleContent } from '../samples/sample-content';

export default {
  title: "Components/Container",
  component: ContainerComponent,
  argTypes: {},
} as ComponentMeta<typeof ContainerComponent>;

const Template: ComponentStory<typeof ContainerComponent> = (args) => (
  <ContainerComponent {...args} />
);

export const Container = Template.bind({});
Container.args = {
  children: sampleContent,
};
