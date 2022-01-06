//Pillars of Object Oriented Programming in JavaScript
//it has four pillars
//encapsulation //reduce complexity and increase reusability
//encapsulation means that information hiding
let employee = {
  baseSalary: 2000,
  rate: 25,
  overTime: 20,
  getWage() {
    return `${this.baseSalary} + (${this.rate}*${this.overTime})`;
  },
};
//abstraction //example of dvd player //reduce complexity and isolate impact of changes
//hide the details and show the essentials

//Constructor Function//PascalCase naming convention
function CircleFun(radius) {
  this.radius = radius;
  this.defaultLoc = { x: 0, y: 0 };
  this.computeLocation = function () {
    //...
  };
  this.draw = function () {
    this.computeLocation();
    console.log("something");
  };
}
//inheritance //eliminate redundant the code //use in classes
//polymorphism //it is many forms //refactor ugly switch case statements

//Creating a Objects
const circle = {
  radius: 2,
  location: { x: 1, y: 1 },
  draw() {
    console.log("draw");
  },
};
circle.draw();

//we have two ways creating a object //it has factories and constructors

//factories means regular functions
//Factories //if we use factory function then we need to use 'return' keyword and
//when function declaration name should be camelCase required
// also no need to use 'new' operator when function calling
//use camelCase Naming Convention
//we can convert factory to the arrow function but constructor doesn't convert
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw circle create");
    },
  };
}
const a = createCircle(23);

//Constructors//if we use constructor then we need to use 'this' keyword and 'new' operator when function calling
//also when we want to declare the function then we need to function name first letter should be capital letter
//use PascalCase Naming convention
//we can convert factory to the arrow function but constructor doesn't convert
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw function log");
  };
}
const b = new Circle(12);

//enum properties
for (const key in b) {
  if (typeof b[key] !== "function")
  console.log(key, b[key]);
}

const keys = Object.keys(b);
console.log(keys);
if ('radius' in b) {
  console.log(`Circle has a radius ${b.radius}`);
}
//'Primitives/Values' and Reference Types
//Working with properties
//private,public and protected properties
//getters and setters
function Rectangle(length, width) {
  this.length = length;
  this.width = width;
  let defaultLocation = { x: 0, y: 0 };
  this.getDefaultLocation = function () {
    return defaultLocation;
  };
  this.draw = function () {
    console.log("jjjj");
  };
  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) throw new Error("Invalid Location");
      defaultLocation = value;
    },
  });
}
//Another Approach Setters And Getters using object method like encapsulation
let Car = {
  color: "Blue",
  company: "suzuki",
  model: 2008,
  get details() {
    return `${Car.color} ${Car.company} ${Car.model}`;
  },
  set details(value) {
    const parts = value.split(" ");
    this.color = parts[0];
    this.company = parts[1];
    this.model = parts[2];
  },
};

//Stopwatch Exercise