/* let maximum = parseInt(prompt("enter the maximum value"));
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
 */
/* iterate based on the property keys */
console.log("iterate on the key");
let a = [1, 3, 5, 7, 9];
for (i in a) {
  console.log(a[i]);
}

/* iterate bsed on the proberty value */
console.log("iterage on the value");
for (i of a) {
  console.log(i);
}
