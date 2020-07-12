import { Component, OnInit, Input, ElementRef, OnDestroy } from '@angular/core';
import { Search } from '../movie-list.model';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() moviePreview: Search;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }
}
