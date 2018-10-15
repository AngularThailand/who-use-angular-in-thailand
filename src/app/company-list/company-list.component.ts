import { Company } from './../company.model';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'angular-th-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyListComponent  {
  @Input() companies: Company[];
  @Input() loaded;
  constructor() { }

}
