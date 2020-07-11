import { Injectable } from '@angular/core';
import { MovieList } from './movie-list.model';

@Injectable()
export class MovieListService {
  private movieList: MovieList;

  setMovieList(movieList: MovieList) {
    this.movieList = movieList;
  }

  getMovieList() {
    return this.movieList;
  }
}