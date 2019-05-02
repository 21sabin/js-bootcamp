let person ={
    name:'john',
    hi:function(){
        var inner =function(){console.log('hi'+ this);}
        return inner();
    }

};

var fun1 = function(){
    var obj={name:'sabin'};
    var obj2 = obj;
    console.log(obj===obj2)
}
fun1()