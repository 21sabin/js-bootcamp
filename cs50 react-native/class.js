class Set {
    constructor( arr ){
        this.arr = arr ;
        console.log(this.arr,'array')
    }

    add( val ){
        console.log(this.hasVal( val ))
        if( !this.hasVal( val )) {
            this.arr.push(val);
            console.log( this.arr,"added")
        }
    }

    delete( val ){
        return this.arr.filter(x=>x!==val)
    }

    hasVal( val ){
        return this.arr.includes( val );
    }

    size(){//get is an javascipt syntax for displaying its member variables
        console.log( this.arr,"size")
        return this.arr;
    }
}

const s = new Set([1,2,3]);
s.add(4);
s.size();

console.log(Array.from('123'));


//React state;
    //when updating to the state use array desctructuring [...this.state.text] instead of this.state.array.push method.


const obj = [ 
    {
        id:1,
        name:'sabin'
    }, {
        id:2,
        name:'sabin'
    }, {
        id:3,
        name:'sabin'
    }
];

// let newObj = obj.map(o=>{
//     if( o.id !==2) return o; 
//     return {
//         id:o.id,
//         name:'anup'
//     }
// });
// console.log(newObj);
let newObj = obj.map(o=>{
   return {
       ...o,
       isSelected:false
   }
});
console.log(newObj)

const obj =[
    {
        id:1,
        name:'abc'
    },
    {
        id:1,
        name:'xyz'
    },
    {
        id:3,
        name:'abc'
    }
];

const unique = [...new Set(obj.map(item=> item.name))];
console.log( unique)

