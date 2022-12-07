import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import PostHeroComponent from "../../components/PostHero";
import { sampleBlogPost } from "../samples/sampleBlogPost";

export default {
  title: "Components/Post/Hero",
  component: PostHeroComponent,
  argTypes: {
    date: {
      control: false,
    },
  },
} as ComponentMeta<typeof PostHeroComponent>;

const Template: ComponentStory<typeof PostHeroComponent> = (args) => (
  <PostHeroComponent {...args} />
);

export const Hero = Template.bind({});
Hero.args = {
  title: sampleBlogPost.title,
  coverImage: sampleBlogPost.coverImage,
  date: sampleBlogPost.date,
  excerpt: sampleBlogPost.excerpt,
  author: sampleBlogPost.author,
  slug: sampleBlogPost.slug,
};
