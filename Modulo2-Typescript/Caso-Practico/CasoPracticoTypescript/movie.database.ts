
import { IMovie } from './movie';

export class MovieDatabase {
  private movies: IMovie[] = [];

  private generateNextId(): number {
    return this.movies.length > 0 ? Math.max(...this.movies.map(movie => movie.id)) + 1 : 1;
  }

  insertMovie(movie: IMovie): void {
    movie.id = this.generateNextId();
    this.movies.push(movie);
  }

  updateMovie(updatedMovie: IMovie): boolean {
    const index = this.movies.findIndex(movie => movie.id === updatedMovie.id);
    if (index !== -1) {
      this.movies[index] = updatedMovie;
      return true;
    }
    return false;
  }

  deleteMovie(id: number): boolean {
    const index = this.movies.findIndex(movie => movie.id === id);
    if (index !== -1) {
      this.movies.splice(index, 1);
      return true;
    }
    return false;
  }

  getMovieById(id: number): IMovie | undefined {
    return this.movies.find(movie => movie.id === id);
  }

  getAllMovies(): IMovie[] {
    return this.movies;
  }
}