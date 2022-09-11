let todos = [];
let command = prompt("What do you want?");

while (command !== "quit") {
  command = prompt("What do you want?");
  if (command === "new") {
    let entity = prompt("add new todo!");
    todos.push(entity);
    console.log(`"${entity}" is added to the list`);
  } else if (command === "list") {
    if (todos.length == 0) {
      console.log("todo list is empty");
    } else {
      console.log("++++++++++");
      for (i in todos) {
        console.log(i, todos[i]);
      }
      console.log("++++++++++");
    }
  } else if (command === "delete") {
    let idx = prompt("which one do you wanna delete?");

    if (idx > -1) {
      todos.splice(idx, 1);
    }
  } else {
    console.log("enter correct command");
  }
}

console.log("refresh for the new todo list");
