data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog'
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog'
    },
    {
      name: 'Red',
      age: 1,
      type: 'cat'
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog'
    },
  ];

const dog =  data.filter( x =>  x.type == 'dog' || x.type=='cat').map( y => {
   return y
 })
 .reduce( ( accumulator , currentvalue )=>{
     console.log( accumulator , currentvalue);
     return { age:accumulator.age + currentvalue.age}
 })
 console.log( dog,"dog")