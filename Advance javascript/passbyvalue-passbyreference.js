const obj = { name:'john'};
obj.address = 'lubhoo';
console.log(obj);

//to change object without affecting the orginal one we need to do clone
//1 clone of an object is done with Object.assigna and object destructuring
const clone = {...obj};
clone.lname = 'shrestha';
console.log(obj,clone);

const person = {
    name:'Harry',
    address:[{
        street:'town plan',
        city:'kathmandu',
        state:'nepal',
        postalcode:44600
    }]
};
const clone2 = Object.assign({},person);
clone2.lastname='poter';
clone2.address[0].new='autralia';

console.log(person,clone2)