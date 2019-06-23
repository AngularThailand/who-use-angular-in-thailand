import { async } from '@angular/core/testing';
import { of } from 'rxjs';
import { mockCompany } from './../utils/mock-company';
import { CompanyService } from './company.service';
import { tap } from 'rxjs/operators';

describe('CompanyService', () => {
  it('should destruct companies key into company list', async(() => {
    const companies = [mockCompany()];
    const httpMock = { get: () => of({companies}) };
    spyOn(httpMock, 'get').and.callThrough();
    const service = new CompanyService(httpMock as any);
    service.getCompanies().subscribe(data => {
      expect(httpMock.get).toHaveBeenCalledWith('/assets/data/companies.json');
      expect(data).toBe(companies);
    });
  }));
  it('should share a single subscription', () => {
    let subscriptionCount = 0;
    const httpMock = { get: () => of({}).pipe(tap(() => subscriptionCount++)) } as any;
    const service = new CompanyService(httpMock);
    expect(subscriptionCount).toEqual(0);
    const getCompanies = service.getCompanies();
    getCompanies.subscribe();
    getCompanies.subscribe();
    expect(subscriptionCount).toEqual(1);
  });
});
