// const map = new Map();
// map.set('color','red','name','sabin');
// map.set('age','2');
// console.log(map.entries(),"d")

// for( const v of map.values()){
//     console.log(v)
// }

// for( const [k,v] of map.entries()){
//     console.log(k,v)
// }

// const array = [
//     { id: 3, name: 'Central Microscopy', fiscalYear: 2018 },
//     { id: 5, name: 'Crystallography Facility', fiscalYear: 2018 },
//     { id: 3, name: 'Central Microscopy', fiscalYear: 2017 },
//     { id: 5, name: 'Crystallography Facility', fiscalYear: 2017 }
//   ];
// const result = [];
// const map = new Map();
// for (const item of array) {
//     if(!map.has(item.id)){
//         map.set(item.id, true);    // set any value to Map
//         console.log(map)}
// }
// console.log(result)

const customers = [
  {
    name: "Tyrone",
    personal: {
      age: 33,
      hobbies: ["Bicycling", "Camping"]
    }
  },
  {
    name: "Elizabeth",
    personal: {
      age: 25,
      hobbies: ["Guitar", "Reading", "Gardening"]
    }
  },
  {
    name: "Penny",
    personal: {
      age: 36,
      hobbies: ["Comics", "Chess", "Legos"]
    }
  }
];
// let hobbies;

// hobbies should be: ["Bicycling", "Camping", "Guitar", "Reading", "Gardening", "Comics", "Chess", "Legos"]
// Write your code below

hobbies = customers.reduce((a, personal) => { [ ...a, ...personal.hobbies];}, []);
console.log(hobbies)