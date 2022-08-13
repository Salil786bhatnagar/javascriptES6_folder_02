// callback Hell and Promiss 

//callback hell

// setTimeout(()=>{
//     document.write("<br/>","call to hr");
//     setTimeout(() => {
//         document.write("<br/>","hr call to dirctor");     
//         setTimeout(()=>{
//          document.write("<br/>","dirctor call to senior Developer for infomation..");  
//          setTimeout(()=>{
//             document.write("<br/>","senior Developer to call jurior developr for interview in frashar...");
//             setTimeout(() => {
//                 document.write("<br/>","jurior developr to call senior Developer in select 4 user and 5 user is rejected...");      
//             },3000);
//          },3000)
//         },4000)
//     },2000);
// },3000)


// promiss
//Ex1-> use object call to promiss
// let user = new Promise((resolve,rejecte)=>{
//      setTimeout(()=>{
//         let userInfo={
//             name:'ram',
//             lname:'shamrma',
//             rollNo:'2345',
//             email:'ram@gmail.com'
//          }
//         //  resolve("<br/>Name:"+userInfo.name+"<br/>LName:"+userInfo.lname+"<br/>RollNo: "+userInfo.rollNo+"<br/>Email: "+userInfo.email);
//         rejecte("page not defin please try....");
//      },3000)
     
    
// })
// user.then((result)=>{
//     document.write('<br/>',result);
// }).catch((err)=>{
//     document.write("<br/>",err);
// })

//Ex2-> use to 2 promiss call...

// let CallHr = new Promise((resolve,rejecte)=>{
//     setTimeout(()=>{
//         let hrCall = "call to hr...";

//        resolve(hrCall)
//        //rejecte("page not defin please try....");
//     },3000)
// })

// CallHr.then((result1)=>{
//  document.write("<br/>",result1);
// }).catch((error)=>{
//     document.write(error);
// })

// let CallDirector = new Promise((resolve,rejecte)=>{
//     setTimeout(()=>{
//         let DirectorCall = "hr call to Director...";

//        //resolve(DirectorCall)
//        rejecte("<br/>"+"call not connect ot director im try....");
//     },4000)
// })

// CallDirector.then((result2)=>{
//  document.write("<br/>",result2);
// })
// .catch((error)=>{
//     document.write(error);
// })


//Ex3->

// let passStudent  = new Promise((resolve,rejecte)=>{
//          setTimeout(()=>{
//             var Result1={
//                 pass:'57%'
//              }
//              resolve(Result1)
            
//          },3000);

//         })  
        
// let failStudent  = new Promise((resolve,rejecte)=>{
//     setTimeout(()=>{
//         var Result2={
//             fail:'35%'
//         }
//         resolve(Result2)
        
//     });

//     })          

// let sapliMantriStudent  = new Promise((resolve,rejecte)=>{
//     setTimeout(()=>{
//         var Result3={
//             saplimantri:'8%'
//         }
//         resolve(Result3)
//         //rejecte('Error page not found...')
        
//     });

//     })
//     Promise.all([passStudent,failStudent,sapliMantriStudent])
//     .then((results)=>{
//         document.write("<br/>Pass student: "+results[0].pass+"<br/>Fail student: "+results[1].fail+"<br/>Saplimant student: "+results[2].saplimantri+"<br/>");
//         console.log(results)
//     })
//     .catch((error)=>{
//         document.write(error);
//     })
   

//Ex4-> promise.catch

// let passStudent  = new Promise((resolve,rejecte)=>{
//     setTimeout(()=>{
//        var Result1={
//            pass:'57%'
//         }
//         resolve(Result1)
       
//     },3000);

//    })  
   
// let failStudent  = new Promise((resolve,rejecte)=>{
// setTimeout(()=>{
//    var Result2={
//        fail:'35%'
//    }
//    resolve(Result2)
   
// });

// })          

// let sapliMantriStudent  = new Promise((resolve,rejecte)=>{
// setTimeout(()=>{
//    var Result3={
//        saplimantri:'8%'
//    }
//    //resolve(Result3)
//    rejecte('saplimantri page are not found please try...'+Result3)
   
// });

// })
// Promise.all([
//     passStudent.catch(error=>{return error}),
//     failStudent.catch(error=>{return error}),
//     sapliMantriStudent.catch(error=>{return error})
// ])
// .then((results)=>{
// //    document.write("<br/>Pass student: "+results[0].pass+
// //                   "<br/>Fail student: "+results[1].fail+
// //              "<br/>Saplimant student: "+results[2].saplimantri
// //                   );
//    console.log(results[0])
//    console.log(results[1])
//    console.log(results[2])
// })


//Ex5-> Promiss.allSettled and Promiss.race

// let passStudent  = new Promise((resolve,rejecte)=>{
//     setTimeout(()=>{
//        var Result1={
//            pass:'57%'
//         }
//         resolve(Result1)
       
//     },3000);

//    })  
   
// let failStudent  = new Promise((resolve,rejecte)=>{
// setTimeout(()=>{
//    var Result2={
//        fail:'35%'
//    }
//    resolve(Result2)
   
// });

// })          

// let sapliMantriStudent  = new Promise((resolve,rejecte)=>{
// setTimeout(()=>{
//    var Result3={
//        saplimantri:'8%'
//    }
//    //resolve(Result3)
//    rejecte('saplimantri page are not found please try...'+Result3)
   
// });

// })
// Promise.allSettled([passStudent,failStudent, sapliMantriStudent
// ])
// .then((results)=>{
//    document.write("<br/>Pass student: "+results[0].pass+
//                   "<br/>Fail student: "+results[1].fail+
//              "<br/>Saplimant student: "+results[2].saplimantri
//                   );
//    console.log(results[0])
//    console.log(results[1])
//    console.log(results[2])
// })

//Ex6-> Promise.race


let passStudent  = new Promise((resolve,rejecte)=>{
    setTimeout(()=>{
       var Result1={
           pass:'57%'
        }
        resolve(Result1)
       
    },1000);

   })  
   
let failStudent  = new Promise((resolve,rejecte)=>{
setTimeout(()=>{
   var Result2={
       fail:'35%'
   }
   resolve(Result2)
   
},2000);

})          

let sapliMantriStudent  = new Promise((resolve,rejecte)=>{
setTimeout(()=>{
   var Result3={
       saplimantri:'8%'
   }
   resolve(Result3)
   //rejecte('saplimantri page are not found please try...'+Result3)
   
},4000);

})
Promise.race([passStudent,failStudent,sapliMantriStudent])
.then((results)=>{
   document.write("<br/>Pass student: "+results.pass+
                  "<br/>Fail student: "+results.fail+
                  "<br/>Saplimant student: "+results.sapliMantriStudent
                  );
   console.log(results)

})
.catch((err)=>{
    console.log(err)
})
