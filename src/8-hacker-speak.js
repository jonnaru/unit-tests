export const hackerSpeak = (words) => {
  return words
    .replace(/a/gi, "4")
    .replace(/i/gi, "1")
    .replace(/s/gi, "5")
    .replace(/o/gi, "0")
    .replace(/e/gi, "3");
};

// regex https://regex101.com/
// g = global, changes all
// i = case insensitive, changes uppercase and lowercase
