function baz() {
  throw new Error('Something went wrong')
}

function bar() {
  baz();
}

function foo() {
  bar();
}

foo();
