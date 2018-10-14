import { NgModule } from '@angular/core';
import { MatCardModule, MatToolbarModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule, } from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
})
export class CustomMaterialModule { }
