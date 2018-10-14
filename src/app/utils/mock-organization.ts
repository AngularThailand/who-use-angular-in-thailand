import { Company } from './../company.model';

export const mockOrganization = (companies: Partial<Company> = {}): Company => ({
  name: 'Angular',
  description: 'Example Description',
  logo: '/assets/images/angular.svg',
  link: 'https://angular.io',
  technologies: ['Angular', 'RxJS', 'Typescript'],
  ...companies
});
