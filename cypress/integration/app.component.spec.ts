describe('AppComponent', () => {
  const headerText = 'Who use Angular(JS) in Thailand';
  it(`should contain header text with \"${headerText}\"`, () => {
    cy
    .visit('/')
    .get('angular-th-header > header > mat-toolbar > mat-toolbar-row').contains(headerText);
  });
});
