//Get and Post:-
//Fetch API:-

// let url = "https://jsonplaceholder.typicode.com/posts"
// console.log(url);
// fetch(url)
// .then(response=>response.json())
// .then(response=>{
//     console.log(response)
// })

// fetch(url).then((result)=>{
//     result.json().then((response)=>{
//         console.log(response);
//     })
// })

//Get api:-
// async function getInformation(){
//     let url ="https://jsonplaceholder.typicode.com/posts";
//     let Data = await fetch(url);
//     let responseData = Data.json();
//     return new Promise((resolve, reject)=>{
//         resolve(responseData);
//     })
// }

// async function getData(){
//     let fethcApi = await getInformation();
//     console.log(fethcApi);
//     fethcApi.map((item)=>{
//      return document.write("<br/>"+item.id+"<br/>"+item.title+"<br/>"+item.body)
//     })
// }
// getData()


//Post Api
async function getInformation(){
    let url ="https://jsonplaceholder.typicode.com/posts";

    // let options ={
    //     method:'POST',
    //     headers:{},
    //     body:Joson.stringify({
    //         name:'ram sharma',
    //         email:'ram@gmail.com'
    //     })
    // }// post add value using joson stringify()

    let Data = await fetch(url);
    let responseData = Data.json();
    return new Promise((resolve, reject)=>{
        resolve(responseData);
    })
}

async function getData(){
    let fethcApi = await getInformation();
    console.log(fethcApi);
    fethcApi.map((item)=>{
     return document.write("<br/>"+item.id+"<br/>"+item.title+"<br/>"+item.body)
    })
}
getData()
