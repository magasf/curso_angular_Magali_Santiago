// src/movie/movie.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from './movies.entity';
import { MovieRepository } from './movie.repository';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(MovieRepository)
    private readonly movieRepository: MovieRepository,
  ) {}

  async getAllMovies(): Promise<Movie[]> {
    return this.movieRepository.find();
  }

//   async getMovieById(id: number): Promise<Movie> {
//     return this.movieRepository.findOne(id);
//   }

  async createMovie(movieData: Partial<Movie>): Promise<Movie> {
    return this.movieRepository.save(movieData);
  }

//   async updateMovie(id: number, movieData: Partial<Movie>): Promise<Movie> {
//     await this.movieRepository.update(id, movieData);
//     return this.getMovieById(id);
//   }

  async deleteMovie(id: number): Promise<void> {
    await this.movieRepository.delete(id);
  }
}
