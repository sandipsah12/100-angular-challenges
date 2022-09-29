import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OthersDocumentationComponent } from './others-documentation/others-documentation.component';
import { OthersRoutingModule } from './others-routing.module';
import { SharedModule } from 'src/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [OthersDocumentationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OthersRoutingModule,
    SharedModule,
  ],
})
export class OthersModule {}
