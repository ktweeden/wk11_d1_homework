// Episode 1
// const name = 'Keith';
//
// const printName = function () {
//   console.log(`My name is ${ name }`);
// }
//
// printName();

// Episode 2
const score = 5;

const result = function () {
  const score = 3;
  return score;
}

console.log(result());

// Returns 3. Most locally defined variable takes presidence.


// // Episode 3
const myAnimals = ['Chickens', 'Cats', 'Rabbits'];

const listAnimals = function () {
  // myAnimals = ['Ducks', 'Dogs', 'Lions'];

  for (let i = 0; i < myAnimals.length; i++) {
    console.log(`${ i }: ${ myAnimals[i] }`);
  }
}

listAnimals();

// Error. Can't reassign a const. also doesn't like the i++ because you're reassigning i .

// // Episode 4
const suspectOne = 'Jay';
const suspectTwo = 'Val';
const suspectThree = 'Keith';
const suspectFour = 'Rick';

const allSuspects = function () {
  const suspectThree = 'Harvey';
  console.log('Suspects include:', suspectOne, suspectTwo, suspectThree, suspectFour);
}

allSuspects();
console.log(`Suspect three is: ${ suspectThree }`);
//Suspect three is harvey inside the function's scope and Keith outside of it

// // Episode 5
const detective = {
  name: 'Ace Ventura',
  pet: 'monkey'
};

const printName = function (detective) {
  return detective.name;
}

const detectiveInfo = function () {
  detective['name'] = 'Poirot';
  return printName(detective);
}

console.log(detectiveInfo());

// name is Poirot, printname can't run whilst episode 1 is uncommented because it's already defined.

// // Episode 6
const murderer = 'rick';

const outerFunction = function () {
  const murderer = 'marc';

  const innerFunction = function () {
    // murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log(`The murderer is: ${ murderer }`);

// innerFunction gives an error 0 can't reassign murderer. the log rint's Rick
