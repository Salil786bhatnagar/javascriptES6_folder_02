//spread operator using Array and Object
let student={
    sname:'ram',
    lname:'sharma',
    email:'ram@gmail.com'
}

//console.log(student)

let college={
    fees:'65000',
    course:'Mca',
    busFees:'34000'
}

//let showData = Object.assign(student,college)
//console.log(showData)

let studentIndo={
    collegeName:'Medi-Cap',
    ...student,
    ...college
}
//console.log(studentIndo)

//Array using spread Operator

let roolNo1=[12,14,15,16,17];

let roolNo2 = [20,21,22,23,24,26];

let roolNo3 = [...roolNo1,27,28,30,32,33,40,...roolNo2];
//console.log(roolNo3); 


//Rest Operator
// function result(...marks){

//    document.write("<br/>Student Marks is:",marks)
// }
// result(35,44,50,58,60,45,69,70,66,80);

function result(...marks){
    var total = 0
   for(let i=0; i<marks.length;i++)
    total = total+marks[i];
   document.write("Total Marks:-",total)
}
result(35,44,50,58,60,45,69,70,66,80);