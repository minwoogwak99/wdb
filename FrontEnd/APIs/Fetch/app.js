// fetch("https://swapi.dev/api/people/1")
//   .then((res) => {
//     console.log("resolved!", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log("JSON DONE:", data);
//     return fetch("https://swapi.dev/api/vehicles/14/");
//   })
//   .then((res) => {
//     console.log("resoleved 2");
//     return res.json();
//   })
//   .then((data) => {
//     console.log("2nd JSON DONE:", data);
//   })
//   .catch((err) => {
//     console.log("ERR...................................");
//     console.log(err);
//   });

const loadStarwars = async () => {
  try {
    const res = await fetch("https://swapi.dev/api/vehifdsacles/14/");
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.log("err: ", e);
  }
};

loadStarwars();
