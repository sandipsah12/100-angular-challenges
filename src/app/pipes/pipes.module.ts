import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { PipeDocumentationComponent } from './pipe-documentation/pipe-documentation.component';
import { TruncatePipe } from './truncate.pipe';
import { CreditCardFormatterPipe } from './credit-card-formatter.pipe';
import { FlattenPipe } from './flatten.pipe';
import { SharedModule } from 'src/shared/shared.module';
import { RichTextPipe } from './rich-text.pipe';
import { SortByPipe } from './sort-by.pipe';
import { SortByKeyPipe } from './sort-by-key.pipe';

@NgModule({
  declarations: [
    PipeDocumentationComponent,
    TruncatePipe,
    CreditCardFormatterPipe,
    FlattenPipe,
    RichTextPipe,
    SortByPipe,
    SortByKeyPipe,
  ],
  imports: [CommonModule, PipesRoutingModule, SharedModule],
})
export class PipesModule {}
