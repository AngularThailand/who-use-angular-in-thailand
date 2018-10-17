describe('AppComponent', () => {
  const headerText = 'Who use Angular(JS) in Thailand';
  it(`should contain header text with \"${headerText}\"`, () => {
    cy
    .visit('/')
    .get('mat-toolbar-row').contains(headerText);
  });
  it('should contain at least one company title', () => {
    cy
    .visit('/')
    .get('mat-card-title')
    .exist;
  });
});
