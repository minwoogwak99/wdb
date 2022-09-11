const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const userInput = form.elements.query.value;
  const config = { params: { q: userInput } };
  const res = await axios.get(`https://api.tvmaze.com/search/shows/`, config);
  createIMG(res.data);
  console.log(res.data);
});

const createIMG = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      console.log(result);
      const div = document.createElement("DIV");
      const img = document.createElement("IMG");
      const cap = document.createElement("figcaption");
      img.src = result.show.image.medium;
      div.append(img);
      cap.append(result.show.name);
      div.append(cap);
      document.body.append(div);
    }
  }
};
