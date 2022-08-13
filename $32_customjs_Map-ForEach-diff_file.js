//foreach array

let arr = [10,20,30,40,50,60];
console.log(arr)
// arr.forEach((item,index,array)=>{
//     console.log(arr)
//     document.write("<br/>:",item)
//     arr[index]= item + 2;
// })
// console.log(arr)

let newArr = arr.forEach((item,index,array)=>{
    document.write("<br/>:",item)
    arr[index]= item + 2;
    return arr[index]
})
console.log(newArr)