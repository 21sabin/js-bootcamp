//time complexity of merger sort = O(nlogn)
//space complexity of merge sort = o(n)


function mergeSort( arr ){
    if (arr.length === 1) {
        // return once we hit an array with a single item
        return arr
      }

      const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
      const left = arr.slice(0, middle) // items on the left side
      const right = arr.slice(middle) // items on the right side
      return merge(
        mergeSort(left),
        mergeSort(right)
      )
}

function merge (left, right) {
    let result = []
    let indexLeft = 0
    let indexRight = 0
  console.log( left , right , 'left - right' )
    while (indexLeft < left.length && indexRight < right.length) {
       
      if (left[indexLeft] < right[indexRight]) {
        console.log(left[indexLeft] , right[indexRight] ,'value' )
        result.push(left[indexLeft])
        indexLeft++
      } else {
        result.push(right[indexRight])
        indexRight++
      }
      console.log( result , 'result')
    }
  
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
  }

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]
console.log(mergeSort(list)) 