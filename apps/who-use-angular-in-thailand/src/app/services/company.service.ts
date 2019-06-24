import { map, shareReplay } from 'rxjs/operators';
import { Company } from '../model/company.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }
  getCompanies() {
    // /assets/data/companies.json
    return this.http.get<{companies: Company[]}>('http://localhost:3333/api').pipe(
      map(({companies}) => companies),
      shareReplay(1));
  }
}
