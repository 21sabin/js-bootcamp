// var myGen = function*(){
//     var one = yield 1;
//     return one+1;
// }

// var myGen = myGen();
// console.log(myGen.next())
// console.log(myGen.next(1))

// function *generatorFunction(){
//     console.log("this is executed first");
//     yield "hello"
//     console.log("I will be printed after pausse");
//     yield "world";
// }

// const generatorObject =  generatorFunction();
// console.log(generatorObject.next())
// console.log(generatorObject.next())
// console.log(generatorObject.next())

var asyncFunction = async ()=>{
    setTimeout(()=>"world",1000)
}