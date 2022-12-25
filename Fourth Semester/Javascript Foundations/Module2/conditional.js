
const readLineSync=require("readline-sync");
const myAge=readLineSync.question("please enter age: ");

if(myAge>18){
    console.log("you are above 18 years");
}
else{
    console.log("no you are not!");
}

let myName=String(readLineSync.question("please enter your name"));
if(myName==="rinkesh")console.log("hello Rinku! ");
else console.log("hello anyways ): " );

//ternary operator

let myFatherAge=Number(readLineSync.question("please enter your father's Age: "));
myFatherAge>30?console.log("greater than 30 "):console.log("less than 30");
