import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent]
})
export class AngularThModule { }
