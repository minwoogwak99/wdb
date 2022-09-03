const list = document.querySelector("#tweets");
const lis = document.querySelectorAll("li");

const tweetForm = document.querySelector("#tweetForm");
/* const username = document.querySelector("#username");
const tweet = document.querySelector("#tweet"); */

tweetForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const usernameInput = tweetForm.elements.username.value;
  const tweetInput = tweetForm.elements.tweet.value;

  const newLI = document.createElement("LI");

  newLI.innerText = `${usernameInput}: ${tweetInput}`;

  list.append(newLI);
});

list.addEventListener("click", (e) => {
  e.target.remove()
});
