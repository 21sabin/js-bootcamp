// //Merge Sort algorithm
// // 1.It uses Divide and conquer method
// function mergeSort(arr) {
//     if (arr.length === 1) {
//         return arr;
//     }

//     const center = Math.floor(arr.length / 2);
//     const left = arr.slice(0, center);
//     const right = arr.slice(center);

//     return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//     const results = [];

//     while (left.length && right.length) {
//         if (left[0] < right[0]) {
//             results.push(left.shift());
//         } else {
//             results.push(right.shift());
//         }
//     }

//     return [...results, ...left, ...right];
// }

// console.log(mergeSort([92, 7, 100, 45, 98]))

// Challange 1

let strings = ['ab', 'cd', 'e', 'j', 'asd', 'ljffg', 'df'];

fun