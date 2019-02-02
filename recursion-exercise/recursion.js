// //factorial

// const factorial = n =>{
//     if( n==0){
//         return 1;
//     }else{
//        return n*factorial(n-1)
//     }
// }

// console.log(factorial(n))

//greatest common divisior

var a =5,b=25;
var aFactor=[];
var bFactor=[];
var commonDivisior=[]

for(var i=1;i<=a;i++){
    if(a%i==0){
        aFactor.push(i)
    }
}

for(var i=1;i<=b;i++){
    if(b%i==0){
        bFactor.push(i)
    }
}

for(var i=0;i<aFactor.length;i++){
    
        if(a%aFactor[i]==0 && b%aFactor[i]==0){
            commonDivisior.push(aFactor[i])
            console.log(aFactor[i],"i")
        }
        // if(a%aFactor[i] && b%aFactor[i]){
        //     commonDivisior.push(bFactor[i])
        // }

}

for(var i=0;i<bFactor.length;i++){
    
    if(a%bFactor[i]==0 && b%bFactor[i]==0){
        commonDivisior.push(aFactor[i])
        console.log(aFactor[i],"i")
    }
    // if(a%aFactor[i] && b%aFactor[i]){
    //     commonDivisior.push(bFactor[i])
    // }

}
var number = 0;
for( var i=0;i<commonDivisior.length;i++){
    
    if(commonDivisior[i] > number){
        number = commonDivisior[i]
    }
}

console.log(number,"common")

console.log(aFactor,bFactor)