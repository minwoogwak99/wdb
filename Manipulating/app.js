/**
 * querySelectorAll with innerText attribute
 */
const allLinks = document.querySelectorAll("a");

// for (let link of allLinks) {
//   link.innerText = "I AM A LINK!!!!";
// }

// change style
for (let link of allLinks) {
  link.style.color = "purple";
  link.style.textDecorationColor = "magenta";
  link.style.textDecorationStyle = "wavy";
}

/**
 * get element by id
 */

const toc = document.getElementById("toc");
console.log(`=======ALL ELEMENT OF IMAGE SOURCE USING TAG NAME==========`);
console.dir(toc);
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

/**
 * get element by query selector
 */
const paragraph = document.querySelector("p");
console.log(paragraph);

/**
 * get element by query selector all
 */
const paragraph2 = document.querySelectorAll("p");
console.log(paragraph2);

// innertext
console.log("==================INNER TEXT==================");
const inn = document.querySelector("p").innerText;
console.log(inn);

//innerHTML
//can cahnge the content of the html with html syntax

//class list
const h2 = document.querySelector("h2");
h2.classList.add("border"); // add the clas
h2.classList.remove("purple"); // remove the class
console.log(h2.classList);
h2.classList.toggle("purple"); // toggle on the class

// Traversing parent/child/Sibling
//parentElement

const firstBold = document.querySelector("b");
console.log("=====parent of firstBold");
console.log(firstBold.parentElement);

// Creating Element
//createElement()

const newImg = document.createElement("img");
console.dir(newImg);
newImg.src =
  "https://images.unsplash.com/photo-1661529220663-8e17baaf3044?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1970&q=80";
newImg.classList.add('square');
document.body.appendChild(newImg);
