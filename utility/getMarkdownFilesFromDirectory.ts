import fs from "fs";
import { join } from "path";

function getMarkdownFilesFromDirectory(dir: string) {
  const fullDir = join(process.cwd(), dir);

  if (!fs.existsSync(fullDir)) {
    return [];
  }

  const slugs = fs
    .readdirSync(fullDir)
    .map((slug) => slug.replace(/\.md$/, ""));

  return slugs;
}

export default getMarkdownFilesFromDirectory;
