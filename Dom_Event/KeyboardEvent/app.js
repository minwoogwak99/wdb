const btn = document.querySelector("button");

const input = document.querySelector("input");

input.addEventListener("keydown", function (e) {
  console.log(e.code);
  console.log(e.key);
});
/* input.addEventListener("keyup", function () {
  console.log("keyup");
});
 */