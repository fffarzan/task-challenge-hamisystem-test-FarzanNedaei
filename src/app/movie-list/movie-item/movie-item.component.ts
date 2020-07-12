import { Component, OnInit, Input } from '@angular/core';
import { Search } from '../movie-list.model';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() moviePreview: Search;

  constructor() { }

  ngOnInit() {
  }

}
