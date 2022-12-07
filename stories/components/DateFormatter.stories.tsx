import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import DateFormatterComponent from '../../components/DateFormatter';
import { sampleDate } from '../samples/sampleDate';

export default {
  title: "Components/DateFormatter",
  component: DateFormatterComponent,
  argTypes: {
    dateString: {
      control: false,
    },
  },
} as ComponentMeta<typeof DateFormatterComponent>;

const Template: ComponentStory<typeof DateFormatterComponent> = (args) => (
  <DateFormatterComponent {...args} />
);

export const DateFormatter = Template.bind({});
DateFormatter.args = {
  dateString: sampleDate,
};
