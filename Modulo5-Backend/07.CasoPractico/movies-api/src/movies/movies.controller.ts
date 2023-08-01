// src/movie/movie.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { MovieService } from './movie.service';
import { Movie } from './movies.entity'

@Controller('movies')
export class MovieController {
  constructor(private movieService: MovieService) {}

  @Get()
  getAllMovies(): Promise<Movie[]> {
    return this.movieService.getAllMovies();
  }

  @Get(':id')
  getMovieById(@Param('id') id: number): Promise<Movie> {
     return this.movieService.getMovieById(id);
  }

  @Post()
  createMovie(@Body() movieData: Partial<Movie>): Promise<Movie> {
    return this.movieService.createMovie(movieData);
  }

  @Put(':id')
   updateMovie(@Param('id') id: number, @Body() movieData: Partial<Movie>): Promise<Movie> {
    return this.movieService.updateMovie(id, movieData);
  }

  @Delete(':id')
  deleteMovie(@Param('id') id: number): Promise<void> {
    return this.movieService.deleteMovie(id);
    
  }
}
