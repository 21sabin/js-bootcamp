// const fizzbuzz = function(num){
//     for(var i=1;i<=num;i++){
//         if(i % 3 ==0 && i % 5 == 0){
//             console.log("fizz buzz")
//         }else if(i % 5 == 0){
//           console.log("buzz")
//         }else if(i % 3 ==0 ){
//           console.log("fizz ");
//         }else{
//           console.log(i)
//         }
//     }
// }

// fizzbuzz(15);


// const nums = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9,
//   10, 11, 12, 13, 14, 15
// ];

// function fizzbuzz( acc , element ){
//   console.log(acc , element);
//   if( element % 3 == 0 ) {
//     return {
//       ...acc,
//       [element]:'fizz'
//     }
//   }
//   if( element % 5 == 0 ) {
//     return {
//       ...acc,
//       [element]:'buzz'
//     }
//   }
//   return {
//     ...acc,
//     [element]:''
//   }
// }

// console.log(nums.reduce(fizzbuzz),{})

// const contacts = [
//   { name: "abin", phone: "988494993933" },
//   { name: "siagal", phone: "988494993933" },
//   { name: "anuj", phone: "988494993933" },
//   { name: "anup", phone: "988494993933" },
//   { name: "sandep", phone: "988494993933" },
//   { name: "sawdf", phone: "988494993933" },
//   { name: "anup", phone: "988494993933" },
//   { name: "kian", phone: "988494993933" }
// ];

// function searchByName( acc , contact ){
//   const name = contact.name;
//   return {
//     ...acc,
//     [name]:{...contact}
//   }
// }

// console.log(contacts.reduce(searchByName),{})

// const fileLines = [
//   'Inspector Algar,Inspector Bardle,Mr. Barker,Inspector Barton',
//   'Inspector Baynes,Inspector Bradstreet,Inspector Sam Brown',
//   'Monsieur Dubugue,Birdy Edwards,Inspector Forbes,Inspector Forrester',
//   'Inspector Gregory,Inspector Tobias Gregson,Inspector Hill',
//   'Inspector Stanley Hopkins,Inspector Athelney Jones'
// ];

// function splitLine( acc , name ){
//  return acc.concat(name.split(','))

// }

//  console.log(fileLines.reduce(splitLine),[])

// const readings = [0.3, 1.2, 3.4, 0.2, 3.2, 5.5, 0.4];

// let minvalue = readings.reduce((x,y)=>{
//   return Math.min(x,y),Number.MIN_VALUE
// });

// console.log(minvalue)