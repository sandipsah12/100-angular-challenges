import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SERVICES_ROUTES } from './services.routes';

@NgModule({
  imports: [RouterModule.forChild(SERVICES_ROUTES)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {}
