
//without throw->

try{
    
    cout<<hello;
    
}catch(er){
    console.log(er.message);
}finally{
    console.log("small error!");
}

//with thorw->

const myNum=20;
try{
    if(myNum!=20)console.log("not twenty!");
    else throw myNum;
    
}
catch(myNum){
    console.log(myNum);

}finally{
    console.log("execution completed! ");
}
