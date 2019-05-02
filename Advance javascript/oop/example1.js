let elf = {
    
    attack(){
        console.log(`Attack with`+this.weapon)
    }
}

function createElfe( name , weapon ){
    newElfe = Object.create(elf);

    console.log(newElfe.__proto__) //Object.create creates a prototpe chain with elf object
    newElfe.name = name;
    newElfe.weapon = weapon;
    return newElfe
}

const elfe1= createElfe('haryy','stone');
console.log(elfe1.attack())