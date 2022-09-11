const btn = document.querySelector("#button1");

btn.addEventListener("click", (e) => {
  e.stopPropagation();
});
