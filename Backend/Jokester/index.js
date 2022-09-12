const jokes = require('give-me-a-joke');
const colors = require('colors');
const randomSentence = require('random-sentence');
const cowsay = require('cowsay');

jokes.getRandomDadJoke(function (joke) {
  console.log(joke.rainbow);
});

console.log(cowsay.say({
  text: "I'm a moooodule",
  e: "oO",
  T: "U "
}));

let pColors = () => {
  console.log(colors.green('hello')); // outputs green text
  console.log(colors.red.underline('i like cake and pies')); // outputs red underlined text
  console.log(colors.inverse('inverse the color')); // inverses the color
  console.log(colors.rainbow('OMG Rainbows!')); // rainbow
  console.log(colors.rainbow(randomSentence({ words: 50 }))); // rainbow
  console.log(colors.trap('Run the trap')); // Drops the bass

};

// pColors();