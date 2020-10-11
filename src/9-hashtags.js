export const hashtags = (text) => {
  return text.split(/\s/).filter((word) => word.charAt(0) === "#");
};

/*

1. text.split divides the sentense to an array
2. at every space, /\s/ is regex for blank space
3. filters every word in the array
4. returns the words with character # at index 0, charAt() is a string method

*/
