import BlogPost from '../interfaces/blog-post';
import BlogPostPreview from './blog-post-preview';

type Props = {
  blogPosts: BlogPost[];
};

const MoreBlogPosts = ({ blogPosts }: Props) => {
  if (!blogPosts.length) return null;

  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7xl font-serif font-bold tracking-tighter leading-tight">
        From the blog
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {blogPosts.map((post) => (
          <BlogPostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreBlogPosts;
