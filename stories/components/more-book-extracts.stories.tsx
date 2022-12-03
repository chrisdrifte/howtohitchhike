import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import MoreBookExtractsComponent from '../../components/more-book-extracts';
import { sampleAllBookExtracts } from '../samples/sample-all-book-extracts';

export default {
  title: "Components/More Book Extracts",
  component: MoreBookExtractsComponent,
  argTypes: {},
} as ComponentMeta<typeof MoreBookExtractsComponent>;

const Template: ComponentStory<typeof MoreBookExtractsComponent> = (args) => (
  <MoreBookExtractsComponent {...args} />
);

export const MoreBookExtracts = Template.bind({});
MoreBookExtracts.args = {
  bookExtracts: sampleAllBookExtracts,
};
