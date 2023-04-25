import { IAddress } from "./adress.model";

export interface IUser {
    id: number;
    email: string;
    birthday: Date;
    phone: string;
    address: IAddress;//One to one unidireccional

} 