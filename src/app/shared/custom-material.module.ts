import { NgModule } from '@angular/core';
import { MatCardModule, MatToolbarModule, MatButtonModule, MatIconModule, } from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
})
export class CustomMaterialModule { }
