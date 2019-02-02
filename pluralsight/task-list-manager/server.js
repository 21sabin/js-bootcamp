const EventEmitter = require('events');

class Server extends EventEmitter{
   
    constructor(client){
        let commands = ['add','help','del','ls'];
        super()
        client.on('command',(command)=>{
            console.log(command,"server")
            switch(command)
            {
                case "add":
                case "help":
                case "del":
                case "ls":
                    this[command](commands)
                    break;
                default:this.emit('response',"unknown command")
            }
        })
    }
    add(){
        this.emit('response','add...')
    }
    help(){
        this.emit('response','help...')
    }
    ls(commands){
        this.emit('response',commands)
    }
    del(){
        this.emit('response','del...')
    }
}

module.exports = (client)=>new Server( client )