function createNewPerson(name) {
  this.name = name;
  this.greeting = function() {
    console.log('Hi! Im ' + this.name + '.');
  }
}

let person1 = new createNewPerson('Mike')
let person2 = new createNewPerson('Mark')

person1.name
person1.greeting()

person2.name
person2.greeting()