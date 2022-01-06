//There are two kinds of data-types:- it has Primitive and Reference Types

//Primitive/Value Types//Primitives are copied by their value
let ownName = 'Muhammad Mubashir';//string Literal syntax
let ownAge = 20;//number literal syntax
let isApproved =true;//boolean literal syntax
let firstName;//if we can't initialized the value by default value is undefined
//but we can set the value as undefined reserved keyword
firstName=undefined;
let selectedColor=null;//if we check //typeof selectedColor// it will shows "object"
//one is remaining part type is Symbol//Symbol is introduced in es6 syntax

//Reference Types//non-primitive types//Objects are copied by their reference
let person = { //object literal syntax // object has two things:- Properties and Methods
    name: 'Malik',
    age: 25,
    lastDegree: 'BCS'
}; //object literal syntax
let selectColor = ['red','green','blue']; //array syntax
function greet(name) {//function declaration syntax //receiving value as a parameter
    console.log(`Hello World ${name}`);//back-tick format syntax when using a variable ${name}
    //otherwise we use plus sign syntax as a concatenation
}
greet('Master');//function calling syntax //passing value as a parameter

function square(number) {//calc a value square using function syntax
    return number*number;
}
square(3);