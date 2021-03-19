class Person {
  constructor(name) {
    this.name = name;
  }

  static greet() {
    console.log('hi')
  }

  greetWithName() {
    console.log(`hi ${this.name}`);
  }
}

person = new Person()
person.name = 'Mike'

// person.greet()
Person.greet()
// hi

person.greetWithName()
// hi Mike