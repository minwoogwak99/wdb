const btn = document.querySelector("#v2");

btn.onclick = () => {
  console.log("clicked by the function in the app.js");
  console.log("hope it works");
};

let scream = () => {
  console.log("AAA");
};

btn.onmouseenter = scream;

const btn3 = document.querySelector("#v3");
btn3.addEventListener("click", () => {
  console.log("clicked activated with addEventListener");
});
btn3.addEventListener("dblclick", () => {
  alert(`double clicked with addEventListener`);
});
