import { shareReplay, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from '@who-use-angular-in-thailand/interfaces';
import { shuffle } from '../utils/shuffle';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor(private http: HttpClient) {}
  getCompanies() {
    return this.http.get<Company[]>('/assets/data/companies.json').pipe(
      map(companies => {
        const bufferCompanies = companies;
        shuffle(bufferCompanies);
        return bufferCompanies;
      }),
      shareReplay(1),
    );
  }
}
