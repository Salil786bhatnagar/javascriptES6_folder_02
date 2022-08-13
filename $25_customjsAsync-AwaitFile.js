// Async and await

//step 1 using promise and async and await ----->

// let student = new Promise((resolve, reject)=>{
//  setTimeout(()=>{
//     let studentInfo={
//         Name :'Abhishek',
//         Lname:'Sharma',
//         College:'Medi-cap',
//         City:'Indore',
//         Email:'abi@gmail.com'
//     }
//     resolve(studentInfo)
//  },3000)
// })

// student.then((result)=>{
//     document.write('<br/>Name:'+result.Name+
//                    "<br/>Last name:"+result.Lname+
//                    "<br/>College:"+result.College+
//                    "<br/>City:"+result.City+
//                    "<br/>Email: "+result.Email);
// }).catch((error)=>{
//     document.write(error);
// })

// async function fetData(){
//     let showData = await student;
//     console.log(showData);
//     document.write('<br/>Name:'+showData.Name+
//                    "<br/>Last name:"+showData.Lname+
//                    "<br/>College:"+showData.College+
//                    "<br/>City:"+showData.City+
//                    "<br/>Email: "+showData.Email);
// }
// fetData()


//step2 using function in promise using async and ---> 
function getInformation(){
    let studentInfo={
        Name :'Abhishek',
        Lname:'Sharma',
        College:'Medi-cap',
        City:'Indore',
        Email:'abi@gmail.com'
    }

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
           resolve(studentInfo)
        },3000)
   })
}
//Async and Await
async function fetData(){
    let showData = await getInformation();
    console.log(showData);
    document.write('<br/>Name:'+showData.Name+
                   "<br/>Last name:"+showData.Lname+
                   "<br/>College:"+showData.College+
                   "<br/>City:"+showData.City+
                   "<br/>Email: "+showData.Email);
}
fetData()