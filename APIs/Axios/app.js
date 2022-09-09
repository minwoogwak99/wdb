axios
  .get("https://swapi.dev/api/people/1")
  .then((res) => {
    console.log(`##########basic axios function##################`);
    console.log("RESPONSE: ", res);
  })
  .catch((err) => {
    console.log("ERR: ", err);
  });

//async function
const getStarWars = async (id) => {
  try {
    const response = await axios.get(`https://swapi.dev/api/peodddple/${id}`);
    console.log(`##########async function##################`);
    console.log(response.data);
  } catch (e) {
    console.log(`##########async function##################`);
    console.log("ERR:", e);
  }
};

getStarWars(2);
