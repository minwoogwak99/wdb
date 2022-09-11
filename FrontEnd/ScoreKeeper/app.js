const points = document.querySelector("#points");
const setScore = document.querySelectorAll("#setScore");
const pOne = document.querySelector("#pOne");
const pTwo = document.querySelector("#pTwo");
const reset = document.querySelector("#reset");

const displayP = document.querySelector("#dPoints");

let goal = 2;
let left = 0;
let right = 0;
let isStop = false;

points.addEventListener("change", (e) => {
  goal = parseInt(e.target.value) + 1;
  console.log(goal);
});

pOne.addEventListener("click", () => {
  left += 1;
  console.log(left);
  displayP.innerHTML = `${left} to ${right}`;
  pointChecker();
  if (isStop) {
    pOne.disabled = true;
    pTwo.disabled = true;
    alert("left win!");
  }
});
pTwo.addEventListener("click", () => {
  right += 1;
  console.log(right);
  displayP.innerHTML = `${left} to ${right}`;
  pointChecker();
  if (isStop) {
    pOne.disabled = true;
    pTwo.disabled = true;
    alert("right win!");
  }
});

reset.addEventListener("click", () => {
  left = 0;
  right = 0;
  isStop = false;
  displayP.innerText = "0 to 0";
  pOne.disabled = false;
  pTwo.disabled = false;
});

let pointChecker = () => {
  if (goal <= left) {
    console.log("left win");
    isStop = true;
  }
  if (goal <= right) {
    console.log("right win");
    isStop = true;
  }
};
