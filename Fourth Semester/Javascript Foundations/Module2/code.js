//program to read 3 strings and prints the smallest one.

let readLineSync=require("readline-sync");
let stringOne=String(readLineSync.question("Input String 1: ")).length;
let stringTwo=String(require("readline-sync").question("Input String 1: ")).length;
let stringThree=String(require("readline-sync").question("Input String 1: ")).length;

if(stringOne<stringTwo){
    if(stringThree<stringOne){
         console.log(`string 3: is smallest`);
    }
    else{
        console.log(`string 1:  is smallest`);
    }
}
else{
    if(stringTwo<stringThree){
        console.log(`string 2:  is smallest`);
    }
    else{
        console.log(`string 3: is smallest`);
    }


}