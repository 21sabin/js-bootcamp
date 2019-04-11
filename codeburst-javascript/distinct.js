const fruitBasket = ['banana', 'cherry','banana','orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];

// const distinct = fruitBasket.filter( ( value , index , array ) =>{
//   const result = array.indexOf(value) == index ;
//   console.log(result);
//   return result;
// });

// // const distinct = [ ...new Set(fruitBasket)]
// const set = new Set();
// set.


// console.log(distinct)

const array =[
    {id:1,name:'sdf'},{id:2,name:'sdf'},{id:1,name:'sdf'},{id:3,name:'sdf'},{id:2,name:'sdf'},{id:4,name:'sdf'}
]

const result = Array.from(new Set(array.map(x=>x.id))).map(y=>{
    return {
        id:y,
        name:array.find(z=>z.id==y).name
    }
});
console.log(new Map())

const obj = array.find(i=>i.id==3);
console.log(obj)