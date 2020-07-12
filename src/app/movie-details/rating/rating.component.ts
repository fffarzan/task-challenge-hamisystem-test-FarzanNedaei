import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() rating: { Source: string, Value: string };
  ratingValue: string

  constructor() { }

  ngOnInit() {
    this.changeRatingValueToWidth(this.rating.Value);
  }

  private changeRatingValueToWidth(value: string) {
    let subStr = [];

    if (!value.includes('%') && value.includes('/')) {
      subStr = value.split('/');
      subStr[1] = 100 / +subStr[1];
      this.ratingValue = (+subStr[0] * subStr[1]).toString() + '%'; 
    } else {
      this.ratingValue = value;
    }
  }
}
