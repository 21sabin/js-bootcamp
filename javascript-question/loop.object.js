const fruits = {
    apple: 28,
    orange: 17,
    pear: 54,
  };

  const keys = Object.keys(fruits);
  const values = Object.values(fruits);
  const entries = Object.entries(fruits)
  console.log(entries);
  let obj ={}

  for( const key of keys ){
      
    obj={
        [key]:fruits[key].toFixed(2)
    };
    console.log(obj)
   
  }
//   console.log(obj,"obj")

// const result = keys.map(key=>{
//     return {

//     }
// })