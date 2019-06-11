const users = [
    { name: "abin", phone: "988494993933" ,id:1},
    { name: "siagal", phone: "988494993933" ,id:2},
    { name: "anuj", phone: "988494993933",id:3 },
    { name: "anup", phone: "988494993933" ,id:4},
    { name: "sandep", phone: "988494993933",id:5 },
    { name: "sawdf", phone: "988494993933" ,id:6},
    { name: "anup", phone: "988494993933" ,id:7 },
    { name: "kian", phone: "988494993933" ,id:8}
  ];

  const messages = [
    { id:1,message:'message1'},
    { id:2,message:'message2'},
    { id:3,message:'message3'},
    { id:4,message:'message4'},
    { id:5,message:'message5'},
    { id:6,message:'message6'},
    { id:7,message:'message7'},
    { id:8,message:'message8'},
  ]


  function getUser(id){
    return new Promise(resolve=>{
      setTimeout(()=>{
        const message = users.find(x=>x.id==id);
        resolve(message);
      },3000)
    })
  }

  function getMessage( id ){
    return new Promise(resolve=>{
      setTimeout(()=>{
        const message = messages.find(x=>x.id==id);
        resolve(message);
      },3000)
    })
  }

 async function getUserMessage( user){
    const userObj = await getUser(user.id);
    const message = await getMessage( user.id );
   return {
     ...userObj,
     message:message.message
   }
 }

const result = users.map(getUserMessage);
console.log(result,'tesdf');
Promise.all(result).then(x=>console.log(x));

// const finalresult = Promise.all(result);
// console.log(finalresult)

  