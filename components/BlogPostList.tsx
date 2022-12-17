import getKey from '../cms/getKey';
import BlogPost from '../models/BlogPost';
import BlogPostPreview from './BlogPostPreview';
import SectionHeading from './SectionHeading';

type Props = {
  blogPosts: BlogPost[];
};

const BlogPostList = ({ blogPosts }: Props) => {
  if (!(blogPosts instanceof Array) || !blogPosts.length) {
    return null;
  }

  return (
    <section>
      <SectionHeading>From the blog</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {blogPosts.map((post) => (
          <BlogPostPreview
            key={getKey(post)}
            slug={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            contributor={post.author}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogPostList;
