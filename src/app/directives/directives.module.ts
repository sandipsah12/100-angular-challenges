import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveDocumentationComponent } from './directive-documentation/directive-documentation.component';
import { DirectivesRoutingModule } from './directives-routing.module';
import { DebounceClickDirective } from './debounce-click.directive';
import { SharedModule } from 'src/shared/shared.module';
import { RippleDirective } from './ripple.directive';
import { ScaleDirective } from './scale.directive';
import { CopyDirective } from './copy.directive';
import { LazyLoadImageDirective } from './lazy-load-image.directive';
import { AutoFocusDirective } from './auto-focus.directive';

@NgModule({
  declarations: [
    DirectiveDocumentationComponent,
    DebounceClickDirective,
    RippleDirective,
    ScaleDirective,
    CopyDirective,
    LazyLoadImageDirective,
    AutoFocusDirective,
  ],
  imports: [CommonModule, DirectivesRoutingModule, SharedModule],
  providers: [
    { provide: 'Navigator', useValue: navigator },
    { provide: 'Document', useValue: document },
    { provide: 'Window', useValue: window },
  ],
})
export class DirectivesModule {}
