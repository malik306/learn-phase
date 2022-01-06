/**
 * Type Annotations
 * Arrow Functions //same syntax in ts code like js code //when arrow functions have multiple parammeters
 * then also require to use interfaces with arrow function
 * Interfaces //Pascal Naming Convention
 * Classes
 * Constructors
 * Access Modifiers
 * Properties 
 * Modules // modules means that separate file making concepts
 * What is TS
 * It is superset of JS Code
 * Any Valid JS Code is also valid TS Code
 * TS Additional Featurs
 * Strong Typing
 * Object Oriented Features
 * Compile Time Errors
 * Great Tooling
 * 
 * Every TS code must be compile 'transpile' the code into JS code because browser understand the code in the form of JS code
 * 
 */
let a:any;//string,boolean,number,number[]
enum Color {Red, Green, Blue};//when we compile the this line to js code then 6 lines of code
let backgroundColor=Color.Green;

//type assertions
let message:string ='abc';
message.endsWith('c');//first method wil be applied when value will be initialized and declared the variable
let anotherMessage;
anotherMessage='abc';
(<string>anotherMessage).endsWith('c');//second method wil be applied when value will be re-initialized but only declare the variable
(anotherMessage as string).endsWith('c');//third method wil be applied when value will be re-initialized but only declare the variable

//Arrow Funtions and Interfaces

interface Point_{
    x:number,
    y:number,
    draw: () => void//also we dont need add the parameters and dont write whole function here... 
}
const rePoint=(point: Point_)=>{
    //some code
    console.log(point);
    
}

//Class
class Point{
    x!: number;
    y!: number;
    draw_(){
        console.log(`${this.x} ${this.y}`);
        
    }
    getDistance(another: Point){

    }
}
//if we have already created a class then how to access the property and methods
let pointa = new Point();
pointa.draw_();
pointa.x=1;
pointa.y=9;
class PointA{
    //private x!:number;//if we cant add here this line then we need to clean the code
    //so that add the parameter with private keyword in the constructor parameter otherwise remove private keyword
    constructor(private a:number,private b:number){//// if add question mark then it is optional means undefined 
        //if I have added the parameter with private keyword with variable then we dont need to add the this keyword like
        //this.a=a;//like this
            }
    drawB(){
        console.log(`${this.a}`);  
    }
    getA(){
        return this.a;
    }
    setA(value:number){
        if(value < 0)
        throw new Error('Value cannt be less than zero');
        this.a=value;
    }
}
new PointA(1,3);//if we cant pass the values so we dont need to use the constructor otherwise compilation error
//I cannt access x variable because it is private property then we neeed to create a get method like getX() setX()
//so now we can access the method with return x value otherwise we cant access the property
