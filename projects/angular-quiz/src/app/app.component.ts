import { AngularQuizService } from './services/angular-quiz.service';
import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { QuizCard } from './models/quiz.model';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'angular-quiz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  loaded = false;
  quizzes$: Observable<QuizCard[]>;
  constructor(private angularQuizService: AngularQuizService) { }

  ngOnInit() {
    this.quizzes$ = this.angularQuizService.getAllScores().pipe(finalize(() => {
      this.loaded = true;
    }));
  }
}
