class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }

  greeting() {
    console.log("hello! the color is : ", this.name);
  }

  rgb() {
    const { r, g, b } = this;
    return `rgb(${r},${g},${b})`;
  }
}

const color1 = new Color(14, 51, 125, "what color?");
console.log(color1);

const color2 = color1;
color2.r = 41;
console.log(color2);
console.log(color1);
