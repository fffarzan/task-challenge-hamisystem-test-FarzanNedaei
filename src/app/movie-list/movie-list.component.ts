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
  paginationNum: number;

  constructor(
    private dataStorageService: DataStorageService,
    private movieListService: MovieListService
  ) { }

  ngOnInit() {
  }

  onSearchResult(searchText: string) {
    if (searchText.length >= 3) {
      this.searchText = searchText;
      this.getMovies(searchText, '1');
    } else {
      this.searchText = '';
      this.movieList = [];
    }
    
  }

  onChangePage(currentPage: number) {
    this.getMovies(this.searchText, currentPage.toString());
  }

  private getMovies(searchResult: string, pageNum: string) {
    this.dataStorageService.fetchMovieList(searchResult, pageNum).subscribe(() => {
      this.searchList = this.movieListService.getMovieList().Search;
      this.paginationNum = +this.movieListService.getMovieList().totalResults;

      this.movieList = this.searchList.filter(
        movie => Object.values(movie).some(val => val.toLowerCase().includes(searchResult.toLowerCase()))
      );
    });
  }
}
