/**
 * If given an item or array of items, returns an array of items
 */
export const forceArray = <T>(maybeArray: T | T[]): T[] => {
  if (maybeArray == null) return [];

  return typeof maybeArray === "object" && maybeArray instanceof Array
    ? maybeArray
    : [maybeArray];
};
