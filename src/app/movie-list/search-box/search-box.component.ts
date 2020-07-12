import { Component, OnInit, Input } from '@angular/core';

import { Search } from '../movie-list.model';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Input() searchList: Search[];
  searchText: string;

  constructor() { }

  ngOnInit() {
  }

  onModelChange(str: string) {
    this.searchText = str;
  }
}
