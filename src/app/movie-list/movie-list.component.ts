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
  searchText: string;

  constructor(
    private dataStorageService: DataStorageService,
    private movieListService: MovieListService
  ) { }

  ngOnInit() {

  }

  onSearchResult(searchText: string) {
    this.searchText = searchText;
    this.getMovies(searchText, '1')
  }

  onChangePage(pageNum: number) {
    this.getMovies(this.searchText, toString(pageNum));
  }

  getMovies(searchResult: string, pageNum: string) {
    this.dataStorageService.fetchMovieList(searchResult, pageNum).subscribe(() => {
      this.searchList = this.movieListService.getMovieList().Search;
      console.log(this.movieListService.getMovieList())
      this.movieList = this.searchList.filter(
        movie => Object.values(movie).some(val => val.toLowerCase().includes(searchResult.toLowerCase()))
      );
    });
  }
}
