import { jest } from '@jest/globals';

import sortByPageNumberAsc from '../utility/sortByPageNumberAsc';

describe(`${sortByPageNumberAsc.name}`, () => {
  const unsortedPageNumbers = [
    { id: "B", pageNumber: 1 },
    { id: "A", pageNumber: 0 },
    { id: "C", pageNumber: 2 },
  ];

  it("should remove existing prefix", async () => {
    const sortedPageNumbers = unsortedPageNumbers.sort(sortByPageNumberAsc);
    expect(sortedPageNumbers[0].id).toBe("A");
    expect(sortedPageNumbers[1].id).toBe("B");
    expect(sortedPageNumbers[2].id).toBe("C");
  });
});
