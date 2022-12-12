type ObjectWithPageNumber = {
  pageNumber: number;
};

export const sortByPageNumberAsc = (
  a: ObjectWithPageNumber,
  b: ObjectWithPageNumber
) => (a.pageNumber < b.pageNumber ? -1 : 1);
