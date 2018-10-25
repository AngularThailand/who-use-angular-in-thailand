import { AngularQuizService } from './services/angular-quiz.service';
import { Observable, throwError } from 'rxjs';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { QuizCard } from './models/quiz.model';
import { finalize, catchError } from 'rxjs/operators';

@Component({
  selector: 'angular-quiz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loaded = false;
  error: string;
  quizzes$: Observable<QuizCard[]>;
  constructor(private angularQuizService: AngularQuizService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.quizzes$ = this.angularQuizService.getTwitterFetch().pipe(
      catchError(err => {
        this.error = err;
        return throwError(err);
      }),
      finalize(() => {
        this.loaded = true;
        this.cd.detectChanges();
      })
    );
  }
}
