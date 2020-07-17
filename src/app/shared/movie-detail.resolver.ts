import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { MovieDetails } from '../movie-details/movie-details.model';
import { DataStorageService } from './data-storage.service';
import { Observable } from 'rxjs';
import { MovieDetailsService } from '../movie-details/movie-details.service';

@Injectable({ providedIn: 'root' })
export class MovieDetailResolver implements Resolve<MovieDetails> {
  constructor(
    private dataStorageService: DataStorageService,
    private movieDetailsService: MovieDetailsService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MovieDetails> | MovieDetails {
    let movieDetail = this.movieDetailsService.getMovieDetails();

    if (!movieDetail)
      return this.dataStorageService.fetchMovieDetails(route.params['id']);
    else 
      return movieDetail;
  }
}