function hashing( key , max ){
    var hash = 0;
    for( let i=0; i<key.length; i++ ) {
         hash += key.charCodeAt(i);
        
    }
    return hash % max;
}

function HashTable( key , value ){

    const storage =[];
    const storateLimit = 4;

    this.print = function(){
        console.log(storage,"bucket")
    }

    this.add = function( key ,value ){
         var hash = hashing( key , storateLimit );
         console.log(hash)
         if( storage[hash] === undefined ){
            storage[hash] = [[ key, value ]]
         }else{
             var inserted = false;
             for( let i=0;i<storage[hash].length;i++){
                if( storage[index][i][0] === key){
                    storage[index][i][1] = value;
                    inserted = true;
                }
             }
             if(inserted == false){
                storage[index].push([key,value])
             }
         }
    }

    this.remove = function( key ){
        let index = hashing( key ,storateLimit );
        console.log(index)
        for( let i=0 ; i<storage[index].length;i++){
            if( storage[index][i][0] == key ){
                storage[index].splice(i,1);
            }
        }
    }

    this.lookup = function( key ){
        let hash = hashing( key , storateLimit );
        console.log(hash,"lookup")
        for( let i=0 ; i<storage[hash].length ; i++){
            if( storage[hash][i][0] === key ){
                return storage[hash][i]
            }else{
                return undefined;
            }
        }
    }
}
var h = new HashTable();
h.add('sabin',4)
h.add('xrda',3);
h.add('ew',3);
h.remove('ew');
console.log(h.lookup('sabin'),"d")


console.log(h.print());
