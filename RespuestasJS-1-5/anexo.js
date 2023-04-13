class SmartPhone{
    constructor(marca,modelo, color, memoria){
        
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.memoria= memoria;
    }

}

let smartphone1 = new SmartPhone("Apple","Iphone 14 pro max","Blanco","128GB");
let smartphone2 = new SmartPhone("Apple","Iphone 14 pro","Blanco","128GB");
let smartphone3 = new SmartPhone("Apple","Iphone 14 mini","Blanco","128GB");
let smartphone4 = new SmartPhone("Xiaomi","Redmi note 11","Negro","256GB");

console.log(smartphone1)
console.log(smartphone2)
console.log(smartphone3)
console.log(smartphone4)
