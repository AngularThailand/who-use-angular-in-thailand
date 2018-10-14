import { mockCompany } from './../utils/mock-Company';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCardComponent } from './company-card.component';
import { TechToIconPipe } from './tech-to-icon.pipe';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CompanyCardComponent', () => {
  let component: CompanyCardComponent;
  let fixture: ComponentFixture<CompanyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyCardComponent, TechToIconPipe ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render a company', () => {
    component.company = mockCompany();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should show company logo if logo image is provided', () => {
    component.company = mockCompany();
    fixture.detectChanges();
    const logo = fixture.debugElement.query(By.css('.company-logo'));
    expect(logo).toBeTruthy();
  });

  it('should not show company logo if logo image is not provided', () => {
    component.company = mockCompany({
      logo: ''
    });
    fixture.detectChanges();
    const logo = fixture.debugElement.query(By.css('.company-logo'));
    expect(logo).toBeFalsy();
  });

  it('should show technologies images if logo image is provided', () => {
    component.company = mockCompany();
    fixture.detectChanges();
    const logos = fixture.debugElement.queryAll(By.css('.company.logo'));
    expect(logos.length).toEqual(component.company.technologies.length);
  });
});
