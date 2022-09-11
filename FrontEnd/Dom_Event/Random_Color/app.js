const btn = document.querySelector("button");
const h1 = document.querySelector("h1");

btn.addEventListener("click", () => {
  
  const newColor = colorGenerator();

  document.body.style.backgroundColor = newColor;
  h1.innerText = newColor;
});

const colorGenerator = () => {
 let r = Math.floor(Math.random() * 255) + 1;
 let g = Math.floor(Math.random() * 255) + 1;
 let b = Math.floor(Math.random() * 255) + 1;

 newColor = `rgb(${r}, ${g}, ${b})`;

 return newColor;
}
