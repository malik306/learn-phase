/*
let/const
objects
this
arrow functions
destructuring
spread
classes
modules
*/

// let or const keyword is local scope block
//var keyword is global scope block

//object and this keyword //this keyword local scope block
const person = {
    name:'malik',
    walk(){
        console.log(this);
    },
    talk(){
        console.log(this.name);
    }
}
//how to binding this
let p=person.walk.bind(person);//it will be object
let s=person.walk.bind(this);//it wil be window object
p();
s();

//arrow functions
const square=(n)=> n*n;
square(5);
const areaCircle=(r)=>{
    return 2*3.14*r*r;
}
areaCircle(4);

//object destructuring
const address={
    street:'a',
    city:'b',
    country:'c'
}
const {street,city,country}=address;

//Spread Operator
const first=[1,2,3,4];
const second=[5,6,7,8];
const combined =first.concat(second);//concat function method
const combinedMethod=[...first,...second];//spread operator method
const combinedMethodSome=[...first,'a',...second,'i'];
const firstObject={name:'Malik'};
const secondObject={Job:'Instructor'};
const combinedObject={...firstObject,...secondObject,location:'Pakistan'};

//classes//class name should be uppercase as first letter
class Person{
    constructor(name){
        this.name=name;//reciving data from outside when using constructor function inside class
    }
    walk(){
        console.log(`Have u walk it ${this.name}`);
    }
}
const p1 = new Person('Malik');// must be use new keyword when created a class
p1.walk();

//inheritance

class Teacher extends Person{//all the teacher always be person so we need to extends it
    constructor(name,degree){
        super(name);//must be required super keyword function when I want to child 'class' extends the parent class
        this.degree=degree;
    }
    teach(){
        console.log(`have u teach it ${this.name} ${this.degree}`);
    }
}
const t1 = new Teacher('Mosh','Msc');
console.log(t1.teach());

import {  } from "module";
//'export default' means that it is a single main class and
// must be single main class or function as a 'export default' 
//if we make the other class in the same file as a 'export default' so it dpesn't work
//that means only sinle class must be 'export default'
//if we add other class in the same file so we need to make it 'export' only
//import React from "module";// React is the from module file only single main class
//import React, { Component } from "module";//React is single main class and Component is not single main class 
//because Component is named as 'export' keyword and React is named as  'export default'