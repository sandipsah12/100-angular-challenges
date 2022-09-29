import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from 'src/app/components/card/card.component';
import { SnackbarComponent } from 'src/app/components/snackbar/snackbar.component';
import { TabsComponent } from 'src/app/components/tabs/tabs.component';
import { FilterTermPipe } from 'src/app/pipes/filter-term.pipe';

@NgModule({
  declarations: [
    CardComponent,
    SnackbarComponent,
    TabsComponent,
    FilterTermPipe,
  ],
  imports: [CommonModule],
  exports: [CardComponent, SnackbarComponent, TabsComponent, FilterTermPipe],
})
export class SharedModule {}
