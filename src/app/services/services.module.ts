import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ServicesRoutingModule } from './services-routing.module';
import { SharedModule } from 'src/shared/shared.module';
import { ServiceDocumentationComponent } from './service-documentation/service-documentation.component';
import { UserService } from './user/user.service';
import { LocalStorageService } from './localstorage/local-storage.service';

@NgModule({
  declarations: [ServiceDocumentationComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ServicesRoutingModule,
    SharedModule,
  ],
  providers: [
    UserService,
    LocalStorageService,
    {
      provide: 'LocalStorage',
      useValue: window.localStorage,
    },
  ],
})
export class ServicesModule {}
