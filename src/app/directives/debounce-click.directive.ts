import {
  Directive,
  EventEmitter,
  HostListener,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Directive({
  selector: '[appDebounceClick]',
})
export class DebounceClickDirective implements OnInit, OnDestroy {
  @Output() public debouceClick = new EventEmitter();
  public clicks = new Subject();

  public subscription = new Subscription();
  constructor() {}

  public ngOnInit(): void {
    const debouceTimeInMs = 500;

    this.subscription = this.clicks
      .pipe(debounceTime(debouceTimeInMs))
      .subscribe((value: any) => this.debouceClick.emit(value));
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  @HostListener('click', ['$event']) public clickEvent(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    this.clicks.next(0);
  }
}
