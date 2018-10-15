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
    component.company = mockCompany();
    fixture.detectChanges();
  });

  it('should render a company', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should show company logo if logo image is provided', () => {
    const logo = fixture.debugElement.query(By.css('.company-logo'));
    expect(logo).not.toBeNull();
  });

  it('should not show company logo if logo image is not provided', () => {
    component.company = mockCompany({
      logo: ''
    });
    fixture.detectChanges();
    const logo = fixture.debugElement.query(By.css('.company-logo'));
    expect(logo).toBeNull();
  });

  it('should show technologies images if logo image is provided', () => {
    const logos = fixture.debugElement.queryAll(By.css('.tech-logo'));
    expect(logos.length).toEqual(component.company.technologies.length);
  });
});
