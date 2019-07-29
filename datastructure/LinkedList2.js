//10-5-4

class Node {
    constructor( value  ){
        this.value = value;
        this.next = null;
        this.length = 1;
    }
}
class LinkedList {
    constructor( value ){
        this.head = {
            value,
            next:null
        }
        this.length = 1;
        this.tail = this.head;
        console.log('tail',this.tail)
    }

    append( value ){
        const newNode = new Node( value );
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend (value ){
        const newNode = new Node( value );
        console.log('newNode ', newNode)
        newNode.next = this.head;
        this.head = newNode;
        this.length++
        return this;
    }

    printlist(){
        let array = [];
        let currentNode = this.head;
        while( currentNode!==null ){
            array.push( currentNode.value );
            currentNode = currentNode.next;
        }
        return array;
    }

    insert( index , value ){
      if( index >= this.length ){
            this.append( value );
      }
        const newNode = new Node( value );
        const leader = this.traverseToIndex( index - 1 );
        const pointingNode = leader.next;
        leader.next = newNode;
        newNode.next = pointingNode;
        this.length++;
        return this.printlist();

    }

    remove( index ) {
        if( index > this.length ){
            console.log('node cannot be deleted at index');
            return ; 
        }
        let currentNode = this.head;
        let counter = 0;
        while( counter!==index-1 ){
            currentNode = currentNode.next;
            counter++;
        }
        let unwantedNode = currentNode.next;
        currentNode.next = unwantedNode.next;
        this.length--;
        // let pointingNode = currentNode.next.next;
        // currentNode.next = pointingNode;
        return this.printlist();

    }

    traverseToIndex( index ){
        let counter = 0;
        let currentNode = this.head
        while( counter!==index ){
            currentNode = currentNode.next;
            counter ++ ;
        };
        return currentNode;
    }

    reverse(){
        if( !this.head.next ){
            return this.head
        }
        let first = this.head;
        let second = first.next;


        while( second ){
            let temp = second.next ; 
            second.next = first ;
            console.log('second',second); 
            first = second;
            console.log('first',first)
            second = temp;
            console.log('sec',second)
            debugger;
        }
        this.head.next = null;
        this.head = first;
        return this.printlist();
    }
}

const l = new LinkedList( 10 );
l.append( 5);
l.append(4);
l.append(16);
l.prepend(1);
// l.insert(3,6);
// l.remove(1)
console.log( l.printlist())
console.log('reverse linked list',l.reverse())
console.log( l.printlist())  
console.log('linked list',l);