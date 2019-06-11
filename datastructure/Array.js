class Array {
    constructor(){
        this.data={};
        this.length=0
    }

    get( index ){
        return this.data[index];
    }

    push( item ){
        this.data[this.length] = item;
        this.length ++ ;
        return this.length
    }

    pop(){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        console.log(this.data,'pop')
        this.length--;
        return lastItem;
    }

    delete( index ){
        const deleteItem = this.data[index];
        this.shiftItem(index);
    }

    shiftItem( index ){
        for( let i = index ; i<this.length-1;i++){
            this.data[index] = this.data[index+1];
        }
        delete this.data[index]

    }
}

const array = new Array();
array.push('hello');
array.push('i am a prgrammer')
array.delete(1);
console.log(array)

let obj ={a:'sabin'};
delete obj['a'];
console.log(obj)