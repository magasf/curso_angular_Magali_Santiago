import { IProduct } from "./product.model";
import { ISupermarket } from "./supermarket.model";


let mercadona: ISupermarket ={
    id: 1,
    brandName: "Mercadona",
    m2: 0,
    numEmployees: 0,
    products: []
}
let yogures: IProduct= {
    id: 1,
    title: "Yogures sabor kiwi",
    price: 4.99,
    quantity: 6,
    supermarket: mercadona //Many to One
}
let pan: IProduct= {
    id: 2,
    title: "Pan de pueblo Rustico",
    price: 0.99,
    quantity: 20,
    supermarket: mercadona //Many to One
}

//Completar asociacion bidireccional
//Desde un producto acceder a un supermercado
//Desde un supermercado puedo acceder a los productos

mercadona.products.push(yogures);
mercadona.products.push(pan);

//Crar un nuevo supermercado esta vez pasando los productos directamente
let lider: ISupermarket ={
    id: 2,
    brandName: "Lider",
    m2: 0,
    numEmployees: 0,
    products: [
        {

            id: 3,
            title: "Sandia",
            price: 9.87,
            quantity: 7,
            
        },
        {
            id: 4,
            title: "Naranja",
            price: 0.87,
            quantity: 600
        }
    ]       
    
}
console.log(lider)
//Unidireccional: unicamente de un lado de la asociacion puedo llegar a la otra clase:
//por ejemplo: desde supermercado puedo llegara a producto, pero desde producto no puedo llegar a supermercado

//Bidireccional: desde ambos lados de la asociacion puede=i acceder a la otra clase
//por ejemplo: desde supermercado puedo llegar a producto y desde un producto tambien puedo llegar a un supermercado

//lider.products[0].supermarket = lider;

//Asignar supermercado lider 

//For
lider.products
for (const product of lider.products) {
    product.supermarket = lider
    console.log(product)
}
console.log("-----------------------")
//forEach
lider.products.forEach(product => {
    console.log(product.supermarket?.brandName)
    
});
console.log("-----------------------")

//forEach
lider.products.forEach(product => product.supermarket = lider);

//Hacer un array de precios
let prices = lider.products.map(product => product.price)
console.log(prices)