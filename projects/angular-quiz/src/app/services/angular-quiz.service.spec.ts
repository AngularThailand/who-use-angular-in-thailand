import { mockQuiz } from './../utils/mockQuiz';
import { tap } from 'rxjs/operators';
import { mockStatus } from './../utils/mockTwitter';
import { async } from '@angular/core/testing';
import { API_TWITTER_URL } from './twitter-api';
import { AngularQuizService } from './angular-quiz.service';
import { of } from 'rxjs';

describe('AngularQuizService', () => {
  it('should destruct Statuses into QuizCard', async(() => {
    const statuses = [mockStatus()];
    const quizzes = [mockQuiz()];
    const httpMock = { get: jest.fn(() => of({statuses})) };
    const service = new AngularQuizService(httpMock as any);
    service.getAllScores().subscribe(data => {
      expect(httpMock.get).toHaveBeenCalledWith(API_TWITTER_URL);
      expect(data).toBe(quizzes);
    });
  }));
  it('should share a single subscription', () => {
    let subscriptionCount = 0;
    const httpMock = { get: jest.fn(() => of({}).pipe(tap(() => subscriptionCount++))) };
    const service = new AngularQuizService(httpMock as any);
    expect(subscriptionCount).toEqual(0);
    const getCompanies = service.getAllScores();
    getCompanies.subscribe();
    getCompanies.subscribe();
    expect(subscriptionCount).toEqual(1);
  });
});
