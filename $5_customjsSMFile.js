var str = 'code improved demo my last data is demo';
//console.log(str.length)
//str = str.indexOf("<br/>",'demo');
//str = str.lastIndexOf('demo')
//console.log(str);

//indexOf
// str = str.indexOf('demo',14)
//lastIndexOf
//str = str.lastIndexOf('demo',30)

//slice
//str = str.slice(14,18)//starting value and end value
//str = str.slice(4,-3)
//str = str.slice(-3)

// substring
// str = str.substring(0,14)
// console.log(str);

//toUppercase
let user = 'ram sharma';
console.log(user.toUpperCase());
//toLowercase
let userInfo = 'RAM VERNAM';
console.log(user.toLocaleLowerCase());

//Replace
let newUser = 'ram sharma';
newUser = newUser.replace('sharma','Bhatnagar')
console.log(newUser);

//trim
let User = '          Gopal sharma';
console.log(User.trim());

//concate and +

let text1 = 'ram';
let text2 = 'gopal';
//let text3 = text1+" "+text2;
text3 = text1.concat(" ",text2);
console.log(text3)