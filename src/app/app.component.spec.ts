import { CompanyService } from './services/company.service';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';
import { mockCompany } from './utils/mock-company';
import { of } from 'rxjs';

xdescribe('AppComponent', () => {

  it('should call company service once', () => {
    const mockCompanyService = {
      getCompanies: jest.fn()
    } as any;
    mockCompanyService.getCompanies.mockImplmentationOnce(() => of([mockCompany()]));
    const app = new AppComponent(mockCompanyService);
    app.ngOnInit();
    expect(app.loaded).toBeFalsy();
  });
});
