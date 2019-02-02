const palindrom = function(string){
    var stringArr = string.toLowerCase().split('');
    var validAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    var letter = []
    var validCharacter = stringArr.forEach(character => {
        if(validAlphabet.indexOf(character)>-1) letter.push(character)
    });
    console.log(letter.join(''))
    console.log(letter.reverse().join(''))
    if(letter.join('') == letter.reverse().join('')){
        console.log("true");
        return true;
    }
    else return false;
}


console.log(palindrom("sabin"));


//string.split('')  converts an string into character of array
//array.join() return character of array into string
