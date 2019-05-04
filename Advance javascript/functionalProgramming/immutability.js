//main concept of immutability is not to change the state of an object
//inste returning the copy of an object

const obj = {name:'andreno'};

function clone(  ){
    return { ...obj};
}

function updateOne( object ){
    return clone(object)
}

updateOne(obj);
console.log(obj)
