const obj = (function(){
    const sayHello =()=>{
        console.log("hello");
    }

    const sayGood = ()=>{
        console.log("good")
    }

    return {
        sayGood,
        sayHello
    }
})();

obj.sayGood();
obj.sayHello();

//self invoking funtion is also called iife ( immediate invoking function execution)

//# Higher order function
//map reduce filter

const addOne = (number)=>{
    return number + 1 ;
};

const x=[0,1,2,3];
console.log(x.map(addOne));

function add( x ,y ){
    return x+y;
};
console.log(x.reduce(add));

function filter( arry , fun ){
    const newArray = [];
    arry.forEach(val=>{
        newArray.push(fun(val))
    })
}
const greaterThanOne=( val )=>{
    return val >1
}
console.log(x.filter( greaterThanOne ))


//javascript is an synchronous language and single threaded