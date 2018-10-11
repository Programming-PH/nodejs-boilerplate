// this example calls a function inside your core folder and console.log the result which is "Hello World."

const iDisplayHelloWorld = require('./core/hello-world'); //this will pull out the object of whatever you exported from hello-world.js file.

console.log(iDisplayHelloWorld()); 
