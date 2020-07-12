import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() paginationNum: number;
  @Output() currentPage = new EventEmitter<number>();
  totalPagesNumber: number;
  pageNum: number = 1;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.totalPagesNumber = Math.round(this.paginationNum / 10);
  }

  onLoadPreviousPage() {
    if (this.pageNum > 1) this.pageNum--;
    this.currentPage.emit(this.pageNum);
  }

  onLoadNextPage() {
    if (this.pageNum < this.totalPagesNumber) this.pageNum++;
    this.currentPage.emit(this.pageNum);
  }
}
