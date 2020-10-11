export const firstLast = (items) => {
  // items = array
  if (items.length === 1) return `Only item: ${items[0]}`; // array has one item
  if (items.length === 0) return "No items!"; // array is empty
  return `First: ${items[0]}, Last: ${items[items.length - 1]}`; // last index is one less than length
};
