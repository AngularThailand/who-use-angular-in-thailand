import { mockCompany } from '../utils/mock-company';
import { CompanyCardComponent } from './../company-card/company-card.component';
import { MatProgressSpinnerModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyListComponent } from './company-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CompanyListComponent', () => {
  let component: CompanyListComponent;
  let fixture: ComponentFixture<CompanyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyListComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render spinner when companies not loaded', () => {
    component.loaded = false;
    fixture.detectChanges();
    const el = fixture.debugElement.nativeElement;
    const matSpinner = el.querySelector('mat-progress-spinner');
    expect(matSpinner).toBeTruthy();
  });
  it('should render company list when companies loaded', () => {
    component.loaded = true;
    component.companies = [mockCompany()];
    fixture.detectChanges();
    const el = fixture.debugElement.nativeElement;
    const companyCards = el.querySelectorAll('angular-th-company-card');
    expect(companyCards.length).toEqual(component.companies.length);
  });
});
