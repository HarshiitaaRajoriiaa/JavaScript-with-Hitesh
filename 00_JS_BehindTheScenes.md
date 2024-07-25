### what is js execution context??
In JavaScript, an execution context is an environment in which code is evaluated and executed. There are three types of execution contexts: Global, Function, and Eval
* *Global execution context { }* = This is the default context in which the JavaScript code runs. When the JavaScript engine starts, it creates a global execution context before any code is executed.This is the base execution context and contains the global object (window in browsers, global in Node.js). It also contains a special variable called this, which refers to the global object.

* *Function execution context ( ){ }* = This context is created whenever a function is invoked. Each function has its own execution context, which is created when the function is called and destroyed when the function completes execution.This context contains the arguments passed to the function, the function's local variables, and a reference to the global context. It also has its own this value, which depends on how the function was called.
* *Eval execution context( ) { }* =  This context is created when the eval() function is used to execute code. It's generally not recommended to use eval() due to security and performance reasons.This context is created and destroyed as the eval() function executes code. It has access to the scope from which eval() was called.

``` javascript
let val1 = 10;
let val2 = 5;
function sum(val1 , val2){
    return val1+val2;
}
let result = sum(val1 , val2);
let res = sum(10,3)
```
* ###  Phases:
  * *Global Execution Phase* = 
    * In this phase, the JavaScript engine allocates memory for variables and functions. Variables are initialized with undefined, and functions are stored in memory.
     ``` js
        Global Execution Context:
        val1 -> undefined
        val2 -> undefined
        sum -> function sum(val1, val2) { return val1 + val2; }
        result -> undefined
        res -> undefined

    ```
    * *Execution Phase*: In this phase, the code is executed line by line, and the values are assigned to the variables.

    ``` javascript
            val1 = 10;
            val2 = 5;
            result = sum(val1, val2); // sum(10, 5) -> 15
            res = sum(10, 3); // sum(10, 3) -> 13
    ```
  * *Memory Phase* = Memory Phase: When the sum function is    called, a new execution context is created for the function. During this phase, memory is allocated for the function's arguments and local variables.

    ``` javascript
            // Memory Phase (for sum function)
            Function Execution Context:
            Arguments: [val1, val2]
    ```

   * Execution Phase: The function's code is executed, and the result is returned.

        ```javascript
        // Execution Phase (for sum function)
        sum(10, 5): 

        val1 = 10;
        val2 = 5;
        return val1 + val2; // 10 + 5 -> 15

        sum(10, 3):
        val1 = 10;
        val2 = 3;
        return val1 + val2; // 10 + 3 -> 13
        ```