//Array Destructurign

let arr = [12,13,15,16,20,25,26];

//let [a1,a2,a3] = arr;
//console.log(a1,a2,a3);

//show the first and last index value in array
let [a1,,,,,,end] = arr;
console.log(a1,end)

//Object Destructuring

let user ={
    userName:'ram',
    lastName:'sharma',
    uId:'u1234',
    email:'ram@gmail.com',
    address:{
        city:'gwalior',
        zipcode:'474005'
    }
}

let {userName:uName,lastName,email,address} = user
console.log("user info ->",uName,lastName,email,address.city,address.zipcode)
document.write("Name:"+uName+"<br/>Last Name:"+lastName+"<br/>Email:"+email+"<br/>City:"+address.city+"<br/>Zip code"+address.zipcode)



// const module = {
//     x: 42,
//     getX: function() {
//       return this.x;
//     }
//   };
  
  //const unboundGetX = module.getX;
  //console.log(unboundGetX());//undefine

//   const unboundGetX = module.getX();
//   console.log(unboundGetX);//true

  //console.log(module.getX())//true