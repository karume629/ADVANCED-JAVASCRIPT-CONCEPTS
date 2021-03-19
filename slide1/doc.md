JAVASCRIPT EXECUTION CONTEXT

https://medium.com/jspoint/how-javascript-works-in-browser-and-node-ab7d0d09ac2f

Every browser provides a JavaScript engine that runs the javascript code.
The job of the javascript engine is to take the JavaScript source code and compile it to binary instructions that a CPU  can understand.
Javascript like any other programming language has one stack and a heap storage. A heap is a free memory storage unit where you can store memory in random order, heap is managed by a javascript runtime and cleaned up by garbage collector.
A stack(LIFO), memory storage stores current function execution context of a program. When a program is loaded into memory it starts execution from the first function call.
Execution Context - decides which code section has access to the functions, variables and objects used in the code.
During execution context, specific code get parsed line by line then the variables and functions are stored in the memory, this provides and environment for specific code to get executed.

