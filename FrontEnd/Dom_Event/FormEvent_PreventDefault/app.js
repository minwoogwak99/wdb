const form = document.querySelector(`#shelterForm`);
const input = document.querySelector("#catName");
const list = document.querySelector("#cats");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newLI = document.createElement("LI");
  newLI.innerText = input.value;
  list.append(newLI);
});
