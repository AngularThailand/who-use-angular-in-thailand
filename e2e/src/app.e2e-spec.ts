import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toContain('Who use Angular(JS) in Thailand');
  });
  it('should contain at least one company title', () => {
    page.navigateTo();
    expect(page.getFirstCompanyName()).toBeDefined();
  });
});
