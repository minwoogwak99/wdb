let maximum = parseInt(prompt("enter the maximum value"));
while (!maximum) {
  maximum = parseInt(prompt("enter a valid number!"));
}

let targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("enter your first guess"));
while (guess !== targetNum) {
  if (guess < targetNum) {
    guess = parseInt(prompt("too low! enter a new guess"));
  } else {
    guess = parseInt(prompt("too high! enter a new guess!"));
  }
}

console.log("you got it!");
