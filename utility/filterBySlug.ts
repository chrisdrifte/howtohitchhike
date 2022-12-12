export const filterBySlug =
  (matchSlug: string) =>
  ({ slug }) =>
    slug === matchSlug;
