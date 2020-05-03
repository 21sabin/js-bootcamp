let capacity = Number.MAX_SAFE_INTEGER;
++capacity;
console.log(capacity)

// const foo = null ?? 'default string';
// console.log(foo);
//1. Nullish caolescing operator ?? = this operator is used to check the null and undefined value. if varaiable is null or undefined it returns right side value
// console.log(null ?? 'This value is returned')


// 2. optional chaining
let x = { prop1: { prop2: 'sdf' } }
x.prop1?.prop1


// 3.string # matchall = it gives all the matched string in array of object along with their index and input orginal value
const regexp = /[a-c]/g;
const str = 'abc'

console.log(str.mat)