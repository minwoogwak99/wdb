class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating!`;
  }
}

class Cat extends Pet {
  constructor(name, age, liveLeft = 9) {
    super(name, age);
    this.liveLeft = liveLeft;
  }
  meow() {
    return `MEOWWWW`;
  }
}

const monty = new Cat("monty", 12);

class Dog extends Pet {
  bark() {
    return `WOFFF`;
  }
}
