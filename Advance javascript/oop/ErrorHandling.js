//Error is an constructor function . It has an name , stack and message property

// function a(){
//     try{
//         throw new Error('oops somethisn went wrng');
//     }catch(error){
//         console.log(error.name,error.message,error.stack)
//     }
// }

// a();

//async way of handling an error
function b(){
    Promise.resolve().then((res)=>{
        // throw new Error('error at parent')
        Promise.resolve().then((res)=>{
            throw new Error('error occured at child promise')
        }).catch(error=>{
            // console.log('error handled at child')
            return error
        }).then(e=>{
            console.log(e)
        })
    }).catch(error=>{
        console.log(error,"parent promise")
    })
}
b()
