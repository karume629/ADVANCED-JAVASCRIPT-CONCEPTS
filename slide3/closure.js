function greet() {
 name = 'Advanced JS';
 return function() {
   console.log('Studying ' + name);
 }
}

greet(); // nothing happens, no error.

// returned function from greet(), gets saved in greetLater

greetLater = greet();

// calling greetLater calls the returned function from the greet function

greetLater(); // logs 'Studying Advanced JS'