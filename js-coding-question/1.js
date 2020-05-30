// 1.Find the missing number in a given integer array of 1 to 100
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 10];

function findMissingNumber(arr) {
  let missing;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 != arr[i + 1]) {
      missing = arr[i] + 1;
    }
  }
  return missing
}

console.log('missing_elements', findMissingNumber(arr))



