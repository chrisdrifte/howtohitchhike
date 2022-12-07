import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import AlertComponent from '../../components/Alert';

export default {
  title: "Components/Alert",
  component: AlertComponent,
  argTypes: {},
} as ComponentMeta<typeof AlertComponent>;

const Template: ComponentStory<typeof AlertComponent> = (args) => (
  <AlertComponent {...args} />
);

export const Alert = Template.bind({});
Alert.args = {
  preview: true,
};
