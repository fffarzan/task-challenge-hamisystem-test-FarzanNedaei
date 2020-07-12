import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Search } from '../movie-list.model';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  searchStr: string;
  @Output() searchText = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onModelChange(searchStr: string) {
    // if (searchText === '') this.searchListFiltered = [];
    this.searchText.emit(searchStr);
  }
}
