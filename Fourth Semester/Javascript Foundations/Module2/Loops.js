//for loop
for(let i=0;i<10;i++){
    console.log("hello\n");
}

const userName="Rinkesh Kumar Sinha";
const userNameLength=Number(userName.length);
for(let i=0;i<userNameLength;++i){
    console.log(userName[i]);
}
//nested for Loops
//print table from 1 to 10 using nested for loop?
for(let i=1;i<=10;++i){
    console.log("\n\nSTART TABLE OF "+i);
    for(let j=1;j<=10;++j){
        console.log(i*j+"\n");
    }
    console.log("END TABLE OF "+i);
}