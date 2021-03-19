ASYNC PATTERNS

https://medium.com/@stevekonves/three-javascript-async-patterns-1d2e7094860a
Javascript is single-threaded; however in most cases the best practice is to embrace limitations and make use of one of many patterns of writing asynchronous code.

The three patterns are callbacks, promises and async/wait

Node makes heavy use of asynchronous, non-blocking program flow.

Callbacks
The body of the callback contains code that is intended to execute after the asynchronous operations.

Promises
Used in fetch API.
Is an object representing completion or failure of async operations.

"I promise to get back to you with an answer as soon as I can"

Async operations like promises are put in Event Que which runs after main thread has finished processing so that they dont block subsequent js code from running.
