import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

function parseMarkdownFile(dir: string, slug: string) {
  const fullDir = join(process.cwd(), dir);
  const fullPath = join(fullDir, `${slug}.md`);

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { slug, content, ...data } as {
    [key: string]: string;
  };
}

export default parseMarkdownFile;
