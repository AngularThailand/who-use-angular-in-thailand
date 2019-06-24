import { CompaniesResponse } from '@who-use-angular-in-thailand/interfaces';
import { Injectable } from '@nestjs/common';
import { companies } from './companies';

@Injectable()
export class AppService {
  getData(): CompaniesResponse {
    return companies;
  }
}
