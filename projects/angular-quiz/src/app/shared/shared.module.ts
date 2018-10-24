import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatIconModule, MatButtonModule } from '@angular/material';

import { QuizCardComponent } from './quiz-card/quiz-card.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  declarations: [QuizCardComponent],
  exports: [
    QuizCardComponent
  ]
})
export class SharedModule { }
