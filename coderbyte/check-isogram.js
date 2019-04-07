//isogram is a word that doesnot contain repeted letters;
// Test.assertSimilar( isIsogram("Dermatoglyphics"), true );
// Test.assertSimilar( isIsogram("isogram"), true );
// Test.assertSimilar( isIsogram("aba"), false, "same chars may not be adjacent" );
// Test.assertSimilar( isIsogram("moOse"), false, "same chars may not be same case" );
// Test.assertSimilar( isIsogram("isIsogram"), false );
// Test.assertSimilar( isIsogram(""), true, "an empty string is a valid isogram" );

function isIsogram(str) {
  var isIsogram = true;
  var array = str.toLowerCase().split("");
  console.log(array)
  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
        console.log(array[i] ,array[j])
      if (array[i] == array[j]) {
        isIsogram = false;
        return false;
      }else{
          isIsogram = true
      }
    }
  }
  return isIsogram;
}
// function isIsogram(str){
//     var i, j;
//     str = str.toLowerCase();
//     for(i = 0; i < str.length; ++i)
//       for(j = i + 1; j < str.length; ++j)
//         if(str[i] === str[j])
//           return false;
//     return true;
//   }
// function isIsogram(str){ 
//     return !/(\w).*\1/i.test(str)
//   }

//   function isIsogram(str){
//     return new Set(str.toUpperCase()).size == str.length;
//   }


console.log( isIsogram("isIsogram"))


//## check if number is square root or not

const isSquare = n => Math.sqrt(n) % 1 === 0

console.log(isSquare(8))
console.log( Math.sqrt(7) % 1)