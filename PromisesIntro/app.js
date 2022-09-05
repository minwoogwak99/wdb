// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure("Connection Timeout :(");
    } else {
      success(`Here is your fake data from ${url}`);
    }
  }, delay);
};
// THE PROMISE VERSION
const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timeout :(");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

//This brings a callback hell
/* fakeRequestCallback(
  "books.com/page1",
  (response) => {
    console.log("first callbacks succeeded");
    console.log(response);
    fakeRequestCallback(
      "books.com/page2",
      (response) => {
        console.log("second callback succeeded");
        console.log(response);
        fakeRequestCallback(
          "books.com/page3",
          (response) => {
            console.log("3rd callbakcs@!");
            console.log(response);
          },
          (err) => {
            console.log("err from 3rd callbacks");
            console.log(err);
          }
        );
      },
      (err) => {
        console.log("err from 2nd callbacks");
        console.log(err);
      }
    );
  },
  (err) => {
    console.log("err from 1st callbacks");
    console.log(err);
  }
); */

// fakeRequestPromise("books.com/page1")
//   .then(() => {
//     console.log("worked for page 1");
//     fakeRequestPromise("books.com/page2")
//       .then(() => {
//         console.log("worked for page 2");
//       })
//       .catch(() => {
//         console.log("err for page 2");
//       });
//   })
//   .catch(() => {
//     console.log("err for page 1");
//   });

//this is same as above but more clean!!
fakeRequestPromise("apps.com/page1")
  .then((data) => {
    console.log(data);
    console.log("worked for page 1");
    return fakeRequestPromise("apps.com/page2");
  })
  .then((data) => {
    console.log(data);
    console.log("worked for page 2");
  })
  .catch((data) => {
    console.log(data);
    console.log("failed for the task");
  });
