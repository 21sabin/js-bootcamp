// 1.Given an array of potential voters, return an object representing the results of the vote

var voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false },
    { name: 'Zack', age: 19, voted: true }
];

function voterResults(arr) {
    // your code here
    return arr.reduce((acc, voter) => {
        let age = voter.age;
        let cat_name = age >= 18 && age <= 25 ? 'young' : age >= 26 && age <= 35 ? 'youth' : age >= 36 && age <= 55 ? 'old' : 'not found'
        return {
            ...acc,
            [cat_name]: (acc[cat_name] || 0) + 1
        }
    }, {})
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ youngVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  oldVotes: 3,
  olds: 4
}
*/