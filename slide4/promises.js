doThing('value')
     .then(value => {
       // handle success here
       console.log(value);
     })
     .catch(reason => {
       // handle error here
       console.error(reason);
     })