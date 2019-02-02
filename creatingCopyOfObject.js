const orginalObject ={ name:'xyz', address:'abc' };

//creating copyt of object
    const copyObject = Object.assign( { } , orginalObject );
    //now if you change the copyObject it wont affect the original object;

//2nd condition
const orginalObject ={ name:'xyz', address:'abc' };
const copyObject = orginalObject;
Object.assign(copyObject ,{newItem:'added'}) // it will affect the orginal object also because object array functions are work with pass by reference