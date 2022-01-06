const Person = require('./person');//if we add curly braces around the variable that means it is destructuring statement
//when required curly braces if I have multiple variables, classes, functions or something
module.exports = class Teacher extends Person{//all the teacher always be person so we need to extends it
    constructor(name,degree){
        super(name);//must be required super keyword function when I want to child 'class' extends the parent class
        this.degree=degree;
    }
    teach(){
        console.log(`have u teach it ${this.name} ${this.degree}`);
    }
}