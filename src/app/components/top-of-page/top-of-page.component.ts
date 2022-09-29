import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-top-of-page',
  templateUrl: './top-of-page.component.html',
  styleUrls: ['./top-of-page.component.scss'],
})
export class TopOfPageComponent {
  public isShown: boolean = false;

  @HostListener('window:scroll') onWindowScroll() {
    const yCoordinate = this.viewPortScroller.getScrollPosition()[1];
    this.isShown = yCoordinate > 400;
  }
  constructor(private viewPortScroller: ViewportScroller) {}

  public gotoTop() {
    this.viewPortScroller.scrollToPosition([0, 0]);
  }
}
