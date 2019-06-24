import { shareReplay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from '@who-use-angular-in-thailand/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }
  getCompanies() {
    // TODO: fix back to /assets/data/companies.json
    return this.http.get<Company[]>('http://localhost:3333/api').pipe(
      shareReplay(1));
  }
}
