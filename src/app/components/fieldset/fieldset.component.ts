import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fieldset',
  templateUrl: './fieldset.component.html',
  styleUrls: ['./fieldset.component.scss'],
})
export class FieldsetComponent {
  @Input() legend = '';
  @Input() isOpen = true;

  public toggle() {
    this.isOpen = !this.isOpen;
  }
}
