import { getGreeting } from '../support/app.po';

describe('angular-quiz', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to angular-quiz!');
  });
});
