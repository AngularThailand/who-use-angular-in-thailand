import { TestBed } from '@angular/core/testing';

import { AngularQuizService } from './angular-quiz.service';

describe('AngularQuizService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularQuizService = TestBed.get(AngularQuizService);
    expect(service).toBeTruthy();
  });
});
