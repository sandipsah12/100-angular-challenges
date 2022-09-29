import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { COMPONENT_ROUTES } from './components.routes';

@NgModule({
  imports: [RouterModule.forChild(COMPONENT_ROUTES)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
