import { jest } from '@jest/globals';

import getMarkdownFilesFromDirectory from '../utility/getMarkdownFilesFromDirectory';

jest.mock("fs");

describe(`${getMarkdownFilesFromDirectory.name}`, () => {
  const TEST_SLUG = "test-slug";
  const TEST_DIR = "./example";
  const TEST_FILE = `${TEST_SLUG}.md`;
  const TEST_CONTENTS = "# Title\n\nParagraph";

  beforeEach(() => {
    // set mocked files
    require("fs").__setMockFiles({
      [`${TEST_DIR}/${TEST_FILE}`]: TEST_CONTENTS,
    });
  });

  it("should return a list of slugs", async () => {
    const markdownFiles = await getMarkdownFilesFromDirectory(TEST_DIR);
    expect(markdownFiles.length).toBe(1);
    expect(markdownFiles[0]).toBe(TEST_SLUG);
  });
});
