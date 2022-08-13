// call by value and call by refrence

//call by value

/*let x = 10;
let y = x;
 y = 20;
 x = 29;
 console.log('value of x:-',x);
 console.log('value of y:-',y);*/

 //call by Refrence

 let student = {
    name:'ram',
    class:'bca',
    id:'123'
 }

 let stuRefValue = student;
 
//  student.push({city:'pune'});

student.city='pune'

 stuRefValue.class='Mca'
 console.log("student ref value:",stuRefValue)
 console.log('student value:',student)