import { CompanyService } from './services/company.service';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

const mockCompanyService = {
  getCompanies: () => of({})
} as any;

describe('AppComponent', () => {
  const app = new AppComponent(mockCompanyService);

  it('should call company service once', () => {
    spyOn(mockCompanyService, 'getCompanies').and.callThrough();
    app.ngOnInit();
    app.companies$.subscribe();
    expect(mockCompanyService.getCompanies).toHaveBeenCalled();
  });
  it('should loaded to be true', () => {
    app.ngOnInit();
    app.companies$.subscribe();
    expect(app.loaded).toBeTruthy();
  });
});

describe('AppComponent Template', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      providers: [
        {provide: CompanyService, useValue: mockCompanyService}
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should loaded to be true', () => {
    expect(component.loaded).toBeTruthy();
  });
});
