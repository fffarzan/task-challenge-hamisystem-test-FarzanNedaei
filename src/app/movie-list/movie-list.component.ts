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
    this.dataStorageService.fetchMovieList().subscribe(
      () => this.searchList = this.movieListService.getMovieList().Search
    );
  }

  onSearchResult(searchResult: Search[]) {
    this.movieList = searchResult;
  }
}
