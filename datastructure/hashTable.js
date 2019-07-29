class HashTable {
    constructor( size ) {
        this.data = new Array( size );
        console.log( 'hash table:',this.data )
    }

    _hash( keys ){
        let hash = 0 ;
        for( let i = 0; i<keys.length ; i++ ){
            hash = ( hash + keys.charCodeAt( i )) % this.data.length
        }
        console.log('hash value',hash)
        return hash;
    }

    set( key , value ){
        let address = this._hash( key );
        if( !this.data[ address ] ){
            this.data[address]=[]
        }
        this.data[address].push([ key , value ]);
        console.log( 'data',this.data)
    }

    get( keys ) {
        let address = this._hash( keys );
        let bucket = this.data[address];
        if( bucket ){
            for( let i = 0 ; i < bucket.length ; i++ ){
                if( bucket[i][0] == keys ){
                    return bucket[i][1];
                }
            }
        }
        return undefined
    } 
}

let h = new HashTable( 4 );
h.set('grapes',1000);
h.set('appldde',2000);
console.log(h.get('grapes'))
//structure of hash table 
// [
//     'address1':[ [ 'grapes',1000],
//     'address2':[ [ 'apples',2000]]

// ]
