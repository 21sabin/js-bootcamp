class Person {
    constructor( builder ){
        console.log( builder );
        this.name = builder.name;
        this.address = builder.address;
        this.email = builder.email
    }

    getPerson(){
        console.log(this)
    }
}

class PersonBuilder {
    constructor( name ){
        this.name = name;
    }

    setAddress( address ){
        this.address = address;
        return this;
    }

    setEmail( email ){
        console.log('email')
        this.email = email 
    }

    build(){
        return new Person( this );
    }

   
}

var b = new PersonBuilder('sabin').setAddress('addres').setEmail('email').b()
        

console.log(b,'builder')