import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import SectionSeparatorComponent from '../../components/section-separator';

export default {
  title: "Components/SectionSeparator",
  component: SectionSeparatorComponent,
  argTypes: {},
} as ComponentMeta<typeof SectionSeparatorComponent>;

const Template: ComponentStory<typeof SectionSeparatorComponent> = () => (
  <SectionSeparatorComponent />
);

export const SectionSeparator = Template.bind({});
