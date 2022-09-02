const btns = document.querySelectorAll("button");

for (let btn of btns) {
  btn.addEventListener("click", getRandCol);
}

function getRandCol() {
  this.style.backgroundColor = colorGenerator();
  this.style.color = colorGenerator();
}

function colorGenerator() {
  let r = Math.floor(Math.random() * 255) + 1;
  let g = Math.floor(Math.random() * 255) + 1;
  let b = Math.floor(Math.random() * 255) + 1;

  newColor = `rgb(${r}, ${g}, ${b})`;

  return newColor;
}
