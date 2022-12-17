import { jest } from '@jest/globals';

import removePrefix from '../utility/removePrefix';

describe(`${removePrefix.name}`, () => {
  it("should remove existing prefix", async () => {
    expect(removePrefix("/", "/path")).toBe("path");
  });

  it("should ignore non-existing prefix", async () => {
    expect(removePrefix("/", "path")).toBe("path");
  });
});
