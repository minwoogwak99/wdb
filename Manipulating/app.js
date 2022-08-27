const allLinks = document.querySelectorAll("a");

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }

/**
 * get element by id
 */

const toc = document.getElementById("toc");
console.log(`=======ALL ELEMENT OF IMAGE SOURCE USING TAG NAME==========`);
console.dir(toc)
/**
 * get element by tag name
 */
const allImages = document.getElementsByTagName("img");
console.log(`=======ALL ELEMENT OF IMAGE SOURCE USING TAG NAME==========`);
for (let img of allImages) {
  console.log(img.src);
}

/**
 * get element by class name
 */
const allImages2 = document.getElementsByClassName("square");
console.log("========ALL ELEMENT OF IMAGE USING CLASSNAME");
for (let img of allImages2) {
  console.log(img.src);
}

for (let link of allLinks) {
  link.style.color = "rgb(0, 108, 134)";
  link.style.textDecorationColor = "magenta";
  link.style.textDecorationStyle = "wavy";
}

/**
 * get element by query selector
 */
const paragraph = document.querySelector('p')
console.log(paragraph)