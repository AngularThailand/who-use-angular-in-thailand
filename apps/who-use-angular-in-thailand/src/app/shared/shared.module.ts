import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CompanyListComponent } from './company-list/company-list.component';
import { TechToIconPipe } from './company-card/tech-to-icon.pipe';
import { CompanyCardComponent } from './company-card/company-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  declarations: [
    CompanyCardComponent,
    TechToIconPipe,
    CompanyListComponent
  ],
  exports: [
    CompanyListComponent,
    CompanyCardComponent,
  ]
})
export class SharedModule { }
