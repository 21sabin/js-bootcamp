const harmlessRansome = function(noteText , magazineText ){
    var noteTextArr = noteText.split(' ');
    var magazineTextArr = magazineText.split(' ');
    var magazineObj={};
    magazineTextArr.forEach(word=>{
        if(!magazineObj[word]){
           magazineObj[word] = 0;
        }
        magazineObj[word]++;
    })
    var noteIsPossible= true;
    console.log(magazineObj)
    noteTextArr.forEach(note=>{
      console.log(note,"note")
      if(magazineObj[note]) {
        if(magazineObj[note]>0){
          magazineObj[note]--;
          noteIsPossible = true;
          console.log("true")
        }else{
          console.log("false")
          noteIsPossible=false;
        }
      }else{
        console.log("false")
         noteIsPossible=false;
      }
    })
    return noteIsPossible
}

console.log(harmlessRansome("my name my","my name"));


// var obj={
//   sdf:"sabin"
// }
//
// if(!obj['name']){
//   console.log("name doesnot exits")
//     obj['name']="shrestha"
// }
// console.log(obj)
