// src/movie/movie.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from './movies.entity';
import { MovieRepository } from './movie.repository';
import { Repository } from 'typeorm';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie) private movieRepo: Repository<Movie>,
  ) {}

  async getAllMovies(): Promise<Movie[]> {
    return this.movieRepo.find();
  }

  async getMovieById(id: number): Promise<Movie> {
    return this.movieRepo.findOne({ 
      
      where: {
          id: id
      },
   });
   }
   

  async createMovie(movieData: Partial<Movie>): Promise<Movie> {
    return this.movieRepo.save(movieData);
  }

   async updateMovie(id: number, movieData: Partial<Movie>): Promise<Movie> {
     await this.movieRepo.update(id, movieData);
     return this.getMovieById(id);
  }

  async deleteMovie(id: number): Promise<void> {
    await this.movieRepo.delete(id);
  }
}
