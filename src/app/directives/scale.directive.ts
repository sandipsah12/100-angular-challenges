import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScale]',
})
export class ScaleDirective {
  constructor(public element: ElementRef) {}

  @HostListener('mouseover') public mouseover() {
    this.element.nativeElement.style.transition = 'all 0.3s';
    this.element.nativeElement.style.transform = 'scale(1.25)';
  }

  @HostListener('mouseout') public mouseout() {
    this.element.nativeElement.style.transform = 'scale(1)';
  }
}
