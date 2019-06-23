import { AngularThModule } from '@who-use-angular-in-thailand/angular-th';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    AngularThModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
