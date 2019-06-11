const reverseArray = function(array){
    var temp ='';
    for(var i = 0 ;i < array.length /2 ; i ++){
        temp =array[i];
        debugger;
        array[i] = array[array.length-1-i];
        array[array.length-1-i] = temp;
    }
    return array;
}

console.log(reverseArray(['s','a','b','i','n']))
