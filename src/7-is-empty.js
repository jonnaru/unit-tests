export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject;

  if (stringArrayOrObject.length < 1) return true; // checks both string and array

  if (Object.keys(stringArrayOrObject).length === 0 && type === "object")
    // https://www.samanthaming.com/tidbits/94-how-to-check-if-object-is-empty/
    return true;

  return false;
};

/*
const jonna = ""
jonna.length === 0

const object = {name: "jonna"} // name is an object key (jonna is a value)

*/
