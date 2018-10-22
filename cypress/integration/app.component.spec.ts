describe('AppComponent', () => {
  const headerText = 'Who use Angular in Thailand';
  it(`should contain header text with \"${headerText}\"`, () => {
    cy
    .visit('/')
    .get('mat-toolbar-row').contains(headerText);
  });
  it('should contain at least one company title', () => {
    cy
    .visit('/')
    .get('mat-card-title')
    .should('not.be.undefined');
  });
});
