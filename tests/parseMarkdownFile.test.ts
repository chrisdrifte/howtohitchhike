import { jest } from '@jest/globals';

import parseMarkdownFile from '../utility/parseMarkdownFile';

jest.mock("fs");

describe(`${parseMarkdownFile.name}`, () => {
  const TEST_SLUG = "test-slug";
  const TEST_DIR = "./example";
  const TEST_FILE = `${TEST_SLUG}.md`;
  const TEST_CONTENTS = `---
testMeta: "testMetaContent" 
---

# Title\n\nParagraph`;

  beforeEach(() => {
    // set mocked files
    require("fs").__setMockFiles({
      [`${TEST_DIR}/${TEST_FILE}`]: TEST_CONTENTS,
    });
  });

  it("should read and parse a markdown file", async () => {
    const parsedFile = await parseMarkdownFile(TEST_DIR, TEST_SLUG);
    expect(parsedFile.slug).toBe(TEST_SLUG);
    expect(parsedFile.testMeta).toBe("testMetaContent");
    expect(parsedFile.content).toBe("\n# Title\n\nParagraph");
  });
});
