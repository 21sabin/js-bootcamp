//bind , call and apply to bing this
//bind returns an function where as call and apply imeediately invoks an function

//Es6 arrow notation to bind this keyword
//  arrow notation binds the same this keyword to the function at the time of declaration rathe than this key word at the time
// of functin invoked

const person = {
    name:'jordan',
    greet:function(){console.log('hello'+this.name)}
};

// console.log(person.greet.apply({name:'xy'}))
// this keyword will be vary based on how function is called
const greet = person.greet.bind( person );


const test = greet;
test();




//