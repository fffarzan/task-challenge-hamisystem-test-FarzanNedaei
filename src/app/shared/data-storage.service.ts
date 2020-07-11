import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { MovieList } from '../movie-list/movie-list.model';
import { MovieDetails } from '../movie-details/movie-details.model';
import { MovieDetailsService } from '../movie-details/movie-details.service';
import { MovieListService } from '../movie-list/movie-list.service';

@Injectable()
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private movieDetailsService: MovieDetailsService,
    private movieListService: MovieListService
  ) { }

  fetchMovieList() {
    return this.http
      .get<MovieList>(
        'http://www.omdbapi.com/?apiKey=9af01761&s=bad&page=1',
        {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }
      )
      .pipe(
        tap(movieList => this.movieListService.setMovieList(movieList))
      );
  }

  fetchMovieDetails() {
    return this.http
      .get<MovieDetails>(
        'http://www.omdbapi.com/?apiKey=9af01761&i=tt0060196',
        {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }
      )
      .pipe(
        tap(movieDetails => this.movieDetailsService.setMovieDetails(movieDetails))
      );
  }
}