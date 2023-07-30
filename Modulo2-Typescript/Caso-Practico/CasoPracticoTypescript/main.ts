import { IMovie } from './movie';
import { MovieDatabase } from './movie.database';

// Crear una instancia de MovieDatabase
const movieDatabase = new MovieDatabase();

// Ejemplo de películas
const movie1: IMovie = {
  id: 0,
  title: 'El Padrino',
  year: 1972,
  director: 'Francis Ford Coppola',
  duration: 175,
  genres: ['Crime', 'Drama'],
  rate: 9.2,
};

const movie2: IMovie = {
  id: 0,
  title: 'Interestelar',
  year: 2014,
  director: 'Christopher Nolan',
  duration: 169,
  genres: ['Adventure', 'Drama', 'Sci-Fi'],
  rate: 8.6,
};
const movie3: IMovie = {
    id: 0,
    title: 'La La Land',
    year: 2016,
    director: 'Damien Chazelle',
    duration: 128,
    genres: ['Comedy', 'Drama', 'Music'],
    rate: 8.0,
  };
  
  const movie4: IMovie = {
    id: 0,
    title: 'Inception',
    year: 2010,
    director: 'Christopher Nolan',
    duration: 148,
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    rate: 8.8,
  };

// Insertar películas en la base de datos
movieDatabase.insertMovie(movie1);
movieDatabase.insertMovie(movie2);
movieDatabase.insertMovie(movie3);
movieDatabase.insertMovie(movie4);

// Consultar todas las películas
const allMovies = movieDatabase.getAllMovies();
console.log('Todas las películas:');
console.log(allMovies);

// Consultar una película por id
const movieById = movieDatabase.getMovieById(2);
console.log('Película con id 2:');
console.log(movieById);

// Actualizar una película
if (movieById) {
  movieById.title = 'Interstellar'; // Corregimos el título
  movieDatabase.updateMovie(movieById);
  console.log('Película actualizada:');
  console.log(movieDatabase.getMovieById(2));
}

// Eliminar una película
const movieToDeleteId = 1;
const isDeleted = movieDatabase.deleteMovie(movieToDeleteId);
console.log(`¿Se eliminó la película con id ${movieToDeleteId}? ${isDeleted}`);

// Consultar todas las películas después de eliminar
console.log('Todas las películas después de eliminar:');
console.log(movieDatabase.getAllMovies());