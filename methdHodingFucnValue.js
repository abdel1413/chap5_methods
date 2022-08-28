let rabit = {};
rabit.speak = function saySomething(line) {
  console.log(`Rabit is saying that it is ${line}`);
};

rabit.speak("I am a nice animal");

// the same as the following
/**rabit ={
    speak: function saySomething(arg)
}
*/

let whiteRabit = { type: "white", callBackFunction };
let hungryRabit = { type: "hungry", callBackFunction };

//now create a call back function where we can include the  key 'type'
// from the object bindings
function callBackFunction(line) {
  console.log(`the ${this.type} rabit says ${line}`);
}

console.log("the white rabit color is ", whiteRabit.type);
console.log(hungryRabit.callBackFunction("I am whit animal"));

/////
let rabit = { type: "gray", callBackFunction2 };
function callBackFunction2() {
  console.log(`this is call back without arg. the ${this.type} says nothing`);
}
console.log(rabit.type, " living in empty function");
console.log(rabit.callBackFunction2());

//we can  explecitly call  "this" using function's "call" method
// If we want to do so, then we call the function name.call(objectname, 'param')
// and pass the name of object as first arg, and the param of function as
//seconde arg.
//function name.call(objectname, 'functionsparam')
//so "this" is = to fucntionName.call(objec, arg)
callBackFunction.call(hungryRabit, "clinging");
callBackFunction2.call(rabit);

//we can pass the whole object in a function.call methd
function normalize() {
  //here this refers to the coords object
  console.log(this.coords.map((n) => n / this.length));
}

console.log(normalize.call({ coords: [1, 2, 3, 4], length: 5 }));
