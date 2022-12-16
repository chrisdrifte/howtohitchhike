import { jest } from '@jest/globals';

import sortByDateDesc from '../utility/sortByDateDesc';

describe(`${sortByDateDesc.name}`, () => {
  const unsortedDates = [
    { id: "B", date: new Date(1000).toISOString() },
    { id: "A", date: new Date(0).toISOString() },
    { id: "C", date: new Date(2000).toISOString() },
  ];

  it("should remove existing prefix", async () => {
    const sortedDates = unsortedDates.sort(sortByDateDesc);
    expect(sortedDates[0].id).toBe("C");
    expect(sortedDates[1].id).toBe("B");
    expect(sortedDates[2].id).toBe("A");
  });
});
