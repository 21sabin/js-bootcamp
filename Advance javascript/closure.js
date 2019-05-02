// // //definatin of closure = function + lexical scope

// // var array =[1,2,3,4];
// // for( var i=0 ;i<array.length ; i++){
// //     (function closure(i){
// //         console.log('i am at index'+i)
// //     })(i)
// // };
// // var counter = 0;
// // function add (){
// //     var counter = 0
// //     counter=counter+1;
// //     return counter
// // }
// // add();
// // add()
// // console.log(add())
// // counter=10;
// // console.log(counter);

// var fun = (function (){
//     var count = 0;
//     return function (){
//         return count=count+1;
//     }
// })();
// console.log(fun());
// console.log(fun());


// function multiply(x){
//     return function b (y){
//         return x*y;
//     }
// }

// console.log(multiply(2)(3))

for( var i=0 ;i<3 ; i++){
    (function closure(i){
        setTimeout(()=>console.log('i am at index'+i),3000)
    })(i)
};