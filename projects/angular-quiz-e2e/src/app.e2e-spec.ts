import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toContain('Angular Quiz');
  });
  it('should contain at least one quiz card', () => {
    page.navigateTo();
    expect(page.getQuizCardName()).toBeDefined();
  });
});
