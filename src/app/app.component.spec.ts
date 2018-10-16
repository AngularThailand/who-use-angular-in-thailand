
import { AppComponent } from './app.component';
import { of } from 'rxjs';

describe('AppComponent', () => {
  const mockCompanyService = {
    getCompanies: jest.fn(() => of({}))
  } as any;
  const app = new AppComponent(mockCompanyService);
  app.ngOnInit();
  app.companies$.subscribe();
  it('should call company service once', () => {
    expect(mockCompanyService.getCompanies.mock.calls.length).toEqual(1);
  });
  it('should loaded to be true', () => {
    expect(app.loaded).toBeTruthy();
  });
});
