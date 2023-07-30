import { IBook } from "../books/models/book.model";

export enum UserRole {
  USER = 'user',
  ADMIN = 'admin'
}
export interface IUser {
  id: number;
  username: string;
  email: string;
  password?: string;
  role?: UserRole;
  avatarImage?: string;
  book?:Partial<IBook>;
}
