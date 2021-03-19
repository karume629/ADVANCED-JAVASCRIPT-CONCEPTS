SCOPE

https://scotch.io/tutorials/understanding-scope-in-javascript
In JavaScript there are two types of scopes:
Scope === context
  Global scope
  Local scope

Globalscope - when you start writing javascript in a document, you are already in the Global scope.
            - variables inside the Global scope can be accessed and altered in any other scope.

Localscope - variables inside a function are in local scope and they have different scope for every call of that function.
           - variables having the same name can be used in different functions this is because those variables are bound to their respective functions, each having  different scopes and are not accessible in other functions.
