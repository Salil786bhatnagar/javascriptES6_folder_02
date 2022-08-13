function Car(brand,model,color){
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.name = function(){
        return this.brand+" "+this.model
    }
}

// prototyp used in custractor
Car.prototype.modelNo='2010'
Car.prototype.price = function(priceno){
 return 'show the price is:-'+priceno.toLocaleString();
}


var carDetails1 = new Car('Mruti','Shift','Blue');
carDetails1.fulType='patrol';

let newSHowObj = carDetails1.modelNo
console.log("model no is:->",newSHowObj)
console.log(carDetails1.price(29000))
//console.log(carDetails1)

// let carObj = carDetails1.name();
// console.log(carDetails1)

var carDetails2 = new Car('Hundai','i20','skyblue');
console.log(carDetails2)