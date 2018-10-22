import { By } from '@angular/platform-browser';
import { mockCompany } from '../../utils/mock-company';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyListComponent } from './company-list.component';
import { NO_ERRORS_SCHEMA, Component, DebugElement } from '@angular/core';
import { of } from 'rxjs';

@Component({
  template: `<angular-th-company-list [companies]="companies$ | async" [loaded]="loaded"></angular-th-company-list>`
})
class TestHostComponent {
  companies$ = of([mockCompany()]);
  loaded = false;
}

describe('CompanyListComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let companyListDebugElement: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyListComponent, TestHostComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    companyListDebugElement = fixture.debugElement.childNodes[0] as DebugElement;
    fixture.detectChanges();
  });

  it('should render spinner when companies not loaded', () => {
    component.loaded = false;
    fixture.detectChanges();
    const matSpinner = companyListDebugElement.query(By.css('mat-progress-spinner'));
    expect(matSpinner).not.toBeNull();
  });
  it('should render company list when companies loaded', () => {
    component.loaded = true;
    fixture.detectChanges();
    const companyCards = companyListDebugElement.queryAll(By.css('angular-th-company-card'));
    expect(companyCards.length).toEqual(1);
  });
});
