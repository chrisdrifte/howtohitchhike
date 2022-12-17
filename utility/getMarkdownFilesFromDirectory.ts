import fs from 'fs';
import { join } from 'path';

async function getMarkdownFilesFromDirectory(dir: string) {
  const fullDir = join(process.cwd(), dir);

  if (!fs.existsSync(fullDir)) {
    return [];
  }

  const slugs = (await fs.promises.readdir(fullDir)).map((slug) =>
    slug.replace(/\.md$/, "")
  );

  return slugs;
}

export default getMarkdownFilesFromDirectory;
