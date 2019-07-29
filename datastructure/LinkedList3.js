class Node {
    constructor( value ){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor( value ){
        this.head = new Node( value );
        this.length = 1;
        this.tail = this.head
    }

    insertFirst( value ){
        const newNode = new Node( value );
        let currentNode = this.head;
        this.head = newNode;
        this.head.next = currentNode;
        this.tail = currentNode
        this.length ++;
        return this;
    }

    insertLast( value ){
        const newNode = new Node( value );
        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    }
}

const l = new LinkedList( 1 );
l.insertFirst( 2);
l.insertFirst(3);
l.insertLast(4)
console.log(l)

var obj ={ a:1};
var obj1 = obj;
obj1.a = 2;
obj1.a = 2
console.log(obj1)