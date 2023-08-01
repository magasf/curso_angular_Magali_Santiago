// src/movie/movie.repository.ts
import { EntityRepository, Repository } from 'typeorm';
import { Movie } from './movies.entity';

@EntityRepository(Movie)
export class MovieRepository extends Repository<Movie> {
  // Puedes agregar métodos personalizados para consultar películas si lo necesitas
}
