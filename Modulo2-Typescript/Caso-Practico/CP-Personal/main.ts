import { IMovie } from "./movie";
import { MovieDatabase } from "./movie.dataBase";


const movieService = new MovieDatabase();
let movie1: IMovie ={
    id: -1,
    title: "La Nada",
    year: 2000,
    director: "Dios",
    duration: 0,
    genres: [],
    rate: 0
}
console.log(movieService.save(movie1))