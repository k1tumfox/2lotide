
//plan, partition, test
// return an array containing middle-most element of source array 
// returned array can vary between 1 and 2
//   - odd # ele, single ele array returned
//   - even, 2 ele array
// arrays with one or two elements, return empty array

const middle = (arr) => {

  const middleArr = []; 
  // det treatment based on length conditional
  if (arr.length % 2 === 0) {
    const midIndex2 = arr.length / 2;
    const midIndex1 = midIndex2 - 1;
    middleArr.push(arr[midIndex1], arr[midIndex2]);
  } else {  // 5/2 = 2.5 -> Math.floor() -> arr[2] = middle element
            // 9/2 = 4.5 -> arr[4] = middle ele
    const midIndex = Math.floor(arr.length / 2);
    middleArr.push(arr[midIndex]);
  }
  return middleArr;
};

module.exports = middle;
