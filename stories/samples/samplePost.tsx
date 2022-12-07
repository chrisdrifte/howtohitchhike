import { DEFAULT_OG_IMAGE_URL } from "../../config";
import Post from "../../interfaces/Post";
import sampleCoverJpg from "./sampleCover.jpg";

export const samplePost: Post = {
  slug: "hello-world",
  title: "Learn How to Pre-render Pages Using Static Generation with Next.js",
  coverImage: sampleCoverJpg.toString(),
  ogImage: {
    url: DEFAULT_OG_IMAGE_URL,
  },
  excerpt:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.",
};
