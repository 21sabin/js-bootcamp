// const fruitBasket = ['banana', 'cherry','banana','orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
// // const count = fruitBasket.reduce( (tally, fruit) => {
// //   tally[fruit] = (tally[fruit] || 0) + 1 ;
// //   console.log(tally[fruit],"df")
// //   return tally;
// // } , {})

// // const count = fruitBasket.reduce( (accu,value)=>{
// //     if(accu[value] > 0){
// //         accu[value]+=1
// //         return accu;
// //     }else{
// //         accu[value]=1;
// //     return accu;    }
// // },{})

// // console.log( count ,"result");

// // let array = [1,2,3,4];
// // const averate = array.reduce( (accumulator , current ,index ,a)=>{
// //     if( index == array.length-1){
// //         accumulator+=current;
// //     }else{
// //         return accumulator/a.length
// //     }
// //     return accumulator/array.length
// // } );

// // console.log(averate)

// // const count = fruitBasket.reduce( (accumulator , current) =>{
// //      accumulator[current] = (accumulator[current] || 0) +1;
// //     return accumulator;
// // },{})

// // console.log(count)



// const PRODUCTS = [
//     {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
//     {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
//     {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
//     {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
//     {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
//     {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
//   ];

//   const result = PRODUCTS.reduce((accu,val)=>{
//     let category = val.category;
//     return {
//         ...val,
//         [category]:[...accu[val.category]|| [],val]
//     }
//   },{});



// console.log(result,"products")

// let array = [{ score: 2 }, { score: 2 }]
// let result = array.reduce((acc, v) => {
//   console.log("aacc", acc); console.log('value', v);
//   return acc + v.score
// }, 0)

// console.log('reducre resut', result)


function mapPhoneNumber(number) {
  let phonenumber = ''
  for (let i = 0; i < number.length; i++) {
    console.log(number[i])
    phonenumber += parseInt(number[i]) ? number[i] : '';
  }
  return phonenumber
}

console.log('mapphone number', mapPhoneNumber("(+123) 456-7890"))