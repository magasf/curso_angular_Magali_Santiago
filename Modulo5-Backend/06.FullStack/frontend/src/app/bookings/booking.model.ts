import { IBook } from "../books/models/book.model";

export interface IBooking {
  id: number;
  user?: any;
  book?: Partial<IBook>;
  price: number;
  startDate: Date;
  finishDate: Date;
}
