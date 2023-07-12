export enum UserRole{
    USER = 'user',
    ADMIN = 'admin'
}
export interface IUser {
    id: number;
    username: string;
    email: string;
    
}
