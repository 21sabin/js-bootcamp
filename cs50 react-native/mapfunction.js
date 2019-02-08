const array =[ {
    name:'xyz',
    phone:'5678',
    fname:'xdsf'
},{
    name:'xyz',
    phone:'5678',
    fname:'xdsf'
},{
    name:'xyz',
    phone:'5678',
    fname:'xdsf'
},{
    name:'xyz',
    phone:'5678',
    fname:'xdsf'
},{
    name:'xyz',
    phone:'5678',
    fname:'xdsf'
}];

const processArray = obj =>({
    name:obj.name,
    phone:obj.phone
});

console.log(array.map(processArray))