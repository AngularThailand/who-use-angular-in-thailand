import { QuizCard } from './../../models/quiz.model';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'angular-quiz-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizListComponent {
  @Input() loaded: boolean;
  @Input() quizzes: QuizCard[];
  constructor() { }
}
