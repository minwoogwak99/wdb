const fakeRequest = (url) => {
  const clus = Math.floor(Math.random() * 2000);
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (clus > 1000) {
        return rej("rejected! #ERRR");
      } else {
        return res("resolved!");
      }
    }, 3000);
  });
};

fakeRequest("hello.com")
  .then((data) => {
    console.log(data);
  })
  .catch((data) => {
    console.log(data);
  });
