//Array show value
//includes:-
let arr = [12,15,17,19,20];
let arrResponse = 13;

if(arr.includes(arrResponse)){
    console.log("Array no is match... "+arrResponse);
}else{
    console.log("Array no is not match... "+arrResponse);
}

//string show value
//includes:-

let str = "hello this is my test page";
let strResponse = 'text';
if(str.includes(strResponse)){
    console.log("string value is match --> ",strResponse);
}else{
    console.log("string value is not match --> ",strResponse);
}

//Template Literals

let str1 = "good";
let str2 = "morning";
let msg = `Hello To All ${str1} ${str2}`;
console.log(msg)

// Exponentiation(**);

// let x = 4;
let y = 3**2;
console.log("Value is:->",y);