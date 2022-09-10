function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
  // console.log('inside:', this);
}

Color.prototype.rgb = function () {
  const { r, g, b } = this;
  return `rgb(${r},${g},${b})`;
};

//refers to windows object
// console.log(Color(255, 0, 0));

console.log(new Color(255, 0, 0));

const color1 = new Color(24, 76, 142);
console.log(color1);
console.log(color1.rgb());
