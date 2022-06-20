let dog = {
  name: "Hachiko",
  age: 2,
  breed: "Golden",
  gender: "male",
  color: "Golden",
  legs: 4,
  "favourite food": "bone, sausage, candy",

  eat() {
    console.log(
      `${this["name"]} is eating ${this["favourite food"]}, yum yum...`
    );
  },

  run() {
    console.log(`${this["name"]} is running on ${this["legs"]} legs...`);
  },

  bark() {
    console.log("Woof woof woof ...");
  },
};

console.log(dog);
console.log(dog.name);
console.log(dog["favourite food"]);

dog.color = "Brown";

dog.age = dog.age + 2;

dog.eat();

dog.run();

for (let key in dog) {
  console.log(key);
}

for (let key in dog) {
  console.log(dog[key]);
}

dog.isCrazy = true;

dog.crazy = function () {
  if (this.isCrazy) {
    for (let i = 0; i < 5; i++) {
      this.run();
      this.bark();
    }
  } else {
    console.log(`${this.name} is not crazy`);
  }
};

dog.crazy();

dog.isCrazy = !dog.isCrazy;

dog.crazy();

delete dog.isCrazy; // undefined

dog.crazy();

for (let key in dog) {
  if (typeof dog[key] != "function")
    console.log(`${key} có giá trị là ${dog[key]}`);
}

const clone = dog;

console.log("Clone", clone);
console.log("Dog", dog);

clone.name = "Ice";

console.log("Clone", clone);
console.log("Dog", dog);

const copy = {};

for (const key in dog) {
  copy[key] = dog[key];
}

console.log("copy", copy);

copy.name = "Hachiko";

console.log("Copy", copy);
console.log("Dog", dog);
