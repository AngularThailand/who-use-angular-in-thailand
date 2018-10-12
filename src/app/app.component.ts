import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from './company.model';
import { map, share } from 'rxjs/operators';

@Component({
  selector: 'angular-th-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  companies$: Observable<Company[]>;
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.companies$ = this.http.get<{companies: Company[]}>('/assets/data/companies.json').pipe(map( ({companies}) => companies), share());
  }
}
