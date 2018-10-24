import { QuizCard } from './../../models/quiz.model';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'angular-quiz-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizCardComponent {
  @Input() quizCard: QuizCard;
  constructor() { }
}
