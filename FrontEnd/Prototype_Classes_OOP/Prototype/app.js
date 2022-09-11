//custom prototype

String.prototype.yell = function () {
  console.log(this.toUpperCase());
};


//change existing prototype

Array.prototype.pop = function() {
  console.log('POP function has been deprecated')
}