import markdownToHtml from "../utility/markdownToHtml";

describe(`${markdownToHtml}.name`, () => {
  const TEST_MARKDOWN = "# Title\n\nParagraph";
  const EXPECTED_HTML = "<h1>Title</h1>\n<p>Paragraph</p>";

  it("should return a list of slugs", async () => {
    expect(await markdownToHtml(TEST_MARKDOWN)).toBe(EXPECTED_HTML);
  });
});
