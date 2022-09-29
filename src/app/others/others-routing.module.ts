import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OTHERS_ROUTES } from './others.routes';

@NgModule({
  imports: [RouterModule.forChild(OTHERS_ROUTES)],
  exports: [RouterModule],
})
export class OthersRoutingModule {}
