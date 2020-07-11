import { Component, OnInit } from '@angular/core';
import { MovieDetailsService } from './movie-details.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(
    private movieDetailsService: MovieDetailsService,
    private dataStorageService: DataStorageService
  ) { }

  ngOnInit() {
    this.dataStorageService.fetchMovieDetails().subscribe(() => console.log(this.movieDetailsService.getMovieDetails()))
  }

}
