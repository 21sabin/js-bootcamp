function LinkedList( element ){
    var head = null;
    var length =0;

    var Node = function ( element ){
        this.element = element;
        this.next = null;
    }

    this.head = function(){
        console.log(head,"head node")
    }

    this.size = function(){
        console.log(this.length,"Linked list length");
    }

    this.add = function( element ){
        const node = new Node( element );
        if( this.head == null){
            this.head = node;
        }else{
           const node = new Node( element );
           var currentNode = this.head;
           while( currentNode.next ){
            currentNode = currentNode.next;
           }
           currentNode.next = node;
        }
        // console.log(this.head)
        this.length ++ ;
    }
}

const n =new LinkedList();
n.add(2);
n.add(3);
n.add(4)
console.log(n.head())