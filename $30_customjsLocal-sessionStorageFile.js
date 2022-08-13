localStorage.setItem('name','Ram Sharma')
localStorage.setItem('email','ram123@gmail.com')
localStorage.setItem('contact','9876546789')
let roolNo = [100,112,113,101,118,120];
localStorage.setItem('arrayData',JSON.stringify(roolNo))

//get value in localstorage

let fullName = localStorage.getItem('name');
console.log(fullName);

let Email = localStorage.getItem('email');
console.log(Email)

let arrayData = localStorage.getItem('arrayData');
arrayData = JSON.parse(arrayData);
console.log(arrayData)

//remove item in localstorage

localStorage.removeItem('email')

//All remove item in localstorage

localStorage.clear();