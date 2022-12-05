import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import FooterComponent from '../../components/keep-reading';

export default {
  title: "Components/Footer",
  component: FooterComponent,
  argTypes: {},
} as ComponentMeta<typeof FooterComponent>;

const Template: ComponentStory<typeof FooterComponent> = () => (
  <FooterComponent />
);

export const Footer = Template.bind({});
