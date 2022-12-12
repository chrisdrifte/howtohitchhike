import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import AvatarComponent from '../../components/Credit';
import { sampleContributor } from '../samples/sampleContributor';

export default {
  title: "Components/Avatar",
  component: AvatarComponent,
  argTypes: {},
} as ComponentMeta<typeof AvatarComponent>;

const Template: ComponentStory<typeof AvatarComponent> = (args) => (
  <AvatarComponent {...args} />
);

export const Avatar = Template.bind({});
Avatar.args = {
  name: sampleContributor.title,
  picture: sampleContributor.picture,
};
