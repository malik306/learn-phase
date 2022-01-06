export default class PointB{
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