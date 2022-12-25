//short circuiting Examples ES6 or Later
console.log(3||2||1); //3
console.log(""||0||2); //2
console.log(""||0||undefined); //undefined
console.log(""||"null"||2); //null

console.log(3&&2&&1);//1
console.log(""&&0&&2);//""
console.log("undefined"||"null"||"");//undefined

//||->returns first true value and last false value
//&&->returns first false value and last true value
