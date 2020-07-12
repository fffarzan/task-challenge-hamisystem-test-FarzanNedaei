import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Search } from '../movie-list.model';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Input() searchList: Search[];
  @Output() searchResult = new EventEmitter<Search[]>();
  searchListFiltered: Search[];

  constructor() { }

  ngOnInit() {
  }

  onModelChange(searchText: string) {
    this.searchListFiltered = this.searchList.filter(
      movie => Object.values(movie).some(val => val.toLowerCase().includes(searchText.toLowerCase()))
    );

    if (searchText === '') this.searchListFiltered = [];

    this.searchResult.emit(this.searchListFiltered);
  }
}
