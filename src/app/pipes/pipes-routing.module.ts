import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PIPES_ROUTES } from './pipes.routes';

@NgModule({
  imports: [RouterModule.forChild(PIPES_ROUTES)],
  exports: [RouterModule],
})
export class PipesRoutingModule {}
