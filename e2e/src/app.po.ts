import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular-th-header header mat-toolbar mat-toolbar-row')).getText();
  }
}
