const ceaserCipher = function(string , num){
  num = num % 26;
  console.log(num,"num")
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var alphabetArr = alphabet.split('');
    var newString = '';
    for(var i =0 ;i < string.length ; i++){
      if(string[i] == ' '){
        newString = newString.concat(currentLetter);
        continue;
      }
      var index = alphabetArr.indexOf(string[i]);
      console.log(index,"index");
      var newIndex = index + num;
      if(newIndex > 26 ){
          newIndex = newIndex - 26
      }
      if(newIndex < 0){
        newIndex = 26 + newIndex
      }
      var currentLetter = alphabetArr[newIndex];
      newString = newString.concat(currentLetter);
      console.log(currentLetter,"currentLetter")

    }
    return newString;

}

console.log(ceaserCipher("sabin dfdf",48)) // ucdkp
