type ObjectWithName = {
  name: string;
};

export const sortByNameDesc = (a: ObjectWithName, b: ObjectWithName) =>
  a.name > b.name ? -1 : 1;
