class Node {
    constructor( value ){
        this.value = value;
        this.next = null;
    }
}


class Stack {
    constructor( value ){
        this.top = null;
        this.bottom = null;
        this.length=0;

    }

    push( value ){
        const newNode = new Node( value );
        if( !this.top ){
            this.top = newNode;
            this.bottom = newNode
            this.length++
        }
        let pointer = this.top;
        newNode.next = pointer;
        this.top = newNode

        return this;
    }

    pop(){
        if(this.length ==0 ){
            this.top = null;
            this.bottom = null
        }else{
            let pointer = this.top;
            this.top = pointer.next;
            this.length--;
        }
      
        return this
    }

    peek(){
        return this.top.value;
    }
}


const stack = new Stack();
stack.push('udemy');
stack.push('ftuforum');
stack.push('googe');
stack.pop();
// stack.pop();
// stack.pop();
// stack.pop()
console.log(stack)
