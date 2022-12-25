//while and do-while loop.

// let i=0;

// while(i<10){
//     console.log(i);
//     i++;
// }

// do{
//     console.log(i);
//     i++;
// }while(i<10);

const readLineSync=require("readline-sync");
let myNumber=100;
while(myNumber>=50){
    myNumber=readLineSync.question("please enter a number less than 50");
}
console.log(`\nyou entered: ${myNumber}`);

