function PrioritQueue() {
    
    this.collection = [];

    this.enqueue = function( element ){
        console.log(this.isEmpty())
        if( !this.collection.length > 0 ){
            return this.collection.push( element );
        }

        for( let i=0 ; i<this.collection.length ;i++){
            if( element[1] < this.collection[i][1]){
                return this.collection.splice(i,0,element);
            }else{
                return this.collection.push(element)
            }
        }
    }

    this.front = function(){
        console.log("highest priority element",this.collection.shift())
    }

    this.display = function(){
        console.log(this.collection,"collection");
    }

    this.rear = function(){
        console.log(this.collection.pop())
    }

}

const q = new PrioritQueue();
q.enqueue(['sabin',2]);
q.enqueue(['anup',1])
q.enqueue(['xyz',4])
q.display();
q.front();
