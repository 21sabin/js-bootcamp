function revere( string ){
    var result=''
    const array = string.split('');
    console.log(array)
    for( var i=array.length-1;i>=0;i--){
        console.log(array[i],'sd11fd')
        result+= array[i]
    }
    console.log('resu;t',result)
    return result;
}

console.log( 'sdf',revere('io io'))

//reversing string with built in javascript methods
function reverse2( str ) {
    return str.split('').reverse().join();

}

var str='sdfds';
var str1 = [...str];
console.log(typeof str1,'sdfds')
console.log(...str,'...')