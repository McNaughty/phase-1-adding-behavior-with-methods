// Your code here

class Cat {
  constructor(name) {
    this.name = name;
    this.speak = function () {
      console.log(`${this.name} says meow!`);
      return `${this.name} says meow!`;
    };
  }
}

let cat = new Cat("Sasha");

cat.speak();

class Dog {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
    this.speak = function () {
      console.log(`${this.name} says woof!`);
      return `${this.name} says woof!`;
    };
  }
}

dog = new Dog("Rufio", "male");

dog.speak();

class Bird {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
    // this.speak = function Bird() {
    //     if (!(this instanceof Bird)) return new Bird(name);
    //     this.name = name;
    //   }
    };
    Bird() {
        if (this.name === "Pablo"){
            return `It's me! ${this.name}, the parrot!`
        }else if (this.name === "Mable"){
            return `${this.name} says squawk!'` 
        }
  }
}


let bird = new Bird("Pablo", "male");
let bird2 = new Bird("Mable", "female");




