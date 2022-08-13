//forEach function
let x = [10,12,16,20,33,35,40];
//x.forEach(myfun);

// function myfun(value,index,array){
//     document.write("<br/>"+value);
//    console.log(value+"==Index=="+index+"==array=="+array)
// }

//arraw function
let newFun=(id)=>{
    console.log('this is a arror function my id:',+id)
}
newFun(19)

//arrow function
let arr = [10,12,16,20,33,35,40];
arr.forEach((value,index,array)=>{
    document.write("<br/>"+value);
})

//map function

let userData=['ram','gopal','pawan','mahesh','gagan'];
    
    userData.map((item,index)=>{
        console.log(item+" "+index)
        return(
           document.write("<br/>",item)
        )
    })

// filter

let newX = [1,5,10,20,26,40,55];
let data = newX.filter((value, index, array)=>{
    return value > 45 ;
})
console.log(data);

// reduce

let newArr   = [2,4,7,19,3];
let showData = newArr.reduce((total,value,index,array)=>{
    console.log(total,value, index, array);
    return total + value;
},0)
console.log(showData)



// reduce use to array object manage the value  
const users = [
    {firstName:"peeyush","lastName":"kriplani"},
    {firstName:"peeyusha","lastName":"kriplania"},
    {firstName:"vinay","lastName":"c"},
    {firstName:"abhi","lastName":"m"},
    {firstName:"let","lastName":"c"}
]
let newData = users.reduce((arr, user)=>{
   arr.push(user.firstName);
   return(arr);
},[])
document.write(newData); 
 console.log(newData);