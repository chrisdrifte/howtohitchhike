import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import PreviewRibbonComponent from '../../components/PreviewRibbon';

export default {
  title: "Components/Preview Ribbon",
  component: PreviewRibbonComponent,
  argTypes: {},
} as ComponentMeta<typeof PreviewRibbonComponent>;

const Template: ComponentStory<typeof PreviewRibbonComponent> = () => (
  <PreviewRibbonComponent />
);

export const PreviewRibbon = Template.bind({});
PreviewRibbon.args = {
  preview: true,
};
