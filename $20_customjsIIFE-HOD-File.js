//Use in IIFE Function

(function User(id, name, email){
  
    document.write("this is IIFE fun"+"<br/>Id:- "+id+"<br/>Name:- "+name+"<br/>Email:- "+email);
    return 1;
})(223,'ram','ram@gmail.com');

(function User(id, name, email){
  
    document.write("this is IIFE fun"+"<br/>Id:- "+id+"<br/>Name:- "+name+"<br/>Email:- "+email);
    return 1;
})(223,'ram','ram@gmail.com');


// Hof (higher order function )

function studentInfo(batch){
    if(batch == 2022){
        return function(name){
         document.write(`Upsc Topper: ${name}`)
        }
    }
    if(batch == 2020){
        return function(name){
             document.write(`Unvercity Topper:${name}`);
        }
    }
    if(batch == 2019){
        return function(){
        document.write("Heigh secondry Topper...");
        }
    }
}
let showInfomation = studentInfo(2020)('manoj')
document.write(showInfomation)