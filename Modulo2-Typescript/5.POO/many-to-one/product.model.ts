import { Isuermarket } from "./supermarket.model";

//Many products To One
export interface IProduct {
    id: number;
    title: string;
    price: number;
    quantity: number; //stock: cantidad de producto disponible
    supermarket: Isuermarket;
}