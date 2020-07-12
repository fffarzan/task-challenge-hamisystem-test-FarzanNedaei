import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { MovieList } from '../movie-list/movie-list.model';
import { MovieDetails } from '../movie-details/movie-details.model';
import { MovieDetailsService } from '../movie-details/movie-details.service';
import { MovieListService } from '../movie-list/movie-list.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  baseUrl: string = 'http://www.omdbapi.com/?apiKey=9af01761';

  constructor(
    private http: HttpClient,
    private movieDetailsService: MovieDetailsService,
    private movieListService: MovieListService
  ) { }

  fetchMovieList(searchResult: string, pageNum?: string) {
    return this.http
      .get<MovieList>(
        this.baseUrl,
        {
          params: {
            s: searchResult,
            page: '1'
          },
          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }
      )
      .pipe(
        tap(movieList => this.movieListService.setMovieList(movieList))
      );
  }

  fetchMovieDetails(movieId: string) {
    return this.http
      .get<MovieDetails>(
        this.baseUrl,
        {
          params: { i: movieId },
          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }
      )
      .pipe(
        tap(movieDetails => this.movieDetailsService.setMovieDetails(movieDetails))
      );
  }
}