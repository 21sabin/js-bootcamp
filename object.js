// const o = new Object();
// o['lastname']=[]
// console.log(o['lastname'])
// if(o['lastname']){
//     console.log("true")
// }

//shallow copy and deep copy in javascript
//deep copy means copying the nested object only to the new object
//object are mutable and primitive types are immutable
//object are store by reference


//* prototype inheritance
    // num.__proto__ gives all the method associated with that instance

// const o = {
//     firtname:'jordan hayasi',
//     bio:{
//         teaching:true,
//         instructor:"harvard university",
//         prof:"software engineer"
//     }
// }

// function deepCopy( obj ){
//     var keys = Object.keys(obj);
//     newObject={}
//     console.log(keys,"keys");
//     for(var i=0;i<keys.length;i++){
//         if( typeof obj[keys[i]] ==='object'){
//             newObject[key[i]]=deepCopy(obj[keys[i]])
//         }else{
//             return obj[keys[i]]
//         }
//     }
// }

// console.log(deepCopy(o),"0")

// const newObject = Object.assign({},o);
// console.log(newObject,"newOBject")

//javascript prototyping

// const obj = new Object();
// console.log(Object.getPrototypeOf(obj))

// thisIsVar();
// const thisIsVar=()=>{
//     console.log("this is var")
// }

var arra =[1,2,3,4,5];
console.log( arra.splice(1,3))
