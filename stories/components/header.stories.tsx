import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import HeaderComponent from '../../components/Header';

export default {
  title: "Components/Header",
  component: HeaderComponent,
  argTypes: {},
} as ComponentMeta<typeof HeaderComponent>;

const Template: ComponentStory<typeof HeaderComponent> = () => (
  <HeaderComponent />
);

export const Header = Template.bind({});
