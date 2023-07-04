import { ILocation } from "./location.model";

export interface IAuthor {
  id: number;
  name: string;
  email: string;
  bio: string;
  birthday: Date;
  photo: string;
  location?: ILocation;
}
