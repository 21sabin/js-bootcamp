// Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.

// Return a boolean value (true or false).
// The string can contain any character.
// When neither an x nor an o is in the string, return true.

const checkString = ( string )=>{
    var char = [];
    for( let i=0;i<string.length;i++){
        char.push(string[i])
    }
    var result = countChar( char );
    if((result['x'] == 2 && result['y']==2)  ){
        return true;
    }else{
        return false;
    }
  
}

const countChar = ( array )=>{
  let result = array.reduce((acc,val)=>{
      return {
        ...acc,
        [val]:(acc[val] || 0) +1
      }
  },{})
    return result;
}

console.log(checkString('zpzpzpp'));

// check if two array is same or not
function checkEquals(arr1, arr2) {
	if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
  	return true 
  } else {
  	return false
  }
}

function checkEquals(arr1, arr2) {
	if (arr1.join("") === arr2.join("")) {
  	return true 
  } else {
  	return false
  }
}

var obj1={a:'1',b:'2',c:'3'};var obj2={a:'1',b:'2'};
if(JSON.stringify(obj1)==JSON.stringify(obj2)){
    console.log(true)
}else{
    console.log(false)
}


var string='sabin'
function makeTitle(str) {
	return str
        .split(' ')
        .map(function(word) {
            return word[0].toUpperCase() + word.substr(1);
        })
        .join(' ');
}
// console.log(string.slice(1),string,"slice")
// console.log(string.charAt(0).toUpperCase() + string.slice(1))
let u = string.charAt(0).toUpperCase();
console.log(string.substr(2),"u")
console.log(string.slice(1))