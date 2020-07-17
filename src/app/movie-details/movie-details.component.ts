import { Component, OnInit } from '@angular/core';

import { MovieDetailsService } from './movie-details.service';
import { DataStorageService } from '../shared/data-storage.service';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from './movie-details.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movieId: string;
  movieDetails: MovieDetails;

  constructor(
    private route: ActivatedRoute,
    private movieDetailsService: MovieDetailsService,
    private dataStorageService: DataStorageService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => this.movieDetails = data.movieDetails);
  }
}
