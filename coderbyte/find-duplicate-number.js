var array = [1,2,3,4];



let result = array.reduce((accu,value)=>{
    console.log(accu)
    if(accu[value]){
        console.log('true');
        return {
            ...accu,
            [value]:accu[value]+1
        }
        
    }else{
        return {
            [value]:0
        }
    }
},{});

console.log(result)