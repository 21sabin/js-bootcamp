// 2. Find a duplicate number in an array of integers

const arr = [1, 2, 2, 3, 4, 5, 6, 7, 7, 8, 6, 10, 10];

function duplicateNumber(arr) {
  let obj = {};
  let dup = []
  for (let i = 0; i < arr.length - 1; i++) {
    console.log(arr[i])
    if (obj[arr[i]]) {
      dup.push(arr[i])
    } else {
      obj[arr[i]] = arr[i]
    }
  }
  return dup
}

console.log(duplicateNumber(arr), arr.length)