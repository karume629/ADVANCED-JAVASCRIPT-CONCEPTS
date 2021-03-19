function baz() {
  console.log("This will execute first")
}

function bar() {
  baz();
}

function foo() {
  bar();
}

foo();
