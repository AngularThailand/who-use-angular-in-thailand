import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatIconModule, MatButtonModule, MatProgressSpinnerModule } from '@angular/material';

import { QuizCardComponent } from './quiz-card/quiz-card.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
    HttpClientModule,
  ],
  declarations: [QuizCardComponent, QuizListComponent],
  exports: [
    QuizCardComponent,
    QuizListComponent
  ]
})
export class SharedModule { }
