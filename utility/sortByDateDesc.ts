type ObjectWithDate = {
  date: string;
};

export const sortByDateDesc = (a: ObjectWithDate, b: ObjectWithDate) =>
  new Date(a.date) > new Date(b.date) ? -1 : 1;
