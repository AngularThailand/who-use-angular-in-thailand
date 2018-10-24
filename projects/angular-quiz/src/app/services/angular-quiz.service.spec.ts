import { mockQuiz } from './../utils/mockQuiz';
import { tap } from 'rxjs/operators';
import { mockStatus } from './../utils/mockTwitter';
import { async } from '@angular/core/testing';
import { AngularQuizService } from './angular-quiz.service';
import { of } from 'rxjs';

describe('AngularQuizService', () => {
  const statuses = [mockStatus()];
  it('should destruct Statuses into QuizCard', async(() => {
    const quizzes = [mockQuiz()];
    const httpMock = { get: jest.fn(() => of({statuses})) } as any;
    const service = new AngularQuizService(httpMock);
    service.getAllScores().subscribe(data => {
      expect(data).toEqual(quizzes);
    });
  }));
  it('should share a single subscription', () => {
    let subscriptionCount = 0;
    const httpMock = { get: jest.fn(() => of({statuses}).pipe(tap(() => subscriptionCount++))) } as any;
    const service = new AngularQuizService(httpMock);
    expect(subscriptionCount).toEqual(0);
    const getAllScores = service.getAllScores();
    getAllScores.subscribe();
    getAllScores.subscribe();
    expect(subscriptionCount).toEqual(1);
  });
});
