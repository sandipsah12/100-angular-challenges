import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  @Input() public counter = 0;
  @Input() public min = 0;
  @Input() public max = Number.MAX_SAFE_INTEGER;

  public decrement() {
    this.counter > this.min ? this.counter-- : this.min;
  }

  public increment() {
    this.counter < this.max ? this.counter++ : this.max;
  }
}
