type ObjectWithTitle = {
  title: string;
};

export const sortByTitleDesc = (a: ObjectWithTitle, b: ObjectWithTitle) =>
  a.title.localeCompare(b.title);
