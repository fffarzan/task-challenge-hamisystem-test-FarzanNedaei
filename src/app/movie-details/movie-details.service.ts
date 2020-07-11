import { Injectable } from '@angular/core';
import { MovieDetails } from './movie-details.model';

@Injectable()
export class MovieDetailsService {
  private movieDetails: MovieDetails;

  setMovieDetails(movieDetails: MovieDetails) {
    this.movieDetails = movieDetails;
  }

  getMovieDetails() {
    return this.movieDetails;
  }
}