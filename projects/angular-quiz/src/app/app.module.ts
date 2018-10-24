import { HttpClientModule } from '@angular/common/http';
import { AngularThModule } from 'angular-th';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularThModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
