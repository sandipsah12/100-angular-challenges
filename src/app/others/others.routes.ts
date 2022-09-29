import { Routes } from '@angular/router';
import { FormDirtyGuard } from './guards/form-dirty.guard';
import { OthersDocumentationComponent } from './others-documentation/others-documentation.component';

export const OTHERS_ROUTES: Routes = [
  {
    path: '',
    component: OthersDocumentationComponent,
    canDeactivate: [FormDirtyGuard],
  },
];
