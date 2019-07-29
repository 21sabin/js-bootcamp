class PubSub {
    constructor(){
        this.events ={}
    }

    subscribe( event , callback ){
        let self = this;
        if(!self.events.hasOwnProperty(event)) {
            self.events[event] = [];
          }
          console.log(this)
          let value= self.events[event].push(callback);
          return value;
      
    }

    publish( event , data={}){
        let self = this;
        if( !self.events[event].hasOwnProperty(event)){
            return []
        }
        return self.events[event].map(callback=>callback(data));
    }
}

const obj = new PubSub();
console.log('return',obj.subscribe('event1',function hello(){console.log('ehu')}))
console.log('return',obj.subscribe('event1',function hello(){console.log('ehu')}))
obj.publish('event1',{message:'secreate message'})
console.log(obj.subscribe)
