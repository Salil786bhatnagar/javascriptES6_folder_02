let user={
    name:'ram',
    lname:'sharma',
    id:'123',
    language:'',
    set lang(lang){
       this.language = lang
    },

    // fullName:function(){
    //     return this.name+" "+this.lname
    // }

    get fullName(){
        return this.name+" "+this.lname
    }
}

 user.lang='en';
//console.log(user);//setter
//console.log(user.fullName());//function

console.log(user.fullName)//getter