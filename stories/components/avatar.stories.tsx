import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import AvatarComponent from '../../components/avatar';
import { sampleAuthor } from '../samples/sample-author';

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
  name: sampleAuthor.name,
  picture: sampleAuthor.picture,
};
