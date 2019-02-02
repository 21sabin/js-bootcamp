//how asynchronous task are run in javscript

//1 Execution Stack
    // The function calling another function is pushed in callStack
    //if the function is async then it is passed to the API
    //after the completion of async function it is passed to the function queue
    //the function queue checks to the stack queue either it is empyt or not 
    //if not then it push that function to the execution stack , the function from exectuion stack agter exectuing is pop out from the stack


// 2 API  ( all the asynchronous task like setTimeout fetch is handled by browser)

//3 Function queue

//Event loop
        //it checks if stack is empty or not if not it takes function from the queue and and push to the stack;

      