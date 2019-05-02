
//only functions have the prototype property
//Note:__proto__ points to the prototype object
let dragon ={
    name:'kelly',
    fire:true,
    sing:()=>{
        console.log('hello'+this.kelly)
    },
    strength:'good'
};

let lizard ={
    name:'belly',
    fight(){
        return 1;
    }
}

// const newLizard = dragon.sing.bind(lizard);
// newLizard()


//prototyple inheritance to inherites propertises
lizard.__proto__ = dragon;
console.log(lizard.__proto__.__proto__.__proto__)
let person = { name:'sabin'};
let lname = Object.create(person);//create a new object base on certain object
console.log(lname.name)
