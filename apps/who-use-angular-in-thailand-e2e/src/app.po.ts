import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeaderText() {
    return element.all(by.css('mat-toolbar-row')).first().getText();
  }
  getFirstCompanyName() {
    return element(
      by.
      css('mat-card-title'))
      .getText();
  }
}
