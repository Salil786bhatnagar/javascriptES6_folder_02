//Synchronous and Asynchronous

//Asynchronous

function fun1(){
    document.write("<br/>","this is call to fun1...");
}
function fun2(){
    document.write("<br/>","this is call to fun2---");
}
//fun1();
//fun2();

//Synchronous

function demo1(){
    document.write("<br/>","this is call to fun1...");
}
function demo2(){
    document.write("<br/>","this is call to fun2---");
}

setTimeout(()=>{
    demo1();
},2000); 
demo2();