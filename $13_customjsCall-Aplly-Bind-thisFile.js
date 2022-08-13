// //object
// let user={
//     name:'ram',
//     lname:'sharma',
//     id:'123',
//     city:'pune',
//     fullName:function(){
//         return this.name+" "+this.lname
//     },
//     'email id':'ram@gmail.com'
// }

// //console.log(user.fullName())
// //console.log(user['email id'])

// // object convert to array
//  let userArray = Object.values(user);
//  console.log(userArray);

//  let student={
//     name:'gopal',
//     lname:'tomar',
//     id:'1234',
//     city:'gwalior',
//     info:function(id,zipcode){
//         return 'my address is gwalior',this.name+" "+"call in id:-"+id+" "+"Gwalior zip code:-"+zipcode
//     },
// }

// let stunewObj = {
//        name:'rahul gupta'
//     }
// // Call method------>    
// // define object and name......    
// // let newInfo = student.info.call({name:'rahul'});
//      //or
// // let newInfo = student.info.call(stunewObj );
// // console.log(newInfo);

// // let newInfo = student.info(45);
// // console.log(newInfo);

// // define object and id.....
//   let newInfo = student.info.call(stunewObj,'12');
//    console.log(newInfo);

// //Apply method-------->
// let newInfo1 = student.info.apply(stunewObj,['12','474005']);
// console.log(newInfo);


// // Bind method
// function user_Info(){
//     return "User Full Name Is:-"+this.Uname+" "+this.Ulname
// }

// let Information = {
//     Uname:'Vishaka',
//     Ulname:'Sharma',
// }
// let shwoData = user_Info.bind(Information);
// console.log(shwoData());

 
// let Newuser={
//     name:'pooja',
//     lname:'jain',
//     fullName:function(){
//         return this.name+" "+this.lname
//     },
// }

// let newData = Newuser.fullName;
// newData = newData.bind(Newuser);
// console.log(newData());


let TestData={
    name:'pooja',
    lname:'jain',
    fullName:function(){
        return this.name+" "+this.lname
    },
}
console.log(this.TestData.name);