import { Component, OnInit } from '@angular/core';

import { DataStorageService } from '../shared/data-storage.service';
import { MovieListService } from './movie-list.service';
import { Search } from './movie-list.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  searchList: Search[] = [];
  movieList: Search[] = [];

  constructor(
    private dataStorageService: DataStorageService,
    private movieListService: MovieListService
  ) { }

  ngOnInit() {

  }

  onSearchResult(searchResult: string) {
    // get pagination number

    this.getMovies(searchResult)
  }

  getMovies(searchResult: string) {
    this.dataStorageService.fetchMovieList(searchResult).subscribe(() => {
      this.searchList = this.movieListService.getMovieList().Search;
      console.log(this.movieListService.getMovieList())
      this.movieList = this.searchList.filter(
        movie => Object.values(movie).some(val => val.toLowerCase().includes(searchResult.toLowerCase()))
      );
    });
  }
}
