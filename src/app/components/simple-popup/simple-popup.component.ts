import { Component, Input } from '@angular/core';
import { delay, of } from 'rxjs';
import { fadeInOutAnimation } from 'src/app/others/animations/fade-in-out/fade-in-out.animation';

@Component({
  selector: 'app-simple-popup',
  templateUrl: './simple-popup.component.html',
  styleUrls: ['./simple-popup.component.scss'],
  animations: [fadeInOutAnimation],
})
export class SimplePopupComponent {
  @Input() public message = '';
  public isShown = false;

  public show() {
    if (!this.isShown) {
      this.isShown = true;

      const subscription = of(null)
        .pipe(delay(3000))
        .subscribe({
          complete: () => {
            this.isShown = false;
            subscription.unsubscribe();
          },
        });
    }
  }
}
