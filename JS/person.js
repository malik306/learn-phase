//how can we make it visible to other files variables, classes, functions, something
// if we can't add export keyword prefix before class keyword so it is by default private 
//or in other ways simple words we need to says that it is not visible to other files
//Then how can we make it visible 'public' so we need to add the export keyword before class statement
module.exports = class Person{
    constructor(name){
        this.name=name;//reciving data from outside when using constructor function inside class
    }
    walk(){
        console.log(`Have u walk it ${this.name}`);
    }
}