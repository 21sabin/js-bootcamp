const EventEmitter = require('events');
const readline = require('readline');

//creating an interface for reading user data from command
//it emits an event wher user type command
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const client = new EventEmitter();
const server = require('./server')(client);
server.on('response',( resp )=>{
    console.log("server response",resp)
})

//listening to the event emited by realine.createinterface emitter
r1.on('line',( input )=>{
   client.emit('command',input)
})

