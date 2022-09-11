const jokes = document.querySelector("#jokes");
const btn = document.querySelector("#getJoke");

const addNewJoke = async () => {
  const jokeTxt = await getDadJoke();
  const newLI = document.createElement("LI");
  newLI.append(jokeTxt);
  jokes.append(newLI);
};

const getDadJoke = async () => {
  try {
    const fig = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", fig);
    return res.data.joke;
  } catch (e) {
    console.log("NO JOKES AVAILABLE:(", e);
  }
};

btn.addEventListener("click", () => addNewJoke());
