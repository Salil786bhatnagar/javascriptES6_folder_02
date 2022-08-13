// let test = window
//console.log(test);
//console.log(window.document)

//document.write('<h1><u>Hello World</u></h1>')

//document.getElementById...

// let showElem = document.getElementById('demo');
// console.log(showElem);

//document.getElementbyClass....

//let showElemClass = document.getElementsByClassName('demo1');
//console.log(showElemClass[0].innerText)

//document.getElementByTagName...

// let showTegName = document.getElementsByTagName('h2')
// console.log(showTegName[0].innerHTML);
// showTegName[0].innerHTML='<h3>Html Tutorial video ....</h3>'
// showTegName[0].style.color='red';
// let divTag = document.querySelector('#test')
// console.log(divTag.innerHTML)


//ul li show the li list in using document.getElementByTagName()....

let showData = document.getElementsByTagName('li');
document.write(showData);

let newData = Array.from(showData);//convert To Array....
console.log(newData);

newData.forEach((item,index)=>{// using forEach function
    let color = (index%2==0)?'red':'green';
    item.style.color = color;
})

let showInput = document.getElementById('inputId')
console.log(showInput.value)

let showTagValue = document.querySelector('p');
document.write(showTagValue.innerHTML="Name: "+userInfo.name+"<br>Last Name:"+userInfo.lname+"<br/>Email:"+userInfo.email);



