//Date object==>to have a new property lastYear() in date object which givest lastyear in YYYY format

var d = new Date('1993-09-19');
Date.prototype.lastyear = (date)=>{
    var data = date.split('-');
    var v;
    data.forEach(x=>{
        console.log(x)
        var y = /^[0-9]{4}/.test(x);
        if( y ) {
            console.log(x-1,'xs');
            v=x-1;
        }
    })
    return v
}

var result = d.lastyear('1993-09-0');
console.log(result)


function fun1(z){
    console.log(z,'this')
}

[1,2,3].map(fun1)