import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import IntroComponent from '../../components/Intro';

export default {
  title: "Components/Intro",
  component: IntroComponent,
  argTypes: {},
} as ComponentMeta<typeof IntroComponent>;

const Template: ComponentStory<typeof IntroComponent> = (args) => (
  <IntroComponent {...args} />
);

export const Intro = Template.bind({});
