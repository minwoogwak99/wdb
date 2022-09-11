// const sing = async () => {
//   let delay = Math.floor(Math.random() * 10) + 1;

//   if (delay > 5) {
//     throw new Error("it took too long to load data. ");
//   } else {
//     return "Data reached successfully";
//   }
// };

// sing()
//   .then((data) => {
//     console.log("successfully retreived the data.");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("failed to load data..");
//     console.log(err);
//   });

const login = async (username, password) => {
  if (!username || !password) throw "Missing";
  if (password === "corgiefeetarecute") return "welcome!";
  throw "Invalid password";
};

login((username = "123"), (password = "corgiefeetarecute"))
  .then((data) => {
    console.log("success");
    console.log(data);
  })
  .catch((err) => {
    console.log("failed");
    console.log(err);
  });
