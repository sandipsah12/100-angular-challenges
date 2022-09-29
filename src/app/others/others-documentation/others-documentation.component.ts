import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fadeInOutAnimation } from '../animations/fade-in-out/fade-in-out.animation';
import { slideRightAnimation } from '../animations/slide-right/slide-right.animation';
import { IFormDirty } from '../guards/form-dirty.interface';

@Component({
  selector: 'app-others-documentation',
  templateUrl: './others-documentation.component.html',
  styleUrls: ['./others-documentation.component.scss'],
  animations: [fadeInOutAnimation, slideRightAnimation],
})
export class OthersDocumentationComponent implements IFormDirty {
  public isInDOM = true;
  public form: FormGroup;
  public selectedTab = 0;
  public tabs: { title: string; active: boolean }[] = [
    { title: 'Title 1', active: true },
    { title: 'Title 2', active: false },
  ];
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  public submit() {
    this.form.reset(this.form.value);
  }
}
