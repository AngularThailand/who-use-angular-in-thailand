import { mockQuiz } from './utils/mockQuiz';
import { AppComponent } from './app.component';
import { of } from 'rxjs';

describe('AppComponent', () => {
  const mockAngularQuizService = { getAllScores: jest.fn(() => of([mockQuiz()]) ), getTwitterFetch: jest.fn(() => {}) } as any;
  const app = new AppComponent(mockAngularQuizService);
  app.ngOnInit();
  app.quizzes$.subscribe();
  it('should call company service once', () => {
    expect(mockAngularQuizService.getAllScores.mock.calls.length).toEqual(1);
  });
  it('should loaded to be true', () => {
    expect(app.loaded).toBeTruthy();
  });
});
