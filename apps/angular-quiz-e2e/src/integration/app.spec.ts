import { getGreeting, getCards } from '../support/app.po';

describe('angular-quiz', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().should('contain', 'Angular Quiz');
  });
  it('should contain at least one tweet', () => {
    getCards().should('exist');
  });
});
