class Node {
    constructor( value ){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor( value ){
        this.head = new Node( value );
        this.tail = this.head;
        this.length = 1;
    }

    append( value ){
        const newNode = new Node( value );
        newNode.prev = this.tail;
        this.tail.next = newNode;
        newNode.next = null;
        this.length++;
        return this
    }

    prepend( value ){
        let newNode = new Node( value );
        newNode.next = this.head;
        console.log(this.head)
        this.head = newNode;

        this.length++;
        return this
    }

    insert( index , value ){
        let leader = this.traverseToIndex( index-1);
        console.log('leader',leader)
        let follower = leader.next;
        const newNode = new Node( value );
        leader.next = newNode;
        newNode.next = follower
        newNode.prev = leader;
        follower.prev = newNode;
        this.length++;
        return this.printList();
    }

    printList(){
        let array = [];
        let currentNode = this.head;
        while( currentNode!==null ){
            array.push( currentNode.value )
            currentNode = currentNode.next;
        }
        return array
    }

    getPreviousOfCertainIndex( index ){
        let node = this.traverseToIndex( index );
        return node.prev;
    }

    reomove( index ){
        let currentNode = this.head;
        let leader = this.traverseToIndex( index - 1);
        let follower = leader.next;
        leader.next = follower.next;
        follower.prev = leader
        return this.printList();
    }

    traverseToIndex( index ){
        let currentNode = this.head;
        let counter = 0;
        while( counter != index ){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
}

const d = new DoubleLinkedList( 10 );
 d.append(11);
// d.prepend(9)
d.insert( 1 ,10.5)
d.insert( 2 ,12);
// console.log("***",d.getPreviousOfCertainIndex(3))
console.log(d.printList())
console.log(d.head)