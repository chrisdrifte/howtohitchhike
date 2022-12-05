import rehypeExternalLinks from 'rehype-external-links';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeExternalLinks, { target: "_blank", rel: ["nofollow"] })
    .use(rehypeStringify)
    .process(markdown);
  return result.toString();
}
