let arr = [12,33,44,10,15,20,55,45];
let str = ['ram','gopal','pankaj','rajeev']
console.log(arr.length);

let type = arr instanceof Array;
//console.log(type);
//console.log(Array.isArray(arr));
let newStr = arr.toString();
console.log(newStr);

let strData = str.toString();
console.log(strData);

let strData1 = str.join('/');
console.log(strData1);

//pop : array of delete in last element
let arr1 = [10,12,16,18,20,33,40,48,66];
//arr1.pop();
//arr1.shift();
//arr1.push(100);
//arr1.push(105);
//arr1.unshift(5)
//arr1.unshift(2)

//arr1.splice(2,4,13,14,15)//startingvalue,deletevalue,addvalue

console.log(arr1);

let x = [12,13];
let y = [14,15];
let z = x.concat(y);
console.log(z)
