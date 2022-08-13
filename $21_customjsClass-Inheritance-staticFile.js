//class, inheritance, static

//class

class car{
  constructor(brand, price){
  this.brand=brand;
  this.price=price;
  }
  getCarInfo(color){
    return `Car Brand: ${this.brand} Car Price ${this.price}  car color: ${color}`
  }

  getModel(model){
    return `car model ${model} car brand ${this.brand}`
  }  
  
  new(){
    return 'Next month new BMW Car'
  }

static address(){
    return 'India'+'City:- Gwalior'+'State:- M.P'
  }

}
 
class Vehicle extends car{
 constructor(brand, price,color,model){
    super(brand, price,model)
    this.color = color
 }

 getvehicleType(Vehicle,color){
    // let infoDetails = super.getModel()// or
    let infoDetails = this.getModel()
    return `${Vehicle} Byk Color: ${color} Brand is ${this.brand}`+infoDetails
 }

 new(){
    return 'Next month new Safari Car'
  }

}

// class car and object call....
//let carObj = new car('Maruti',59000)

//let showCarindo = carObj.getCarInfo()
//let showModel2 = carObj.getModel(2010,'Hundai');
// let showModel1 = carObj.getModel(2006,'Shift');
// let showModel2 = carObj.getModel(2010,'Hundai');
// document.write(showModel1, showModel2)
//document.write("<br/>",showCarindo+"<br/>"+showModel2)
//document.write("<br/>",showModel2)

//class vehicle and extends car 

//call static function in

console.log(Vehicle.address());
document.write("<br/>",Vehicle.address())//call to static function

let obj = new Vehicle('Maruti',59000)
let showInfo = obj.getCarInfo('white');
let showVhicleInfo = obj.getvehicleType(['Schooter','Byk','Buloard'],'red');
let showNew = obj.new();
document.write("Car Information:"+showInfo+"<br/> Type Of Vehicle: "+showVhicleInfo);
document.write("<br/>",showNew)
