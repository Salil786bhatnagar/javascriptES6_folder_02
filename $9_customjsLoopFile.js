// for loop
let arr = [1,3,5,9,10,12,15];
for(let i=0; i<arr.length; i++){
    document.write("<br/>",arr[i])
}

let student={
    name:'ram',
    lname:'shama',
    email:'ram@gmail.com',
    city:'pune'
}

// for(x in student){//Or for(let x in student)
//     console.log("key element and value",x,student[x]);
// }

// for(x of arr){//Or for(let x of arr)
//     console.log(x);
// }

let i =1;
// while(i<10){
//  console.log('i is',+1)
//  i++
// }

do{
    console.log('i is',+i)
    i++;
}
while(i<=10)