function Queue (){
    this.collection = [];
    
    this.enqueue=function( value ){
        this.collection.push(value);
    }

    this.dequeue=function(){
        return this.collection.shift();
    }

    this.size = function(){
        return this.collection.length;
    }

    this.display = function(){
        for( let i=0;i<this.collection.length;i++){
            console.log('Element '+i +"="+this.collection[i])
        }
    }
}

// const q = new Queue();
// q.enqueue("sabin");
// q.enqueue('anup');
// q.display();
// console.log(q.dequeue()
// )

const array =['sabin','shrestha','anup']
array.splice(1,0,'new value')
console.log(array)
var a = array.pop();
var b = array.shift();
array.splice(0,0,a);
array.splice(array.length-1,0,b)
console.log(array)