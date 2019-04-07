// let array =  [3, 5, 2, -4, 8, 11];
// let sum = 7;

// function findTwoSum( array ){
//     console.log(array,"value")
//     let result =[];
//     for( let i=0;i<array.length;i++){
//         for(let j=i+1;j<array.length;j++){
//             var add = array[i]+array[j];
//             console.log(sum)
//             if( add == sum ){
//                 console.log(true)
//                 result.push(array[i]);
//                 result.push(array[j]);
//                 console.log(result)
//                 return result;

//             }
//         }
//     }
//     // console.log(result,"result")
//     // return result;
// }

// var result = findTwoSum(array);
// console.log(result,"22")

function twoSum(arr, S) {

    var sums = [];
    var hashTable = {};
  
    // check each element in array
    for (var i = 0; i < arr.length; i++) {
   
      // calculate S - current element
      var sumMinusElement = S - arr[i];
  
      // check if this number exists in hash table
      // if so then we found a pair of numbers that sum to S
      if (hashTable[sumMinusElement.toString()] !== undefined) { 
        sums.push([arr[i], sumMinusElement]);
        console.log(sums,"true",i)
      }
  
      // add the current number to the hash table
      hashTable[arr[i].toString()] = arr[i];
    //   console.log(hashTable,"hashtable")
  
    }
  
    // return all pairs of integers that sum to S
    return sums;
  
  }
  
 console.log( twoSum([3, 5, 2, -4, 8, 11], 7))