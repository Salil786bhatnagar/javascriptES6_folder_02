// javascript Closure

function fun1(){
    
let stu={
    name:'ram',
    lname:'sharma'
}
document.write("<b><u>Outer fun1 Student Data</u></b>:-"+"User Name:-"+stu.name+"<br/>"+"Last Name:-"+stu.lname)

 function fun2(){
    let product={
        milk:'1kg',
        tea:'1kg',
        coffi:'2kg'
    }
    document.write("<br/>"+"<b><u>Inner Fun2  Product Data</u></b>:-"+"Milk:-"+product.milk)
    document.write("<br/>"+"<b><u>Outer fun1 Student Data</u></b>:-"+"User Name:-"+stu.name+"<br/>"+"Last Name:-"+stu.lname)
 }
  fun2();
}
fun1()