import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-ratings',
  templateUrl: './star-ratings.component.html',
  styleUrls: ['./star-ratings.component.scss'],
})
export class StarRatingsComponent {
  @Input() public rating = 5;

  public get fullStars(): number[] {
    const totalFullStars = Math.floor(this.rating);

    return Array(totalFullStars).fill(0);
  }

  public get hasHalfStar(): boolean {
    return this.rating - Math.floor(this.rating) >= 0.5 && this.rating !== 5;
  }

  public get emptyStars(): number[] {
    return Array(Math.floor(5 - this.rating)).fill(0);
  }
}
