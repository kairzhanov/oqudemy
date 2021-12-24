import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input() rating!: number;
  max: number = 5;

  constructor() { }

  ngOnInit(): void {
  }

  get stars(): number {
    if (this.rating > this.max) {
      return this.max - 1;
    }
    return this.rating;
  }

  counter(i: number) {
    return new Array(i);
}

}
