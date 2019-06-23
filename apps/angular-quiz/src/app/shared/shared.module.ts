import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

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
