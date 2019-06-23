import { CompanyService } from './services/company.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from './model/company.model';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'angular-th-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  companies$: Observable<Company[]>;
  loaded = false;
  constructor(private companyService: CompanyService) { }
  ngOnInit() {
    this.companies$ = this.companyService.getCompanies().pipe(
      finalize(() => {
        this.loaded = true;
    }));
  }
}
