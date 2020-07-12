import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Search } from '../movie-list.model';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Output() searchText = new EventEmitter<string>();
  searchStr: string;

  constructor() { }

  ngOnInit() {
  }

  onModelChange(searchStr: string) {
    this.searchText.emit(searchStr);
  }
}
