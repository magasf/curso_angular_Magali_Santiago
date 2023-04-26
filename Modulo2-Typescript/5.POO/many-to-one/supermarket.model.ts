import { IProduct } from "./product.model";

//One supermarket to many Products (One to Many)


export interface ISupermarket{
    id: number;
    brandName: string;
    m2: number; // metros cuadrados
    numEmployees: number;
    products: IProduct[] // one to many
}