let div = document.querySelector('div')
let ul = document.querySelector('ul')
let li = document.querySelector('li')

 div.addEventListener('click',()=>{
      console.log('main div call')
},true)


ul.addEventListener('click',()=>{
    console.log('Ul call')
},true)

li.addEventListener('click',()=>{
    console.log('Li call')
},true)

// console.log(divTag)