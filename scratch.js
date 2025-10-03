const giveMeAJoke = require('give-me-a-joke');
giveMeAJoke.getRandomDadJoke((joke) => {
  console.log(joke);
});


let x = 1 + 1;

console.log(x);

function double(x) {
  return x * 2;
}

x = double(x);

console.log(x);