import { NO_ERRORS_SCHEMA, Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { mockCompany } from './../../utils/mock-company';
import { CompanyCardComponent } from './company-card.component';
import { TechToIconPipe } from './tech-to-icon.pipe';


@Component({
  template: '<angular-th-company-card [company]="company"></angular-th-company-card>'
})
class TestHostComponent {
  company = mockCompany();
}

describe('CompanyCardComponent', () => {
  let component: CompanyCardComponent;
  let fixture: ComponentFixture<CompanyCardComponent>;
  let companyCardDebugElement: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHostComponent, CompanyCardComponent, TechToIconPipe ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    companyCardDebugElement = fixture.debugElement.childNodes[0] as DebugElement;
    fixture.detectChanges();
  });

  it('should render a company', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should show company logo if logo image is provided', () => {
    const logo = companyCardDebugElement.query(By.css('.company-logo'));
    expect(logo).not.toBeNull();
  });

  it('should not show company logo if logo image is not provided', () => {
    component.company = mockCompany({
      logo: ''
    });
    fixture.detectChanges();
    const logo = companyCardDebugElement.query(By.css('.company-logo'));
    expect(logo).toBeNull();
  });

  it('should show technologies images if logo image is provided', () => {
    const logos = companyCardDebugElement.queryAll(By.css('.tech-logo'));
    expect(logos.length).toEqual(component.company.technologies.length);
  });
});
