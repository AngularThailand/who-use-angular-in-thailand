import { CompanyModule } from './company/company.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AngularThModule } from '@who-use-angular-in-thailand/angular-th';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { HttpInterceptorService } from './interceptors/http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    AngularThModule,
    CompanyModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    ...(environment.ghpages ? [
      {
        provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true
      }
    ] : []),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
