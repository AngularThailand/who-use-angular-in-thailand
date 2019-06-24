import { Company } from '@who-use-angular-in-thailand/interfaces';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'angular-th-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyCardComponent {
  @Input() company: Company;
  constructor() { }
}
