export const filterNumbers = (array, largerThan) => {
  // filter the array and sends back the items less or equal to largerThan
  return array.filter((item) => item <= largerThan);
};


/*
export const filterNumbers = (array, largerThan) => {

  const filteredArray = array.filter(item => {
    return item <= largerThan
  })

  return filteredArray;
};

*/
