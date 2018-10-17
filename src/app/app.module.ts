import { HttpInterceptorService } from './http-interceptor.service';

import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CustomMaterialModule } from './shared/custom-material.module';
import { CompanyCardComponent } from './company-card/company-card.component';

import { TechToIconPipe } from './company-card/tech-to-icon.pipe';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CompanyCardComponent,
    TechToIconPipe,
    FooterComponent,
    CompanyListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    HttpClientModule
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
