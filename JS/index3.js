//cloning the Object// means that copy the object...
const circle={//camelCase notation
    radius:0,
    draw(){
        console.log(`${this.radius}`);
    }
}
// let another={};
// for (const key in circle) 
// another[key]=circle[key];//first method

// const other = Object.assign({},circle);//second method

const spreadOperator={...circle} //3rd method is spread operator
console.log(`${spreadOperator} sO`);

// there are two methods:- one is for-of loop and second is reduce array syntax
let sum=0;
const num =[0,1,-3,1,1,1,1,13,44];
for (const iterator of num) {
    sum+=iterator;
}
console.log(sum);
num.reduce((previousValue,currentValue)=>{
    return previousValue+currentValue;
},0);