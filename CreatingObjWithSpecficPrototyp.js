//create object uisng Object.create methd from
//NOTE the function created  inside is a short end
//way of creating a methd function
let protoType = {
  speak(line) {
    console.log(`${this.type} says ${line}`);
  },
};

let killerRabit = Object.create(protoType);
console.log(killerRabit);

killerRabit.type = "speaking rabit";
killerRabit.speak("killing kiliing"); //speaking rabit says killing kiliing

console.log(killerRabit.type); //speaking rabit
