
// try{
//     let x = 10;
//     if(x == 20) throw "value is not equal" 
    
//     //document.write("show the value is:", x);
// }catch(err){
//     console.log("call chatch error",err);
// }

// finally{
//     console.log('im called')
// }

//local and global
var car = 'maruti-800'
function fun1(){
    //var car = 'maruti-800';
    console.log("fun1 call",car);
}
function fun2(){
//var car = 'maruti-800';
    console.log("fun2 call",car);
}
fun1()
fun2()