import { map, share, tap, finalize } from 'rxjs/operators';
import { Company } from './../company.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }
  getCompanies() {
    return this.http.get<{companies: Company[]}>('/assets/data/companies.json').pipe(
      map(({companies}) => companies),
      share());
  }
}
