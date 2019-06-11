// const users =[{name:'sabin'},{name:'suzan'},{name:'asin'}];

// function findUser(name){
//     const newUsers = [...users];
//     return newUsers.find(x=>x.name==name)
// }

// function isSelected( obj ){
//     console.log(obj)
//     return {...obj ,isSelected:true}
// }
// console.log(findUser('sabin'))
// const compose1 = ( fn1 , fn2 )=>( data )=>fn1(fn2(data));
// const markUserIsSelected = compose1( isSelected , findUser);
// console.log(markUserIsSelected( 'suzan' ))

//note
//compose and pipe
//compose is used to combine multiple function
//the output of one function is given as input to another function
//practicle use of compose is to assemble multiple components
//compose accespt multiple function and executed in right to left order
//Always try to make function small and pure and accepts the pramater less as possible


const compose = ( f , g )=>( ...args )=>{
    console.log(args,'compose')
   return f(g(...args));
}

const user = {
    name:'sabin',
    active:true,
    cart:[],
    purchase:[]

}
purchaseItem(
    emptyCart,
    buyItem,
    addTax, 
    addItem
)(user,{name:'item',price:100})

function emptyCart(){
    return user.cart=[];
}

function buyItem(){
    return 1;
}

function purchaseItem( ...fns ){
    console.log(fns)
    return fns.reduce(compose)
}

function addTax(){
    return 1;
}

function addItem( user , item ){
    const updateCart = user.cart.concat(item);
    return Object.assign({},user,{cart:updateCart})
}

const fun = ()=>console.log('sdf')
const fun1=(a,b)=>(...args)=>console.log(args);
fun1(2,3)(3,4,5,6)




