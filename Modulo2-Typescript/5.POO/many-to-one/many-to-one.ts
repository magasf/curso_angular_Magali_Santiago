import { IProduct } from "./product.model";
import { Isuermarket } from "./supermarket.model";


let mercadona: Isuermarket ={
    id: 1,
    brandName: "",
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