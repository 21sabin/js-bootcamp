const meanMeadianMode = function(array){
  return {
    mean:mean(array),
    median:median(array)
  }
}

const mean=(array)=>{
  var sum = 0;
  array.forEach(num=>{
    sum = sum +num;
  })
  return sum/array.length;
}

const median=(array)=>{

  array.sort((a,b)=>{
      return a-b;
  })
  console.log(array)
  if(array.length%2==0)
    return array[array.length/2];
    else{
      var index = Math.ceil(array.length/2);
      return array[index]
    }
}

const mode = (array)=>{
  var modeObj ={};
  array.forEach(num=>{
    console.log(num,"num")
    if(!modeObj[num]) {modeObj[num]=0;}
    modeObj[num]++;
  })

var maxFrequency = 0
var modeResult =[]
  for(var prop in modeObj){
    if(modeObj[prop]>maxFrequency){
      modeResult = [prop]
        maxFrequency=modeObj[prop];
    }else if(modeObj[prop]==maxFrequency){
        modeResult.push(prop)
    }
  }

  return modeResult;

}

console.log(mode([1,2,5,3,4,4]),"result")
