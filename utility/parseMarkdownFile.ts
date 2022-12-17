import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

async function parseMarkdownFile(dir: string, slug: string) {
  const fullDir = join(process.cwd(), dir);
  const fullPath = join(fullDir, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return;
  }

  const fileContents = await fs.promises.readFile(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { slug, content, ...data } as {
    [key: string]: string;
  };
}

export default parseMarkdownFile;
