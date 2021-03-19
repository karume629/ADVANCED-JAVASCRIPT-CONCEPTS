// the scope is by default global

var name = 'Advanced JS'

console.log(name);
// logs 'Advanced JS'

function logName() {
  console.log(name); // 'name is accessible'
}

logName();
// logs 'Advanced JS'