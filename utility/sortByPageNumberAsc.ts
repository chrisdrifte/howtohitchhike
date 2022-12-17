type ObjectWithPageNumber = {
  pageNumber: number;
};

const sortByPageNumberAsc = (
  a: ObjectWithPageNumber,
  b: ObjectWithPageNumber
) => (a.pageNumber < b.pageNumber ? -1 : 1);

export default sortByPageNumberAsc;
