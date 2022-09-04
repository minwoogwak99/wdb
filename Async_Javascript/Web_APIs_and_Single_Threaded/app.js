console.log("sending request to server..");
setTimeout(() => {
  console.log("data from the server....");
}, 3000); // setTimeout is passed to the webAPI so that the javascript can run the rest of the code and after webAPI finishes the given task it returns it to the js to run it.
console.log("end of the file!");

/* OUTPUT: 
sending request to server..
end of the file!
data from the server.... */

setTimeout(() => {
  document.body.style.backgroundColor = "red";
  setTimeout(() => {
    document.body.style.backgroundColor = "orange";
  }, 1000);
}, 1000);
