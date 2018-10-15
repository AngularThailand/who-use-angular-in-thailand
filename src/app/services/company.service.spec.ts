import { async } from '@angular/core/testing';
import { of } from 'rxjs';
import { mockCompany } from './../utils/mock-company';
import { CompanyService } from './company.service';

describe('CompanyService', () => {
  it('should destruct companies key into company list', async(() => {
    const companies = [mockCompany()];
    const httpMock = { get: jest.fn(() => of({companies})) };
    const service = new CompanyService(httpMock as any);
    service.getCompanies().subscribe(data => {
      expect(httpMock.get).toHaveBeenCalledWith('/assets/data/companies.json');
      expect(data).toBe(companies);
    });
  }));
});
