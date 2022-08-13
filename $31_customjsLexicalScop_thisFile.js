let UserInfor = {
    uname:'ram sharma',
    email:'ram@gmail.com',
    getInfo:function(){
        
    //  function testFun(){
    //     console.log(UserInfor.getInfo())
    //  }
    //  testFun()//not used to value in function
     
    // const testFun1=()=>{
    //     console.log("User Name:",this.nam)
    // }
    //  testFun1()

    //  (()=>{
    //     console.log("User Name:"+this.uname);
    //  })();//turn value
    
    // testFun1=()=>{
    //   console.log("User Name:",this.uname)
    //   document.write(this.uname)
    //     }
    // testFun1()// value is true


     function testFun(){
       console.log("User Name:",this.uname)
      }
    // testFun.call(this)
    //testFun.apply(this)
    let newFun = testFun.bind(this);
    newFun()

    }
}
UserInfor.getInfo()
//console.log(UserInfor.getInfo())
