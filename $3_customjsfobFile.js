// var a = 2;
// var b = 5;
// var c = '10';
// var result = a+b+c;
// console.log(result); 

// var a = 2;
// var b = 5;
// var c = parseInt('10');//parseInt converd string to number
// var result = a+b+c;
// console.log(result); 

// function 

// function getMarks(){
//     let math=70;
//     return math;
// }
// let showMarks =  getMarks()
// document.write(showMarks);

// object 

let student = {
    name:'ram',
    email:'ram@gmail.com',
    city:'pune',
    'my name':'dummy',
    fullName:function(){
        return this.email+"<br/>"+this.name+"<br/>"+this.city
    }

}
student.name='Piyus Mishra'
// let showName = sutdent.fullName()
document.write(student.fullName())
console.log(student['my name']);

