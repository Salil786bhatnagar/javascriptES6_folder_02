//Call Back Function ....
// A callback is a function pass as an argument to another function

function hrCall(cb){
    document.write("<br/>Process....",'hr Call...');
    setTimeout(()=>{
        cb();
    },3000)
}
function hrDirectorCall(){
    document.write("<br/>","hr DirectorCall...");
}
hrCall(hrDirectorCall);
