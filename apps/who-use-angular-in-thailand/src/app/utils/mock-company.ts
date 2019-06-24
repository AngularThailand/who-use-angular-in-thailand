import { Company } from '@who-use-angular-in-thailand/interfaces';

export const mockCompany = (companies: Partial<Company> = {}): Company => ({
  name: 'Angular',
  description: 'Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target',
  logo: '/assets/images/angular.svg',
  companyUrl: 'https://angular.io',
  productUrls: ['https://angular.io'],
  technologies: ['Angular', 'RxJS', 'Typescript'],
  ...companies
});
