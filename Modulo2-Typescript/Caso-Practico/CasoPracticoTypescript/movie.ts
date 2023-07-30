
//Interfez IMovie

export interface IMovie{
    id: number;
    title: string;
    year:   number;
    director: string;
    duration: number;
    genres: string[];
    rate: number;
}