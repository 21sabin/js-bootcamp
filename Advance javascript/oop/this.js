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

// this refers to an object that calls function
//when function is called in global executin context ' this ' refers to the global window object

var name='john';

function getname(){
    console.log('this')
}

getname();


var object ={
    name:'john',
    callname:function(){
        console.log(this.name)
    }
}

var object2={}
//if i want to call tha function with another object the context is changed
object.callname.apply(object2) 

object.callname()

  // We have a simple object with a clickHandler method that we want to use when a button on the page is clicked
  var user = {
    data:[
    {name:"T. Woods", age:37},
    {name:"P. Mickelson", age:43}
    ],
    clickHandler:function (event) {
    var randomNum = ((Math.random () * 2 | 0) + 1) - 1; // random number between 0 and 1

    // This line is printing a random person's name and age from the data array
    console.log (this.data[randomNum].name + " " + this.data[randomNum].age);
    }
    }

    // The button is wrapped inside a jQuery $ wrapper, so it is now a jQuery object
    // And the output will be undefined because there is no data property on the button object
    $ ("button").click (user.clickHandler); // Cannot read property '0' of undefined

    // Note:
    // In the code above, since the button ($(“button”)) is an object on its own, and we are passing the
    //  user.clickHandler method to its click() method as a callback, we know that this inside our user.clickHandler 
    //  method will no longer refer to the user object. this will now refer to the object where the user.clickHandler
    //   method is executed because this is defined inside the user.clickHandler method.
    //  And the object that is invoking user.clickHandler is the button object—user.clickHandler will be executed inside the button object’s click method.

    $("button").click (user.clickHandler.bind (user)); // P. Mickelson 43