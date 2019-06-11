// const names = ['John', 'Paul', 'George', 'Ringo', 'John'];

//  ways to remove duplicate value
// 1. let array=[];
//  names.forEach((x,i)=>{
//     console.log( array.indexOf(x))
//      if( array.indexOf(x) < 0 ){
//          console.log(x)
//         array.push(x)
//      }
   
//  });

//  console.log(array)

//2. const set = new Set([...names]);
// console.log(set)




// function removeDups(names) {
//   let unique = {};
//   names.forEach(function(i) {
//       console.log(i)
//     if(!unique[i]) {
//       unique[i] = true;
//     }
//     console.log(unique)
//   });
//   return Object.keys(unique);
// }

// console.log(removeDups(names))


// const test = ( a,b ,cb)=>{
//     cb( a+b)
// };

// setTimeout(()=>{
//     test( 1,2 ,(result) =>{
//         console.log(result)
//     })
// },2000)

let timer = setInterval(()=>console.log(2000),1000);
setTimeout(()=>{
    clearTimeout(timer)
},4000)