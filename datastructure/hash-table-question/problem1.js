//given an array [ 2,5,1,2,3,5,1,2,4] 
//it should return first repeting character i.e 2




function repetingChar( array ){
    let data =[]
    for( let i = 0; i< array.length ; i++ ){
        let address = array[i] % array.length;
        if( !data[address] ){
            data[address] = [];
            data[address].push(array[i])
            console.log(data)
        }else {
            return data[address][0]
        }
        console.log( address )
    }
}
console.log( repetingChar([ 2,5,5,2,3,5,1,2,4] ));
